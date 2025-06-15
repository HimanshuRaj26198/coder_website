"use client";
import { useRef, useState } from "react";
import { Copy, Download, Trash2, AlertTriangle } from "react-feather";
import * as XLSX from "xlsx"; // Library for Excel conversion
import "../style.css";

const JsonToExcelConverter = () => {
    const [inputJson, setInputJson] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [errorLine, setErrorLine] = useState(null);
    const [errorDetail, setErrorDetail] = useState("");
    const [showError, setShowError] = useState(false);
    const [showCopyMessage, setShowCopyMessage] = useState(false); // For copy message
    const [showDownloadMessage, setShowDownloadMessage] = useState(false); // For download message
    const [jsonData, setJsonData] = useState([]); // State to hold parsed JSON data
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

    // Flatten nested objects into strings
    const flattenObject = (obj) => {
        const flattened = {};
        for (const key in obj) {
            if (typeof obj[key] === "object" && obj[key] !== null) {
                flattened[key] = JSON.stringify(obj[key]); // Convert nested objects to strings
            } else {
                flattened[key] = obj[key];
            }
        }
        return flattened;
    };

    // Convert JSON to Excel
    const jsonToExcel = (json) => {
        try {
            const data = JSON.parse(json);

            // If the input is a single object, wrap it in an array
            if (typeof data === "object" && !Array.isArray(data)) {
                return jsonToExcel(JSON.stringify([data]));
            }

            if (!Array.isArray(data)) {
                throw new Error("Input JSON must be an object or an array of objects.");
            }

            if (data.length === 0) {
                throw new Error("Input JSON is empty.");
            }

            // Flatten nested objects in the data
            const flattenedData = data.map((item) => flattenObject(item));

            // Create a worksheet from the JSON data
            const worksheet = XLSX.utils.json_to_sheet(flattenedData);

            // Create a workbook and add the worksheet
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

            // Generate Excel file in binary format
            const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
            return excelBuffer;
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
            setJsonData([]); // Clear the JSON data
            return;
        }

        try {
            // Validate JSON input
            const parsedData = JSON.parse(json);
            const dataArray = Array.isArray(parsedData) ? parsedData : [parsedData];
            const flattenedData = dataArray.map((item) => flattenObject(item)); // Flatten nested objects
            setJsonData(flattenedData); // Set the parsed and flattened JSON data
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
            setJsonData([]); // Clear the JSON data
        }
    };

    const handleConvert = () => {
        try {
            const excelBuffer = jsonToExcel(inputJson);

            // Create a Blob from the Excel buffer
            const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
            const url = URL.createObjectURL(blob);

            // Trigger download
            const a = document.createElement("a");
            a.href = url;
            a.download = "converted.xlsx";
            a.click();
            URL.revokeObjectURL(url);

            setShowDownloadMessage(true); // Show "File Downloaded" message
            setTimeout(() => setShowDownloadMessage(false), 2000); // Hide after 2 seconds
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
            setJsonData([]); // Clear the JSON data
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
                    Convert to Excel
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
                                className="bg-gray-800 text-white text-right p-2 pr-3 text-sm"
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
                            <span onClick={() => handleCopy(inputJson)} className="cursor-pointer text-white">
                                <Copy size={25} />
                            </span>
                            <span onClick={handleConvert} className="cursor-pointer text-white">
                                <Download size={25} />
                            </span>
                        </div>
                        <div className="flex">
                            <div
                                style={{ height: 400, overflow: "hidden" }}
                                className="bg-gray-800 text-white text-right p-2 pr-3 text-sm"
                                ref={outputLineRef}
                            >
                                <pre>{getLineNumbers(inputJson)}</pre>
                            </div>
                            <div
                                ref={outputTextRef}
                                onScroll={handleScroll}
                                className="w-full p-2 bg-gray-900 text-white outline-none resize-none overflow-auto"
                                style={{ height: 400 }}
                            >
                                {jsonData.length > 0 ? (
                                    <table className="w-full">
                                        <thead>
                                            <tr>
                                                {Object.keys(jsonData[0]).map((key) => (
                                                    <th key={key} className="border p-2">{key}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {jsonData.map((row, index) => (
                                                <tr key={index}>
                                                    {Object.values(row).map((value, i) => (
                                                        <td key={i} className="border p-2">{value}</td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                ) : (
                                    <div className="text-gray-500">Excel file will be downloaded after conversion.</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JsonToExcelConverter;