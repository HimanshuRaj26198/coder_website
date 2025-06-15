"use client";
import { useRef, useState } from "react";
import { Copy, Download, Trash2, AlertTriangle, CheckCircle } from "react-feather";
import YAML from "yaml"; // Import YAML library
import "../style.css";

const YamlBeautifier = () => {
    const [inputYaml, setInputYaml] = useState("");
    const [beautifiedYaml, setBeautifiedYaml] = useState("");
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

    // Function to beautify YAML
    const beautifyYaml = (yaml) => {
        try {
            // Parse YAML to ensure it's valid
            const parsedYaml = YAML.parse(yaml);
            // Convert back to YAML with proper formatting
            return YAML.stringify(parsedYaml, { indent: 2 });
        } catch (error) {
            throw new Error("Invalid YAML format.");
        }
    };

    const handleInputChange = (e) => {
        const yaml = e.target.value;
        setInputYaml(yaml);

        if (!yaml.trim()) {
            setErrorMessage("");
            setErrorLine(null);
            setShowError(false);
            setBeautifiedYaml(""); // Clear the beautified YAML
            return;
        }

        try {
            // Beautify the YAML
            const result = beautifyYaml(yaml);
            setBeautifiedYaml(result);
            setErrorMessage("");
            setErrorLine(null);
            setShowError(false);
        } catch (error) {
            setErrorMessage(error.message);
            const match = error.message.match(/at line (\d+)/);
            setErrorLine(match ? parseInt(match[1], 10) : null);
            setShowError(true);
            setBeautifiedYaml(""); // Clear the beautified YAML
        }
    };

    const handleBeautify = () => {
        if (!inputYaml.trim()) {
            setErrorMessage("No YAML code to beautify.");
            setShowError(true);
            return;
        }

        try {
            const result = beautifyYaml(inputYaml);
            setBeautifiedYaml(result);
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
        if (!beautifiedYaml.trim()) {
            setErrorMessage("No beautified YAML to download.");
            setShowError(true);
            return;
        }

        const blob = new Blob([beautifiedYaml], { type: "text/yaml" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "beautified.yaml";
        a.click();
        URL.revokeObjectURL(url);

        setShowDownloadMessage(true); // Show "File Downloaded" message
        setTimeout(() => setShowDownloadMessage(false), 2000); // Hide after 2 seconds
    };

    const handleClear = (side) => {
        if (side === "input") {
            setInputYaml("");
            setErrorMessage("");
            setErrorLine(null);
            setShowError(false);
            setBeautifiedYaml(""); // Clear the beautified YAML
        }
        if (side === "output") {
            setBeautifiedYaml("");
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
                    Beautify YAML
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
                            <span onClick={() => handleCopy(inputYaml)} className="cursor-pointer text-white">
                                <Copy size={25} />
                            </span>
                        </div>
                        <div className="flex">
                            <div
                                style={{ height: 400, overflow: "hidden" }}
                                className="bg-gray-800 text-white text-right p-2 pr-3 text-sm"
                                ref={inputLineRef}
                            >
                                <pre>{getLineNumbers(inputYaml)}</pre>
                            </div>
                            <textarea
                                ref={inputTextRef}
                                onScroll={handleScroll}
                                className="w-full p-2 bg-gray-900 text-white outline-none resize-none"
                                style={{ height: 400 }}
                                placeholder="Paste your YAML here..."
                                value={inputYaml}
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
                            <span onClick={() => handleCopy(beautifiedYaml || "")} className="cursor-pointer text-white">
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
                                <pre>{getLineNumbers(beautifiedYaml)}</pre>
                            </div>
                            <textarea
                                ref={outputTextRef}
                                onScroll={handleScroll}
                                className="w-full p-2 bg-gray-900 text-white outline-none resize-none"
                                style={{ height: 400 }}
                                placeholder="Beautified YAML will appear here..."
                                value={beautifiedYaml}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default YamlBeautifier;