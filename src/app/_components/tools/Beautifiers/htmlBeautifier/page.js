"use client";
import { useRef, useState } from "react";
import { Copy, Download, Trash2, AlertTriangle, CheckCircle } from "react-feather";
import "../style.css";

const HtmlBeautifier = () => {
    const [inputHtml, setInputHtml] = useState("");
    const [beautifiedHtml, setBeautifiedHtml] = useState("");
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

    // Function to beautify HTML
    const beautifyHtml = (html) => {
        try {
            // Basic HTML beautification with indentation
            let formatted = "";
            let indent = 0;
            let inTag = false;
            let inComment = false;
            let inScriptOrStyle = false;
            let currentTag = "";

            html = html.replace(/[\r\n]+/g, ""); // Remove existing line breaks

            for (let i = 0; i < html.length; i++) {
                const char = html[i];

                // Check for comment start
                if (!inScriptOrStyle && !inComment && char === "<" && html.substr(i, 4) === "<!--") {
                    inComment = true;
                    formatted += "\n" + "  ".repeat(indent) + "<!--";
                    i += 3;
                    continue;
                }

                // Check for comment end
                if (inComment && char === "-" && html.substr(i, 3) === "-->") {
                    inComment = false;
                    formatted += "-->";
                    i += 2;
                    continue;
                }

                if (inComment) {
                    formatted += char;
                    continue;
                }

                // Handle script and style content
                if (!inTag && currentTag === "script" || currentTag === "style") {
                    inScriptOrStyle = true;
                }

                if (char === "<") {
                    if (html[i + 1] === "/") {
                        // Closing tag
                        if (!inScriptOrStyle) {
                            indent--;
                            formatted += "\n" + "  ".repeat(indent);
                        }
                        inTag = true;
                        formatted += char;
                    } else {
                        // Opening tag
                        inTag = true;
                        if (!inScriptOrStyle) {
                            formatted += "\n" + "  ".repeat(indent);
                        }
                        formatted += char;
                    }
                } else if (char === ">") {
                    inTag = false;
                    formatted += char;

                    // Extract tag name
                    const tagMatch = formatted.match(/<(\/?)([a-zA-Z][^\s>]*)/);
                    if (tagMatch) {
                        currentTag = tagMatch[2].toLowerCase();
                    }

                    if (html[i - 1] !== "/" && !tagMatch?.[1]) {
                        // Not a self-closing tag or closing tag
                        if (!inScriptOrStyle && !["img", "br", "hr", "meta", "link", "input"].includes(currentTag)) {
                            indent++;
                        }
                    }

                    // Check if we're exiting script or style
                    if (tagMatch?.[1] && (currentTag === "script" || currentTag === "style")) {
                        inScriptOrStyle = false;
                        currentTag = "";
                    }
                } else {
                    formatted += char;
                }
            }

            // Clean up extra whitespace and ensure proper line breaks
            formatted = formatted
                .replace(/\n\s*\n/g, "\n") // Remove empty lines
                .trim();

            return formatted;
        } catch (error) {
            throw new Error("Error beautifying HTML");
        }
    };

    const handleInputChange = (e) => {
        const html = e.target.value;
        setInputHtml(html);

        if (!html.trim()) {
            setErrorMessage("");
            setErrorLine(null);
            setShowError(false);
            setBeautifiedHtml("");
            return;
        }

        try {
            const result = beautifyHtml(html);
            setBeautifiedHtml(result);
            setErrorMessage("");
            setErrorLine(null);
            setShowError(false);
        } catch (error) {
            setErrorMessage(error.message);
            setErrorLine(null); // HTML parsing errors are harder to pinpoint
            setShowError(true);
            setBeautifiedHtml("");
        }
    };

    const handleBeautify = () => {
        if (!inputHtml.trim()) {
            setErrorMessage("No HTML code to beautify.");
            setShowError(true);
            return;
        }

        try {
            const result = beautifyHtml(inputHtml);
            setBeautifiedHtml(result);
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
        if (!beautifiedHtml.trim()) {
            setErrorMessage("No beautified HTML to download.");
            setShowError(true);
            return;
        }

        const blob = new Blob([beautifiedHtml], { type: "text/html" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "beautified.html";
        a.click();
        URL.revokeObjectURL(url);

        setShowDownloadMessage(true);
        setTimeout(() => setShowDownloadMessage(false), 2000);
    };

    const handleClear = (side) => {
        if (side === "input") {
            setInputHtml("");
            setErrorMessage("");
            setErrorLine(null);
            setShowError(false);
            setBeautifiedHtml("");
        }
        if (side === "output") {
            setBeautifiedHtml("");
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
                    Beautify HTML
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
                            <span onClick={() => handleCopy(inputHtml)} className="cursor-pointer text-white">
                                <Copy size={25} />
                            </span>
                        </div>
                        <div className="flex">
                            <div
                                style={{ height: 400, overflow: "hidden" }}
                                className="bg-gray-800 text-white text-right p-2 pr-3 text-sm"
                                ref={inputLineRef}
                            >
                                <pre>{getLineNumbers(inputHtml)}</pre>
                            </div>
                            <textarea
                                ref={inputTextRef}
                                onScroll={handleScroll}
                                className="w-full p-2 bg-gray-900 text-white outline-none resize-none"
                                style={{ height: 400 }}
                                placeholder="Paste your HTML here..."
                                value={inputHtml}
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
                            <span onClick={() => handleCopy(beautifiedHtml || "")} className="cursor-pointer text-white">
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
                                <pre>{getLineNumbers(beautifiedHtml)}</pre>
                            </div>
                            <textarea
                                ref={outputTextRef}
                                onScroll={handleScroll}
                                className="w-full p-2 bg-gray-900 text-white outline-none resize-none"
                                style={{ height: 400 }}
                                placeholder="Beautified HTML will appear here..."
                                value={beautifiedHtml}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HtmlBeautifier;