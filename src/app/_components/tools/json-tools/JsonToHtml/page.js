"use client";
import { useRef, useState } from "react";
import { Copy, Download, Trash2, AlertTriangle } from "react-feather";
import "../style.css";

const JsonToHtmlConverter = () => {
    const [inputJson, setInputJson] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [errorLine, setErrorLine] = useState(null);
    const [errorDetail, setErrorDetail] = useState("");
    const [showError, setShowError] = useState(false);
    const [showCopyMessage, setShowCopyMessage] = useState(false); // For copy message
    const [showDownloadMessage, setShowDownloadMessage] = useState(false); // For download message
    const [jsonData, setJsonData] = useState(null); // State to hold parsed JSON data
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

    // Recursively render JSON data as HTML string
    const renderJsonAsHtmlString = (data) => {
        if (typeof data === "object" && data !== null) {
            const items = Object.keys(data).map((key) => {
                return `<li><strong>${key}:</strong> ${renderJsonAsHtmlString(data[key])}</li>`;
            }).join("");
            return `<ul class="list-disc pl-5">${items}</ul>`;
        } else {
            return `<span>${data}</span>`;
        }
    };

    // Recursively render JSON data as React component
    const renderJsonAsHtml = (data) => {
        if (typeof data === "object" && data !== null) {
            return (
                <ul className="list-disc pl-5">
                    {Object.keys(data).map((key) => (
                        <li key={key}>
                            <strong>{key}:</strong> {renderJsonAsHtml(data[key])}
                        </li>
                    ))}
                </ul>
            );
        } else {
            return <span>{data}</span>;
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
            setJsonData(null); // Clear the JSON data
            return;
        }

        try {
            // Validate JSON input
            const parsedData = JSON.parse(json);
            setJsonData(parsedData); // Set the parsed JSON data
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
            setJsonData(null); // Clear the JSON data
        }
    };

    const handleConvert = () => {
        try {
            if (!jsonData) {
                throw new Error("No JSON data to convert.");
            }

            // Generate HTML string from JSON
            const htmlContent = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>JSON to HTML</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            padding: 20px;
                        }
                        ul {
                            list-style-type: disc;
                            padding-left: 20px;
                        }
                        strong {
                            font-weight: bold;
                        }
                    </style>
                </head>
                <body>
                    ${renderJsonAsHtmlString(jsonData)}
                </body>
                </html>
            `;

            // Create a Blob from the HTML content
            const blob = new Blob([htmlContent], { type: "text/html" });
            const url = URL.createObjectURL(blob);

            // Trigger download
            const a = document.createElement("a");
            a.href = url;
            a.download = "converted.html";
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
            setJsonData(null); // Clear the JSON data
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
                    Convert to HTML
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
                                className="bg-gray-800 text-white text-right p-2 pr-3 text-sm w-12 flex-shrink-0"
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
                                {jsonData ? (
                                    renderJsonAsHtml(jsonData)
                                ) : (
                                    <div className="text-gray-500">HTML will be generated after conversion.</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JsonToHtmlConverter;