"use client";
import { useRef, useState, useEffect } from "react";
import { Copy, Download, Trash2, AlertTriangle, CheckCircle, RefreshCw } from "react-feather";
import * as csstree from "css-tree";

const CssBeautifier = () => {
    const [inputCss, setInputCss] = useState(`body {
  color:#333;
  font-family: sans-serif;
  line-height:1.5;
}
.container {
  width:100%;
  max-width:1200px;
  margin:0 auto;
}`);
    const [beautifiedCss, setBeautifiedCss] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [errorLine, setErrorLine] = useState(null);
    const [showError, setShowError] = useState(false);
    const [showCopyMessage, setShowCopyMessage] = useState(false);
    const [showDownloadMessage, setShowDownloadMessage] = useState(false);
    const inputLineRef = useRef(null);
    const inputTextRef = useRef(null);
    const outputLineRef = useRef(null);
    const outputTextRef = useRef(null);

    // Initialize with sample CSS
    useEffect(() => {
        handleBeautify();
    }, []);

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

    const validateCss = (css) => {
        try {
            csstree.parse(css, {
                positions: true,
            });
            return true;
        } catch (error) {
            const errorMessage = error.message || "Invalid CSS format.";
            const errorLine = error.line || null;
            throw new Error(errorMessage, { cause: { lineNumber: errorLine } });
        }
    };

    const beautifyCss = (css) => {
        try {
            validateCss(css);
            const ast = csstree.parse(css);
            const beautified = csstree.generate(ast, {
                indent: "    ",
                linefeed: "\n",
            });
            return beautified;
        } catch (error) {
            throw error;
        }
    };

    const handleInputChange = (e) => {
        const css = e.target.value;
        setInputCss(css);

        if (!css.trim()) {
            setErrorMessage("");
            setErrorLine(null);
            setShowError(false);
            setBeautifiedCss("");
            return;
        }

        try {
            const result = beautifyCss(css);
            setBeautifiedCss(result);
            setErrorMessage("");
            setErrorLine(null);
            setShowError(false);
        } catch (error) {
            setErrorMessage(error.message);
            setErrorLine(error.cause?.lineNumber || null);
            setShowError(true);
            setBeautifiedCss("");
        }
    };

    const handleBeautify = () => {
        if (!inputCss.trim()) {
            setErrorMessage("No CSS code to beautify.");
            setShowError(true);
            return;
        }

        try {
            const result = beautifyCss(inputCss);
            setBeautifiedCss(result);
        } catch (error) {
            setErrorMessage(error.message);
            setErrorLine(error.cause?.lineNumber || null);
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
        if (!beautifiedCss.trim()) {
            setErrorMessage("No beautified CSS to download.");
            setShowError(true);
            return;
        }

        const blob = new Blob([beautifiedCss], { type: "text/css" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "beautified.css";
        a.click();
        URL.revokeObjectURL(url);

        setShowDownloadMessage(true);
        setTimeout(() => setShowDownloadMessage(false), 2000);
    };

    const handleClear = (side) => {
        if (side === "input") {
            setInputCss("");
            setBeautifiedCss("");
        }
        if (side === "output") {
            setBeautifiedCss("");
        }
        setErrorMessage("");
        setErrorLine(null);
        setShowError(false);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="container mx-auto px-4 py-12">
                <div className="max-w-6xl mx-auto">


                    {showError && errorMessage && (
                        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg flex items-start">
                            <AlertTriangle className="h-5 w-5 mr-3 flex-shrink-0" />
                            <div>
                                <p className="font-medium">{errorMessage}</p>
                                {errorLine && (
                                    <p className="text-sm mt-1">Error at line: {errorLine}</p>
                                )}
                            </div>
                        </div>
                    )}

                    <div className="flex justify-center mb-8">
                        <button
                            onClick={handleBeautify}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md flex items-center gap-2 transition-colors"
                        >
                            <RefreshCw className="h-5 w-5" />
                            <span>Beautify CSS</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Input Section */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                                    <span className="ml-2 text-sm font-medium">CSS Input</span>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleClear("input")}
                                        className="p-1.5 rounded hover:bg-gray-700 transition-colors"
                                        title="Clear"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                    <button
                                        onClick={() => handleCopy(inputCss)}
                                        className="p-1.5 rounded hover:bg-gray-700 transition-colors"
                                        title="Copy"
                                    >
                                        <Copy className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                            <div className="flex h-96">
                                <div
                                    ref={inputLineRef}
                                    className="bg-gray-800 text-gray-400 text-right p-2 pr-3 text-xs w-10 flex-shrink-0 overflow-hidden"
                                >
                                    <pre>{getLineNumbers(inputCss)}</pre>
                                </div>
                                <textarea
                                    ref={inputTextRef}
                                    onScroll={handleScroll}
                                    className="w-full p-4 font-mono text-sm bg-gray-900 text-gray-100 outline-none resize-none"
                                    placeholder="Paste your CSS here..."
                                    value={inputCss}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        {/* Output Section */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="text-blue-400 font-bold text-sm">CSS</div>
                                    <span className="text-sm font-medium">Formatted Output</span>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleClear("output")}
                                        className="p-1.5 rounded hover:bg-gray-700 transition-colors"
                                        title="Clear"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                    <button
                                        onClick={() => handleCopy(beautifiedCss)}
                                        className="p-1.5 rounded hover:bg-gray-700 transition-colors"
                                        title="Copy"
                                    >
                                        <Copy className="h-4 w-4" />
                                    </button>
                                    <button
                                        onClick={handleDownload}
                                        className="p-1.5 rounded hover:bg-gray-700 transition-colors"
                                        title="Download"
                                    >
                                        <Download className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                            <div className="flex h-96">
                                <div
                                    ref={outputLineRef}
                                    className="bg-gray-800 text-gray-400 text-right p-2 pr-3 text-xs w-10 flex-shrink-0 overflow-hidden"
                                >
                                    <pre>{getLineNumbers(beautifiedCss)}</pre>
                                </div>
                                <textarea
                                    ref={outputTextRef}
                                    onScroll={handleScroll}
                                    className="w-full p-4 font-mono text-sm bg-gray-900 text-gray-100 outline-none resize-none"
                                    placeholder="Formatted CSS will appear here..."
                                    value={beautifiedCss}
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>

                    {/* Success Messages */}
                    {showCopyMessage && (
                        <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2 animate-fade-in-out">
                            <CheckCircle className="h-5 w-5" />
                            <span>Copied to clipboard!</span>
                        </div>
                    )}
                    {showDownloadMessage && (
                        <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2 animate-fade-in-out">
                            <CheckCircle className="h-5 w-5" />
                            <span>Download started!</span>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default CssBeautifier;