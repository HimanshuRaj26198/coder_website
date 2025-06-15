"use client";
import { useRef, useState } from "react";
import { Copy, Download, Trash2, AlertTriangle } from "react-feather";
import "../style.css";

const JsonToCsvConverter = () => {
    const [inputJson, setInputJson] = useState("");
    const [convertedCsv, setConvertedCsv] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [errorLine, setErrorLine] = useState(null);
    const [errorDetail, setErrorDetail] = useState("");
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

    // Flatten nested objects and arrays
    const flattenObject = (obj, parentKey = "", result = {}) => {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                // Replace dots and brackets with underscores
                const cleanKey = key.replace(/[\.\[\]]/g, "_");
                const newKey = parentKey ? `${parentKey}_${cleanKey}` : cleanKey;

                if (typeof obj[key] === "object" && obj[key] !== null) {
                    if (Array.isArray(obj[key])) {
                        // Handle arrays by joining them into a single string
                        if (obj[key].every((item) => typeof item !== "object")) {
                            // For primitive arrays (e.g., skills)
                            result[newKey] = obj[key].join(";");
                        } else {
                            // For arrays of objects (e.g., projects)
                            obj[key].forEach((item, index) => {
                                if (typeof item === "object" && item !== null) {
                                    flattenObject(item, `${newKey}_${index + 1}`, result);
                                }
                            });
                        }
                    } else {
                        // Handle nested objects
                        flattenObject(obj[key], newKey, result);
                    }
                } else {
                    // Handle primitive values, including booleans
                    result[newKey] = obj[key];
                }
            }
        }
        return result;
    };

    const jsonToCsv = (json) => {
        try {
            const data = JSON.parse(json);

            // If the input is a single object, wrap it in an array
            if (typeof data === "object" && !Array.isArray(data)) {
                return jsonToCsv(JSON.stringify([data]));
            }

            if (!Array.isArray(data)) {
                throw new Error("Input JSON must be an object or an array of objects.");
            }

            if (data.length === 0) {
                return "";
            }

            // Flatten each object in the array
            const flattenedData = data.map((obj) => flattenObject(obj));

            // Extract headers
            const headers = [...new Set(flattenedData.flatMap((obj) => Object.keys(obj)))];

            // Create CSV rows
            const rows = flattenedData.map((obj) =>
                headers.map((header) => {
                    const value = obj[header];
                    // Handle boolean values explicitly
                    if (typeof value === "boolean") {
                        return `"${value}"`; // Wrap boolean values in quotes
                    }
                    return `"${value || ""}"`; // Handle other values
                }).join(",")
            );

            // Combine headers and rows
            return [headers.join(","), ...rows].join("\n");
        } catch (error) {
            // Extract only the first sentence of the error message before the stack trace
            const errorMessage = error.message.split("at JSON.parse")[0].trim();
            throw new Error(errorMessage);
        }
    };

    const handleInputChange = (e) => {
        const json = e.target.value;
        setInputJson(json);

        if (!json.trim()) {
            setErrorMessage("");
            setErrorLine(null);
            setErrorDetail("");
            setShowError(false);
            setConvertedCsv(""); // Clear CSV output
            return;
        }

        try {
            const csv = jsonToCsv(json);
            setConvertedCsv(csv);
            setErrorMessage("");
            setErrorLine(null);
            setErrorDetail("");
            setShowError(false);
        } catch (error) {
            // Extract error details
            const errorMessage = error.message;
            const errorLine = error.message.includes("at line")
                ? parseInt(error.message.split("at line")[1].split(" ")[1])
                : null;

            setErrorMessage(errorMessage);
            setErrorLine(errorLine);
            setErrorDetail(error.stack || error.toString());
            setShowError(true);
        }
    };

    const handleConvert = () => {
        try {
            const csv = jsonToCsv(inputJson);
            setConvertedCsv(csv);
            setErrorMessage("");
            setErrorLine(null);
            setErrorDetail("");
            setShowError(false);
        } catch (error) {
            // Extract error details
            const errorMessage = error.message;
            const errorLine = error.message.includes("at line")
                ? parseInt(error.message.split("at line")[1].split(" ")[1])
                : null;

            setErrorMessage(errorMessage);
            setErrorLine(errorLine);
            setErrorDetail(error.stack || error.toString());
            setShowError(true);
        }
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            setShowCopyMessage(true); // Show "Content Copied" message
            setTimeout(() => setShowCopyMessage(false), 2000); // Hide after 2 seconds
        });
    };

    const handleClear = (side) => {
        if (side === "input") {
            setInputJson("");
            setErrorMessage("");
            setErrorLine(null);
            setErrorDetail("");
            setShowError(false);
        }
        if (side === "output") {
            setConvertedCsv("");
        }
    };

    const handleDownload = () => {
        const blob = new Blob([convertedCsv], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "converted.csv";
        a.click();
        URL.revokeObjectURL(url);

        setShowDownloadMessage(true); // Show "File Downloaded" message
        setTimeout(() => setShowDownloadMessage(false), 2000); // Hide after 2 seconds
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
                        {errorDetail && (
                            <div className="text-sm mt-1">
                                {/* Details: {errorDetail} */}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Copy Message */}
            {showCopyMessage && (
                <div className="bg-green-600 text-white p-3 rounded-md mb-4 flex items-center fixed top-4 right-4">
                    <span>Content Copied!</span>
                </div>
            )}

            {/* Download Message */}
            {showDownloadMessage && (
                <div className="bg-green-600 text-white p-3 rounded-md mb-4 flex items-center fixed top-4 right-4">
                    <span>File Downloaded!</span>
                </div>
            )}

            <div className="flex justify-center w-full">
                <button
                    onClick={handleConvert}
                    className="font-bold bg-blue-500 px-8 py-2 rounded text-white hover:bg-blue-600 transition"
                >
                    Convert to CSV
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
                            <span onClick={() => handleCopy(inputJson)} className="cursor-pointer text-white">
                                <Copy size={25} />
                            </span>
                        </div>
                        <div className="flex">
                            <div
                                style={{ height: 400, overflow: "hidden" }}
                                className="bg-gray-800 text-white text-right p-2 pr-3 text-sm w-12 flex-shrink-0"
                                ref={inputLineRef}
                            >
                                <pre>{getLineNumbers(inputJson)}</pre>
                            </div>
                            <textarea
                                ref={inputTextRef}
                                onScroll={handleScroll}
                                className="w-full p-2 bg-gray-900 text-white outline-none resize-none"
                                style={{ height: 400 }}
                                placeholder="Paste your JSON here..."
                                value={inputJson}
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
                            <span onClick={() => handleCopy(convertedCsv)} className="cursor-pointer text-white">
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
                                <pre>{getLineNumbers(convertedCsv)}</pre>
                            </div>
                            <textarea
                                ref={outputTextRef}
                                onScroll={handleScroll}
                                className="w-full p-2 bg-gray-900 text-white outline-none resize-none"
                                style={{ height: 400 }}
                                placeholder="Converted CSV will appear here..."
                                value={convertedCsv}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JsonToCsvConverter;