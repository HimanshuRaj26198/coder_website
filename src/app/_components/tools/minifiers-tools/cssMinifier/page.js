"use client";
import { useRef, useState } from "react";
import { Copy, Download, Trash2, AlertTriangle, CheckCircle } from "react-feather";
import { minify } from "csso"; // Library for CSS minification
import "../style.css";

const CssMinifier = () => {
    const [inputCss, setInputCss] = useState("");
    const [minifiedCss, setMinifiedCss] = useState("");
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

    const handleInputChange = (e) => {
        const css = e.target.value;
        setInputCss(css);

        if (!css.trim()) {
            setErrorMessage("");
            setErrorLine(null);
            setShowError(false);
            setMinifiedCss(""); // Clear the minified CSS
            return;
        }

        try {
            // Validate CSS syntax (basic check)
            new CSSStyleSheet().replaceSync(css);
            setErrorMessage("");
            setErrorLine(null);
            setShowError(false);

            // Minify the CSS
            const result = minify(css);
            setMinifiedCss(result.css || "");
        } catch (error) {
            console.log(error, "Css minify errpr");
            setErrorMessage(error.message);
            const match = error.message.match(/line (\d+)/);
            setErrorLine(match ? parseInt(match[1], 10) : null);
            setShowError(true);
            setMinifiedCss(""); // Clear the minified CSS
        }
    };

    const handleMinify = () => {
        if (!inputCss.trim()) {
            setErrorMessage("No CSS code to minify.");
            setShowError(true);
            return;
        }

        try {
            const result = minify(inputCss);
            setMinifiedCss(result.css || "");
        } catch (error) {
            console.log(error, "Css minify errpr");
            setErrorMessage(error.message);
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
        if (!minifiedCss.trim()) {
            setErrorMessage("No minified CSS to download.");
            setShowError(true);
            return;
        }

        const blob = new Blob([minifiedCss], { type: "text/css" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "minified.css";
        a.click();
        URL.revokeObjectURL(url);

        setShowDownloadMessage(true); // Show "File Downloaded" message
        setTimeout(() => setShowDownloadMessage(false), 2000); // Hide after 2 seconds
    };

    const handleClear = (side) => {
        if (side === "input") {
            setInputCss("");
            setErrorMessage("");
            setErrorLine(null);
            setShowError(false);
            setMinifiedCss(""); // Clear the minified CSS
        }
        if (side === "output") {
            setMinifiedCss("");
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
                    Minify CSS
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
                            <span onClick={() => handleCopy(inputCss)} className="cursor-pointer text-white">
                                <Copy size={25} />
                            </span>
                        </div>
                        <div className="flex">
                            <div
                                style={{ height: 400, overflow: "hidden" }}
                                className="bg-gray-800 text-white text-right p-2 pr-3 text-sm w-13 flex-shrink-0"
                                ref={inputLineRef}
                            >
                                <pre>{getLineNumbers(inputCss)}</pre>
                            </div>
                            <textarea
                                ref={inputTextRef}
                                onScroll={handleScroll}
                                className="w-full p-2 bg-gray-900 text-white outline-none resize-none"
                                style={{ height: 400 }}
                                placeholder="Paste your CSS here..."
                                value={inputCss}
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
                            <span onClick={() => handleCopy(minifiedCss || "")} className="cursor-pointer text-white">
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
                                <pre>{getLineNumbers(minifiedCss)}</pre>
                            </div>
                            <textarea
                                ref={outputTextRef}
                                onScroll={handleScroll}
                                className="w-full p-2 bg-gray-900 text-white outline-none resize-none"
                                style={{ height: 400 }}
                                placeholder="Minified CSS will appear here..."
                                value={minifiedCss}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CssMinifier;