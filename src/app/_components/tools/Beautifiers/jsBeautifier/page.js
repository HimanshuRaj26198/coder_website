"use client";
import { useRef, useState } from "react";
import { Copy, Download, Trash2, AlertTriangle, CheckCircle } from "react-feather";
import prettier from "prettier/standalone"; // Import Prettier
import parserBabel from "prettier/parser-babel"; // Import Babel parser for JavaScript
import "../style.css";



const JsBeautifier = () => {
    const [inputJs, setInputJs] = useState("");
    const [beautifiedJs, setBeautifiedJs] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [errorLine, setErrorLine] = useState(null);
    const [showError, setShowError] = useState(false);
    const [showCopyMessage, setShowCopyMessage] = useState(false); // For copy message
    const [showDownloadMessage, setShowDownloadMessage] = useState(false); // For download message
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

    // Function to beautify JavaScript
    const beautifyJs = (js) => {
        try {
            // Format JavaScript using Prettier
            const formattedJs = prettier.format(js, {
                parser: "babel",
                plugins: [parserBabel],
                semi: true,
                singleQuote: false,
                tabWidth: 4,
            });
            return formattedJs;
        } catch (error) {
            throw new Error("Invalid JavaScript format.");
        }
    };

    const handleInputChange = (e) => {
        const js = e.target.value;
        setInputJs(js);

        if (!js.trim()) {
            setErrorMessage("");
            setErrorLine(null);
            setShowError(false);
            setBeautifiedJs(""); // Clear the beautified JavaScript
            return;
        }

        try {
            // Beautify the JavaScript
            const result = beautifyJs(js);
            setBeautifiedJs(result);
            setErrorMessage("");
            setErrorLine(null);
            setShowError(false);
        } catch (error) {
            setErrorMessage(error.message);
            const match = error.message.match(/at line (\d+)/);
            setErrorLine(match ? parseInt(match[1], 10) : null);
            setShowError(true);
            setBeautifiedJs(""); // Clear the beautified JavaScript
        }
    };

    const handleBeautify = () => {
        if (!inputJs.trim()) {
            setErrorMessage("No JavaScript code to beautify.");
            setShowError(true);
            return;
        }

        try {
            const result = beautifyJs(inputJs);
            setBeautifiedJs(result);
        } catch (error) {
            setErrorMessage(error.message);
            const match = error.message.match(/at line (\d+)/);
            setErrorLine(match ? parseInt(match[1], 10) : null);
            setShowError(true);
        }
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            setShowCopyMessage(true); // Show "Content Copied" message
            setTimeout(() => setShowCopyMessage(false), 2000); // Hide after 2 seconds
        });
    };

    const handleDownload = () => {
        if (!beautifiedJs.trim()) {
            setErrorMessage("No beautified JavaScript to download.");
            setShowError(true);
            return;
        }

        const blob = new Blob([beautifiedJs], { type: "text/javascript" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "beautified.js";
        a.click();
        URL.revokeObjectURL(url);

        setShowDownloadMessage(true); // Show "File Downloaded" message
        setTimeout(() => setShowDownloadMessage(false), 2000); // Hide after 2 seconds
    };

    const handleClear = (side) => {
        if (side === "input") {
            setInputJs("");
            setErrorMessage("");
            setErrorLine(null);
            setShowError(false);
            setBeautifiedJs(""); // Clear the beautified JavaScript
        }
        if (side === "output") {
            setBeautifiedJs("");
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
                    Beautify JavaScript
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
                            <span onClick={() => handleCopy(inputJs)} className="cursor-pointer text-white">
                                <Copy size={25} />
                            </span>
                        </div>
                        <div className="flex">
                            <div
                                style={{ height: 400, overflow: "hidden" }}
                                className="bg-gray-800 text-white text-right p-2 pr-3 text-sm"
                                ref={inputLineRef}
                            >
                                <pre>{getLineNumbers(inputJs)}</pre>
                            </div>
                            <textarea
                                ref={inputTextRef}
                                onScroll={handleScroll}
                                className="w-full p-2 bg-gray-900 text-white outline-none resize-none"
                                style={{ height: 400 }}
                                placeholder="Paste your JavaScript here..."
                                value={inputJs}
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
                            <span onClick={() => handleCopy(beautifiedJs || "")} className="cursor-pointer text-white">
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
                                <pre>{getLineNumbers(beautifiedJs)}</pre>
                            </div>
                            <textarea
                                ref={outputTextRef}
                                onScroll={handleScroll}
                                className="w-full p-2 bg-gray-900 text-white outline-none resize-none"
                                style={{ height: 400 }}
                                placeholder="Beautified JavaScript will appear here..."
                                value={beautifiedJs}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JsBeautifier;