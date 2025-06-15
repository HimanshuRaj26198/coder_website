import JsonToXmlConverter from "@/app/_components/tools/json-tools/JsonToXml/page";

export const generateMetadata = () => {
    return {
        title: "JSON to XML Converter | Free Online Tool",
        description: "Easily convert JSON data to XML format with our free online JSON to XML Converter. Ideal for developers and data transformation.",
        openGraph: {
            title: "JSON to XML Converter | Free Online Tool",
            description: "Quickly convert JSON to XML with our free online tool. Perfect for developers working with APIs, data storage, and integration.",
            type: "website",
            url: "https://www.codercrafter.in/tools/json-converters/json-to-xml",
            siteName: "CoderCrafter Tools",
            images: ["https://codercrafter.in/assets/images/tools_codercrafter.png"],
        },
        twitter: {
            card: "summary_large_image",
            title: "JSON to XML Converter | Free Online Tool",
            description: "Convert JSON to XML format easily with our fast and accurate JSON to XML Converter. Ideal for seamless data transformation.",
            images: ["https://codercrafter.in/assets/images/tools_codercrafter.png"],
        }
    };
};


const JsonToXmlPage = () => {
    return <div className="container">
        <div className="w-full">
            <h1 style={{ fontWeight: 600 }} className="text-4xl">JSON to XML Converter</h1>
            {/* Replace with your JSON to XML Converter component */}
            <JsonToXmlConverter />
            <div className="mt-10 flex flex-wrap justify-center">
                <div className="md:w-1/2 flex flex-col gap-10">
                    <div className="flex flex-col gap-10">
                        <div>
                            <h2 className="text-4xl">What is a JSON to XML Converter?</h2>
                            <p>
                                A JSON to XML Converter is a tool that transforms JSON (JavaScript Object Notation) files into XML (eXtensible Markup Language) format. This conversion is useful for data interchange, configuration files, and integration with systems that require XML format.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-3xl">🚀 Why Convert JSON to XML?</h3>
                            <p>Converting JSON to XML can be beneficial for several reasons:</p>
                            <ul>
                                <li>✅ Simplifying Data Interchange: XML is widely used in enterprise environments and web services.</li>
                                <li>✅ Improving Compatibility: XML is supported by many legacy systems and databases.</li>
                                <li>✅ Enhancing Readability: XML is human-readable and self-descriptive.</li>
                                <li>✅ Supporting Complex Data Structures: XML can represent complex hierarchical data.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl">Features of Our JSON to XML Converter</h2>
                        <ul>
                            <li>🔹 Instant Conversion – Convert JSON to XML in real-time.</li>
                            <li>🔹 Preserves Data Structure – Maintains the hierarchy and relationships in your JSON data.</li>
                            <li>🔹 Customizable Output – Choose indentation and encoding options.</li>
                            <li>🔹 Free & Secure – No data is stored or shared.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl">How to Use the JSON to XML Converter?</h2>
                        <ol className="list-decimal">
                            <li>Paste your JSON code or upload a JSON file.</li>
                            <li>Click the "Convert to XML" button.</li>
                            <li>Download the XML file or copy the converted data to your clipboard.</li>
                        </ol>
                        💡 Tip: Use the converter to prepare JSON data for integration with XML-based systems.
                    </div>
                    <div>
                        <h2 className="text-3xl">Why Choose Codercrafter’s JSON to XML Converter?</h2>
                        <ul>
                            <li>✨ Lightning Fast: Convert JSON to XML in seconds.</li>
                            <li>🔒 100% Secure: No data is saved or tracked.</li>
                            <li>⚡ Developer-Friendly: Works for small and large JSON files.</li>
                            <li>🌎 Cross-Platform: Use it on desktop & mobile.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl">What Can You Do with Converted XML Data?</h2>
                        <ul>
                            <li>✅ Integrate with XML-based web services.</li>
                            <li>✅ Use in enterprise systems that require XML format.</li>
                            <li>✅ Share with colleagues who prefer XML format.</li>
                            <li>✅ Store configuration data in XML format.</li>
                        </ul>
                    </div>
                </div>
                <div className="md:w-1/2 flex flex-col">
                    <h2 className="text-4xl">Related Tools</h2>
                    <div className="p-6 flex flex-wrap gap-4">
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/json-converters/json-to-tsv">JSON to TSV Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/json-converters/json-to-excel">JSON to Excel Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/json-converters/json-to-yaml">JSON to YAML Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/json-converters/json-to-text">JSON to Text Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/json-converters/json-to-xml">JSON to XML Converter</a>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center gap-1 p-5">
                <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                    <span className="bg-gray-400 text-2xl text-white-800">🔹 Is JSON to XML Conversion Safe?</span>
                    <span>Yes! The conversion process does not alter the functionality of your data. It simply transforms the format for easier use.</span>
                </div>
                <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                    <span className="bg-gray-400 text-2xl text-white-800">🔹 Can I Convert XML Back to JSON?</span>
                    <span>Yes! You can use an XML to JSON converter to restore the original structure.</span>
                </div>
                <div className="w-2/3 flex flex-col border border-gray-600">
                    <span className="bg-gray-400 text-2xl text-black-900">🔹 Does Conversion Affect Data Integrity?</span>
                    <span>No! The converter ensures that your data remains intact and accurately represented in the XML format.</span>
                </div>
            </div>
        </div>
    </div>
}

export default JsonToXmlPage;