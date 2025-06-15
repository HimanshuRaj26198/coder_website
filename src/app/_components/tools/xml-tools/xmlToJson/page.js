"use client";
import { useRef, useState } from "react";
import { Copy, Download, Trash2, AlertTriangle } from "react-feather";
import { parseStringPromise } from "xml2js"; // Library for XML to JSON conversion
import "../style.css";

const XmlToJsonConverter = () => {
    const [inputXml, setInputXml] = useState("");
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

    // Convert XML to JSON
    const xmlToJson = async (xml) => {
        try {
            const result = await parseStringPromise(xml, { explicitArray: false });
            return result;
        } catch (error) {
            throw new Error("Invalid XML format.");
        }
    };

    const handleInputChange = (e) => {
        const xml = e.target.value;
        setInputXml(xml);

        if (!xml.trim()) {
            setErrorMessage("");
            setErrorLine(null);
            setErrorDetail("");
            setShowError(false);
            setJsonData(null); // Clear the JSON data
            return;
        }

        // Validate XML input
        xmlToJson(xml)
            .then((parsedData) => {
                setJsonData(parsedData); // Set the parsed JSON data
                setErrorMessage("");
                setErrorLine(null);
                setErrorDetail("");
                setShowError(false);
            })
            .catch((error) => {
                setErrorMessage(error.message);
                setErrorLine(null);
                setErrorDetail(error.stack || error.toString());
                setShowError(true);
                setJsonData(null); // Clear the JSON data
            });
    };

    const handleConvert = () => {
        try {
            if (!jsonData) {
                throw new Error("No XML data to convert.");
            }

            // Convert JSON data to a string
            const jsonString = JSON.stringify(jsonData, null, 2);

            // Create a Blob from the JSON content
            const blob = new Blob([jsonString], { type: "application/json" });
            const url = URL.createObjectURL(blob);

            // Trigger download
            const a = document.createElement("a");
            a.href = url;
            a.download = "converted.json";
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
            setInputXml("");
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
                    Convert to JSON
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
                            <span onClick={() => handleCopy(inputXml)} className="cursor-pointer text-white">
                                <Copy size={25} />
                            </span>
                        </div>
                        <div className="flex">
                            <div
                                style={{ height: 400, overflow: "hidden" }}
                                className="bg-gray-800 text-white text-right p-2 pr-3 text-sm w-12 flex-shrink-0"
                                ref={inputLineRef}
                            >
                                <pre>{getLineNumbers(inputXml)}</pre>
                            </div>
                            <textarea
                                ref={inputTextRef}
                                onScroll={handleScroll}
                                className="w-full p-2 bg-gray-900 text-white outline-none resize-none"
                                style={{ height: 400 }}
                                placeholder="Paste your XML here..."
                                value={inputXml}
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
                            <span onClick={() => handleCopy(JSON.stringify(jsonData, null, 2))} className="cursor-pointer text-white">
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
                                <pre>{getLineNumbers(inputXml)}</pre>
                            </div>
                            <div
                                ref={outputTextRef}
                                onScroll={handleScroll}
                                className="w-full p-2 bg-gray-900 text-white outline-none resize-none overflow-auto"
                                style={{ height: 400 }}
                            >
                                {jsonData ? (
                                    <pre>{JSON.stringify(jsonData, null, 2)}</pre>
                                ) : (
                                    <div className="text-gray-500">JSON will be generated after conversion.</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default XmlToJsonConverter;