"use client";
import { useRef, useState } from "react";
import { Copy, Download, Trash2, AlertTriangle } from "react-feather";
import { json2xml } from "xml-js"; // Library for JSON to XML conversion
import "../style.css";

const JsonToXmlConverter = () => {
    const [inputJson, setInputJson] = useState("");
    const [convertedXml, setConvertedXml] = useState("");
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
            setConvertedXml(""); // Clear XML output
            return;
        }

        try {
            const parsed = JSON.parse(json);
            const xml = json2xml(JSON.stringify(parsed), { compact: true, spaces: 4 });
            setConvertedXml(xml);
            setErrorMessage("");
            setErrorLine(null);
            setShowError(false);
        } catch (error) {
            setErrorMessage("Invalid JSON format");
            setShowError(true);
        }
    };

    const handleConvert = () => {
        try {
            const parsed = JSON.parse(inputJson);
            const xml = json2xml(JSON.stringify(parsed), { compact: true, spaces: 4 });
            setConvertedXml(xml);
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
            setConvertedXml("");
        }
    };

    const handleDownload = () => {
        const blob = new Blob([convertedXml], { type: "application/xml" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "converted.xml";
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
                    onClick={handleConvert}
                    className="font-bold bg-blue-500 px-8 py-2 rounded text-white hover:bg-blue-600 transition"
                >
                    Convert to XML
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
                            <span onClick={() => handleCopy(convertedXml)} className="cursor-pointer text-white">
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
                                <pre>{getLineNumbers(convertedXml)}</pre>
                            </div>
                            <textarea
                                ref={outputTextRef}
                                onScroll={handleScroll}
                                className="w-full p-2 bg-gray-900 text-white outline-none resize-none"
                                style={{ height: 400 }}
                                placeholder="Converted XML will appear here..."
                                value={convertedXml}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JsonToXmlConverter;