"use client";
import { useRef, useState } from "react";
import { Copy, Download, Trash2, AlertTriangle } from "react-feather";
import styles from "./jsonformatter.module.css"; // CSS styles

const JsonFormatter = () => {
    const [inputJson, setInputJson] = useState("");
    const [formattedJson, setFormattedJson] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [errorLine, setErrorLine] = useState(null);
    const [showError, setShowError] = useState(false);
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
        const json = e.target.value;
        setInputJson(json);

        if (!json.trim()) {
            setErrorMessage("");
            setErrorLine(null);
            setShowError(false);
            return;
        }

        try {
            const parsed = JSON.parse(json);
            setFormattedJson(JSON.stringify(parsed, null, 4));
            setErrorMessage("");
            setErrorLine(null);
            setShowError(false);
        } catch (error) {
            setErrorMessage("Invalid JSON format");
            setShowError(true);
        }
    };

    const handleFormat = () => {
        try {
            const parsed = JSON.parse(inputJson);
            setFormattedJson(JSON.stringify(parsed, null, 4));
            setErrorMessage("");
            setErrorLine(null);
        } catch (error) {
            setErrorMessage("Invalid JSON format");
            setShowError(true);
        }
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
    };

    const handleClear = (side) => {
        if (side === "input") {
            setInputJson("");
            setErrorMessage("");
            setErrorLine(null);
            setShowError(false);
        }
        if (side === "output") {
            setFormattedJson("");
        }
    };

    const handleDownload = () => {
        const blob = new Blob([formattedJson], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "formatted.json";
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <>
            {showError && errorMessage && (
                <div className="bg-red-600 text-white p-3 rounded-md mb-4 flex items-center">
                    <AlertTriangle size={20} className="mr-2" />
                    <span>{errorMessage}</span>
                </div>
            )}

            <div className="flex justify-center w-full">
                <button
                    onClick={handleFormat}
                    className="font-bold bg-blue-500 px-8 py-2 rounded text-white hover:bg-blue-600 transition"
                >
                    Format JSON
                </button>
            </div>

            <div className={styles.container}>
                <div className="grid grid-cols-2 w-full gap-5">
                    <div className={styles.inputContainer}>
                        <div className={styles.toolbar}>
                            <span onClick={() => handleClear("input")} className="cursor-pointer text-white">
                                <Trash2 size={25} />
                            </span>
                            <span onClick={() => handleCopy(inputJson)} className="cursor-pointer text-white">
                                <Copy size={25} />
                            </span>
                        </div>
                        <div className="flex">
                            <div style={{ height: 400, overflow: "hidden" }} className="bg-gray-800 text-white text-right p-2 pr-3 text-sm line-numbers" ref={inputLineRef}>
                                <pre>{getLineNumbers(inputJson)}</pre>
                            </div>
                            <textarea
                                ref={inputTextRef}
                                onScroll={handleScroll}
                                className={styles.textarea}
                                placeholder="Paste your JSON here..."
                                value={inputJson}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className={styles.outputContainer}>
                        <div className={styles.toolbar}>
                            <span onClick={() => handleClear("output")} className="cursor-pointer text-white">
                                <Trash2 size={25} />
                            </span>
                            <span onClick={() => handleCopy(formattedJson)} className="cursor-pointer text-white">
                                <Copy size={25} />
                            </span>
                            <span onClick={handleDownload} className="cursor-pointer text-white">
                                <Download size={25} />
                            </span>
                        </div>
                        <div className="flex">
                            <div style={{ height: 400, overflow: "hidden" }} className="bg-gray-800 text-white text-right p-2 pr-3 text-sm" ref={outputLineRef} >
                                <pre>{getLineNumbers(formattedJson)}</pre>
                            </div>
                            <textarea
                                ref={outputTextRef}
                                onScroll={handleScroll}
                                className={styles.textarea}
                                placeholder="Formatted JSON will appear here..."
                                value={formattedJson}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JsonFormatter;
