"use client";
import { useRef, useState } from "react";
import { Copy, Download, Trash2, AlertTriangle, CheckCircle } from "react-feather";
import "../style.css";

const SqlBeautifier = () => {
    const [inputSql, setInputSql] = useState("");
    const [beautifiedSql, setBeautifiedSql] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [errorLine, setErrorLine] = useState(null);
    const [showError, setShowError] = useState(false);
    const [showCopyMessage, setShowCopyMessage] = useState(false);
    const [showDownloadMessage, setShowDownloadMessage] = useState(false);
    const inputLineRef = useRef(null);
    const inputTextRef = useRef(null);
    const outputLineRef = useRef(null);
    const outputTextRef = useRef(null);

    const handleScroll = () => {
        if (inputTextRef.current && inputLineRef.current) {
            inputLineRef.current.scrollTop = inputTextRef.current.scrollTop;
        }
        if (outputTextRef.current && outputLineRef.current) {
            outputLineRef.current.scrollTop = outputTextRef.current.scrollTop;
        }
    };

    const getLineNumbers = (code) => {
        return code.split("\n").map((_, index) => index + 1).join("\n");
    };

    // Function to beautify SQL
    const beautifySql = (sql) => {
        try {
            // Basic SQL beautification with indentation
            let formatted = "";
            let indent = 0;
            let inString = false;
            let stringChar = '';
            let inComment = false;
            let inLineComment = false;
            let inParenthesis = 0;
            let lastChar = '';

            // Standardize line endings and remove extra whitespace
            sql = sql.replace(/\r\n/g, '\n').replace(/\t/g, '    ').trim();

            for (let i = 0; i < sql.length; i++) {
                const char = sql[i];

                // Handle string literals
                if (!inComment && !inLineComment && (char === "'" || char === '"') && lastChar !== '\\') {
                    if (!inString) {
                        inString = true;
                        stringChar = char;
                    } else if (char === stringChar) {
                        inString = false;
                        stringChar = '';
                    }
                    formatted += char;
                    lastChar = char;
                    continue;
                }

                // Handle comments
                if (!inString) {
                    // Start of block comment
                    if (char === '/' && sql[i + 1] === '*' && !inLineComment) {
                        inComment = true;
                        formatted += '\n' + '  '.repeat(indent) + '/*';
                        i++;
                        lastChar = '*';
                        continue;
                    }

                    // End of block comment
                    if (char === '*' && sql[i + 1] === '/' && inComment) {
                        inComment = false;
                        formatted += '*/';
                        i++;
                        lastChar = '/';
                        continue;
                    }

                    // Line comment
                    if (char === '-' && sql[i + 1] === '-' && !inComment) {
                        inLineComment = true;
                        formatted += '\n' + '  '.repeat(indent) + '--';
                        i++;
                        lastChar = '-';
                        continue;
                    }

                    if (char === '\n' && inLineComment) {
                        inLineComment = false;
                    }
                }

                if (inComment || inLineComment) {
                    formatted += char;
                    lastChar = char;
                    continue;
                }

                // Handle parentheses
                if (!inString && char === '(') {
                    inParenthesis++;
                    formatted += char + '\n' + '  '.repeat(indent + 1);
                    lastChar = char;
                    continue;
                }

                if (!inString && char === ')') {
                    inParenthesis--;
                    if (inParenthesis < 0) inParenthesis = 0;
                    formatted = formatted.trimEnd() + '\n' + '  '.repeat(indent) + char;
                    lastChar = char;
                    continue;
                }

                // Handle SQL keywords (simplified approach)
                if (!inString && /[ \n\t(,;]/.test(lastChar)) {
                    const nextWord = sql.substr(i, 10).split(/[ \n\t(,;]/)[0].toUpperCase();
                    const keywords = ['SELECT', 'FROM', 'WHERE', 'JOIN', 'INNER', 'LEFT', 'RIGHT',
                        'GROUP BY', 'ORDER BY', 'HAVING', 'INSERT', 'INTO', 'VALUES',
                        'UPDATE', 'SET', 'DELETE', 'CREATE', 'TABLE', 'INDEX', 'VIEW',
                        'ALTER', 'DROP', 'TRUNCATE', 'EXEC', 'BEGIN', 'END', 'CASE',
                        'WHEN', 'THEN', 'ELSE', 'AND', 'OR', 'NOT', 'IN', 'BETWEEN'];

                    if (keywords.includes(nextWord)) {
                        formatted = formatted.trimEnd() + '\n' + '  '.repeat(indent);
                        i += nextWord.length - 1;
                        formatted += nextWord + ' ';
                        lastChar = ' ';
                        continue;
                    }
                }

                // Handle commas
                if (!inString && char === ',') {
                    formatted = formatted.trimEnd() + ',\n' + '  '.repeat(indent);
                    lastChar = '\n';
                    continue;
                }

                // Handle semicolons
                if (!inString && char === ';') {
                    formatted = formatted.trimEnd() + ';\n\n';
                    indent = 0;
                    lastChar = '\n';
                    continue;
                }

                formatted += char;
                lastChar = char;
            }

            // Clean up extra whitespace and ensure proper line breaks
            formatted = formatted
                .replace(/\n\s*\n/g, '\n') // Remove empty lines
                .replace(/^\s+|\s+$/g, '') // Trim start/end
                .replace(/\n /g, '\n') // Remove space after newline
                .replace(/ \n/g, '\n') // Remove space before newline
                .replace(/\n{3,}/g, '\n\n'); // Limit consecutive newlines

            return formatted;
        } catch (error) {
            throw new Error("Error beautifying SQL");
        }
    };

    const handleInputChange = (e) => {
        const sql = e.target.value;
        setInputSql(sql);

        if (!sql.trim()) {
            setErrorMessage("");
            setErrorLine(null);
            setShowError(false);
            setBeautifiedSql("");
            return;
        }

        try {
            const result = beautifySql(sql);
            setBeautifiedSql(result);
            setErrorMessage("");
            setErrorLine(null);
            setShowError(false);
        } catch (error) {
            setErrorMessage(error.message);
            setErrorLine(null);
            setShowError(true);
            setBeautifiedSql("");
        }
    };

    const handleBeautify = () => {
        if (!inputSql.trim()) {
            setErrorMessage("No SQL code to beautify.");
            setShowError(true);
            return;
        }

        try {
            const result = beautifySql(inputSql);
            setBeautifiedSql(result);
        } catch (error) {
            setErrorMessage(error.message);
            setShowError(true);
        }
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            setShowCopyMessage(true);
            setTimeout(() => setShowCopyMessage(false), 2000);
        });
    };

    const handleDownload = () => {
        if (!beautifiedSql.trim()) {
            setErrorMessage("No beautified SQL to download.");
            setShowError(true);
            return;
        }

        const blob = new Blob([beautifiedSql], { type: "text/sql" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "beautified.sql";
        a.click();
        URL.revokeObjectURL(url);

        setShowDownloadMessage(true);
        setTimeout(() => setShowDownloadMessage(false), 2000);
    };

    const handleClear = (side) => {
        if (side === "input") {
            setInputSql("");
            setErrorMessage("");
            setErrorLine(null);
            setShowError(false);
            setBeautifiedSql("");
        }
        if (side === "output") {
            setBeautifiedSql("");
        }
    };

    return (
        <>
            {showError && errorMessage && (
                <div className="bg-red-600 text-white p-3 rounded-md mb-4 flex items-center">
                    <AlertTriangle size={20} className="mr-2" />
                    <div>
                        <span>{errorMessage}</span>
                        {errorLine && (
                            <div className="text-sm mt-1">
                                Error at line: {errorLine}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Copy Message */}
            {showCopyMessage && (
                <div className="bg-green-600 text-white p-3 rounded-md mb-4 flex items-center fixed top-4 right-4">
                    <CheckCircle size={20} className="mr-2" />
                    <span>Content Copied!</span>
                </div>
            )}

            {/* Download Message */}
            {showDownloadMessage && (
                <div className="bg-green-600 text-white p-3 rounded-md mb-4 flex items-center fixed top-4 right-4">
                    <CheckCircle size={20} className="mr-2" />
                    <span>File Downloaded!</span>
                </div>
            )}

            <div className="flex justify-center w-full">
                <button
                    onClick={handleBeautify}
                    className="font-bold bg-blue-500 px-8 py-2 rounded text-white hover:bg-blue-600 transition"
                >
                    Beautify SQL
                </button>
            </div>

            <div className="container mx-auto p-4">
                <div className="grid grid-cols-2 w-full gap-5">
                    {/* Input Section */}
                    <div className="border border-gray-300 rounded-lg overflow-hidden">
                        <div className="bg-gray-800 p-2 flex justify-end space-x-4">
                            <span onClick={() => handleClear("input")} className="cursor-pointer text-white">
                                <Trash2 size={25} />
                            </span>
                            <span onClick={() => handleCopy(inputSql)} className="cursor-pointer text-white">
                                <Copy size={25} />
                            </span>
                        </div>
                        <div className="flex">
                            <div
                                style={{ height: 400, overflow: "hidden" }}
                                className="bg-gray-800 text-white text-right p-2 pr-3 text-sm"
                                ref={inputLineRef}
                            >
                                <pre>{getLineNumbers(inputSql)}</pre>
                            </div>
                            <textarea
                                ref={inputTextRef}
                                onScroll={handleScroll}
                                className="w-full p-2 bg-gray-900 text-white outline-none resize-none"
                                style={{ height: 400 }}
                                placeholder="Paste your SQL here..."
                                value={inputSql}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    {/* Output Section */}
                    <div className="border border-gray-300 rounded-lg overflow-hidden">
                        <div className="bg-gray-800 p-2 flex justify-end space-x-4">
                            <span onClick={() => handleClear("output")} className="cursor-pointer text-white">
                                <Trash2 size={25} />
                            </span>
                            <span onClick={() => handleCopy(beautifiedSql || "")} className="cursor-pointer text-white">
                                <Copy size={25} />
                            </span>
                            <span onClick={handleDownload} className="cursor-pointer text-white">
                                <Download size={25} />
                            </span>
                        </div>
                        <div className="flex">
                            <div
                                style={{ height: 400, overflow: "hidden" }}
                                className="bg-gray-800 text-white text-right p-2 pr-3 text-sm"
                                ref={outputLineRef}
                            >
                                <pre>{getLineNumbers(beautifiedSql)}</pre>
                            </div>
                            <textarea
                                ref={outputTextRef}
                                onScroll={handleScroll}
                                className="w-full p-2 bg-gray-900 text-white outline-none resize-none"
                                style={{ height: 400 }}
                                placeholder="Beautified SQL will appear here..."
                                value={beautifiedSql}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SqlBeautifier;