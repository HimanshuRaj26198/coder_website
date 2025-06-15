"use client";
import { useRef, useState } from "react";
import { Copy, Download, Trash2, AlertTriangle, CheckCircle } from "react-feather";
import { Parser } from "htmlparser2";
import { DomHandler } from "domhandler";
import "../style.css";

const HtmlMinifier = () => {
    const [inputHtml, setInputHtml] = useState("");
    const [minifiedHtml, setMinifiedHtml] = useState("");
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

    // Function to validate HTML using htmlparser2
    const validateHtml = (html) => {
        return new Promise((resolve, reject) => {
            let errorDetected = false;
            let errorMessage = "Invalid HTML format.";
            let errorLine = null;

            const handler = new DomHandler((error) => {
                if (error) {
                    errorDetected = true;
                    errorMessage = error.message || "Invalid HTML format.";
                    errorLine = error.line || null;
                }
            });

            const parser = new Parser(handler, {
                decodeEntities: true,
                onerror: (error) => {
                    errorDetected = true;
                    errorMessage = error.message || "Invalid HTML format.";
                    errorLine = error.line || null;
                },
            });

            parser.write(html);
            parser.end();

            if (errorDetected) {
                reject(new Error(errorMessage, { cause: { lineNumber: errorLine } }));
            } else {
                resolve();
            }
        });
    };

    // Function to minify HTML
    const minifyHtml = async (html) => {
        try {
            // Validate HTML first
            await validateHtml(html);

            // Remove HTML comments
            html = html.replace(/<!--[\s\S]*?-->/g, "");
            // Remove unnecessary whitespace (spaces, tabs, newlines)
            html = html.replace(/\s+/g, " ").trim();
            // Remove whitespace between HTML tags
            html = html.replace(/>\s+</g, "><");
            return html;
        } catch (error) {
            throw error; // Re-throw the error to handle it in the calling function
        }
    };

    const handleInputChange = async (e) => {
        const html = e.target.value;
        setInputHtml(html);

        if (!html.trim()) {
            setErrorMessage("");
            setErrorLine(null);
            setShowError(false);
            setMinifiedHtml(""); // Clear the minified HTML
            return;
        }

        try {
            // Minify the HTML
            const result = await minifyHtml(html);
            setMinifiedHtml(result);
            setErrorMessage("");
            setErrorLine(null);
            setShowError(false);
        } catch (error) {
            setErrorMessage(error.message);
            setErrorLine(error.cause?.lineNumber || null);
            setShowError(true);
            setMinifiedHtml(""); // Clear the minified HTML
        }
    };

    const handleMinify = async () => {
        if (!inputHtml.trim()) {
            setErrorMessage("No HTML code to minify.");
            setShowError(true);
            return;
        }

        try {
            const result = await minifyHtml(inputHtml);
            setMinifiedHtml(result);
        } catch (error) {
            setErrorMessage(error.message);
            setErrorLine(error.cause?.lineNumber || null);
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
        if (!minifiedHtml.trim()) {
            setErrorMessage("No minified HTML to download.");
            setShowError(true);
            return;
        }

        const blob = new Blob([minifiedHtml], { type: "text/html" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "minified.html";
        a.click();
        URL.revokeObjectURL(url);

        setShowDownloadMessage(true); // Show "File Downloaded" message
        setTimeout(() => setShowDownloadMessage(false), 2000); // Hide after 2 seconds
    };

    const handleClear = (side) => {
        if (side === "input") {
            setInputHtml("");
            setErrorMessage("");
            setErrorLine(null);
            setShowError(false);
            setMinifiedHtml(""); // Clear the minified HTML
        }
        if (side === "output") {
            setMinifiedHtml("");
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
                    onClick={handleMinify}
                    className="font-bold bg-blue-500 px-8 py-2 rounded text-white hover:bg-blue-600 transition"
                >
                    Minify HTML
                </button>
            </div>

            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
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
                                className="bg-gray-800 text-white text-right p-2 pr-3 text-sm w-13 flex-shrink-0"
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
                            <span onClick={() => handleCopy(minifiedHtml || "")} className="cursor-pointer text-white">
                                <Copy size={25} />
                            </span>
                            <span onClick={handleDownload} className="cursor-pointer text-white">
                                <Download size={25} />
                            </span>
                        </div>
                        <div className="flex">
                            <div
                                style={{ height: 400, overflow: "hidden" }}
                                className="bg-gray-800 text-white text-right p-2 pr-3 text-sm w-12 flex-shrink-0"
                                ref={outputLineRef}
                            >
                                <pre>{getLineNumbers(minifiedHtml)}</pre>
                            </div>
                            <textarea
                                ref={outputTextRef}
                                onScroll={handleScroll}
                                className="w-full p-2 bg-gray-900 text-white outline-none resize-none"
                                style={{ height: 400 }}
                                placeholder="Minified HTML will appear here..."
                                value={minifiedHtml}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HtmlMinifier;