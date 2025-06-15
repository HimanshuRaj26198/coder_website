"use client";
import { useRef, useState } from "react";
import { minify } from "terser";
import { Copy, Download, Trash2, AlertTriangle } from "react-feather";
import styles from "./jsminifier.module.css"; // CSS styles

const JsMinifier = () => {
    const [inputCode, setInputCode] = useState("");
    const [minifiedCode, setMinifiedCode] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [errorLine, setErrorLine] = useState(null);
    const [showError, setShowError] = useState(false); // Controls when to show error
    const textareaRef = useRef(null);
    const inputLineRef = useRef(null);
    const inputTextRef = useRef(null);

    const handleScroll = () => {
        if (inputTextRef.current && inputLineRef.current) {
            inputLineRef.current.scrollTop = inputTextRef.current.scrollTop;
        }
    };

    // Function to count lines dynamically
    const getLineNumbers = (code) => {
        return code.split("\n").map((_, index) => index + 1).join("\n");
    };

    const handleInputChange = async (e) => {
        const code = e.target.value;
        setInputCode(code);

        if (!code.trim()) {
            setErrorMessage("");
            setErrorLine(null);
            setShowError(false);
            return;
        }

        try {
            new Function(code); // Syntax check
            setErrorMessage("");
            setErrorLine(null);
            setShowError(false);

            // Minify Code when user pastes
            const result = await minify(code);
            setMinifiedCode(result.code || "");
        } catch (error) {
            setErrorMessage(error.message);
            const match = error.stack.match(/<anonymous>:(\d+):/);
            setErrorLine(match ? parseInt(match[1], 10) : null);
            setShowError(true);
        }
    };


    const handleMinify = async () => {
        if (!inputCode.trim()) {
            setErrorMessage("No JavaScript code to minify.");
            setShowError(true);
            return;
        }

        // JavaScript Syntax Error Detection
        try {
            new Function(inputCode);
            setErrorMessage("");
            setErrorLine(null);
        } catch (error) {
            setErrorMessage(error.message);
            const match = error.stack.match(/<anonymous>:(\d+):/);
            setErrorLine(match ? parseInt(match[1], 10) : null);
            setShowError(true);
            return;
        }

        // Minify JavaScript Code
        try {
            const result = await minify(inputCode);
            setMinifiedCode(result.code || "");
        } catch (error) {
            setMinifiedCode("Error minifying code");
        }
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
    };

    const handleClear = (side) => {
        if (side === "input") {
            setInputCode("");
            setErrorMessage("");
            setErrorLine(null);
            setShowError(false);
        }
        if (side === "output") {
            setMinifiedCode("");
        }
    };

    const handleDownload = () => {
        const blob = new Blob([minifiedCode], { type: "text/javascript" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "minified.js";
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <>
            {/* Display Error Message */}
            {showError && errorMessage && (
                <div className="bg-red-600 text-white p-3 rounded-md mb-4 flex items-center">
                    <AlertTriangle size={20} className="mr-2" />
                    <span>
                        {errorMessage} {errorLine && `(Line ${errorLine})`}
                    </span>
                </div>
            )}

            <div>
                {/* Minify Button */}
                <div className="flex justify-center w-full">
                    <button
                        onClick={handleMinify}
                        className="font-bold bg-green-500 px-8 py-2 rounded text-white hover:bg-green-600 transition"
                    >
                        Minify
                    </button>
                </div>

                <div className={styles.container}>
                    <div className="grid grid-cols-2 w-full gap-5">
                        {/* Input Section */}
                        <div className={styles.inputContainer}>
                            <div className={styles.toolbar}>
                                <span onClick={() => handleClear("input")} className="cursor-pointer text-white">
                                    <Trash2 size={25} />
                                </span>
                                <span onClick={() => handleCopy(inputCode)} className="cursor-pointer text-white">
                                    <Copy size={25} />
                                </span>
                            </div>
                            <div className="flex">
                                {/* Line Numbers */}
                                <div style={{ height: 400, overflow: "hidden" }} className="bg-gray-800 text-white text-right p-2 pr-3 text-sm line-numbers w-12 flex-shrink-0" ref={inputLineRef} >
                                    <pre>{getLineNumbers(inputCode)}</pre>
                                </div>
                                <textarea
                                    ref={inputTextRef}
                                    onScroll={handleScroll}
                                    className={styles.textarea}
                                    placeholder="Paste your JavaScript code here..."
                                    value={inputCode}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        {/* Output Section */}
                        <div className={styles.outputContainer}>
                            <div className={styles.toolbar}>
                                <span onClick={() => handleClear("output")} className="cursor-pointer text-white">
                                    <Trash2 size={25} />
                                </span>
                                <span onClick={() => handleCopy(minifiedCode)} className="cursor-pointer text-white">
                                    <Copy size={25} />
                                </span>
                                <span onClick={handleDownload} className="cursor-pointer text-white">
                                    <Download size={25} />
                                </span>
                            </div>
                            <div className="flex">
                                {/* Line Numbers */}
                                <div className="bg-gray-800 text-white text-right p-2 pr-3 text-sm">
                                    <pre>{getLineNumbers(minifiedCode)}</pre>
                                </div>
                                <textarea
                                    className={styles.textarea}
                                    placeholder="Minified code will appear here..."
                                    value={minifiedCode}
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JsMinifier;
