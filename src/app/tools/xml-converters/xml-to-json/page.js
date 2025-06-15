import XmlToJsonConverter from "@/app/_components/tools/xml-tools/xmlToJson/page";

export const generateMetadata = () => {
    return {
        title: "XML to JSON Converter | Free Online XML to JSON Conversion Tool",
        description: "Convert your XML data into JSON format easily with our free XML to JSON converter. Fast, secure, and accurate transformation.",
        openGraph: {
            title: "XML to JSON Converter | Free Online XML to JSON Conversion Tool",
            description: "Use our free XML to JSON converter to transform XML files into structured JSON format effortlessly. Quick, reliable, and secure conversion.",
            type: "website",
            url: "https://www.codercrafter.in/tools/xml-converters/xml-to-json",
            siteName: "CoderCrafter Tools",
            images: ["https://codercrafter.in/assets/images/tools_codercrafter.png"], // Keeping static image
        },
        twitter: {
            card: "summary_large_image",
            title: "XML to JSON Converter | Free Online XML to JSON Conversion Tool",
            description: "Easily convert XML files into JSON format with our free XML to JSON converter. Quick and efficient transformation.",
            images: ["https://codercrafter.in/assets/images/tools_codercrafter.png"], // Keeping static image
        }
    };
};


const XmlToJsonPage = () => {
    return <div className="container">
        <div className="w-full">
            <h1 style={{ fontWeight: 600 }} className="text-4xl">XML to JSON Converter</h1>
            {/* Replace with your XML to JSON Converter component */}
            <XmlToJsonConverter />
            <div className="mt-10 flex flex-wrap justify-center">
                <div className="md:w-1/2 flex flex-col gap-10">
                    <div className="flex flex-col gap-10">
                        <div>
                            <h2 className="text-4xl">What is an XML to JSON Converter?</h2>
                            <p>
                                An XML to JSON Converter is a tool that transforms XML (Extensible Markup Language) files into JSON (JavaScript Object Notation) format. This conversion makes it easier to work with XML data in modern web applications, APIs, and databases that prefer JSON for its simplicity and lightweight structure.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-3xl">🚀 Why Convert XML to JSON?</h3>
                            <p>Converting XML to JSON can significantly improve your development workflow. It helps by:</p>
                            <ul>
                                <li>✅ Simplifying Data Handling: JSON is easier to parse and manipulate in most programming languages.</li>
                                <li>✅ Improving Compatibility: JSON is widely supported by modern APIs and databases.</li>
                                <li>✅ Reducing File Size: JSON files are often smaller and more efficient than XML.</li>
                                <li>✅ Enhancing Readability: JSON is more human-readable and easier to debug.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl">Features of Our XML to JSON Converter</h2>
                        <ul>
                            <li>🔹 Instant Conversion – Convert XML to JSON in real-time.</li>
                            <li>🔹 Preserves Data Structure – Maintains the hierarchy and relationships in your XML data.</li>
                            <li>🔹 Customizable Output – Choose formatting options like indentation and key naming.</li>
                            <li>🔹 Free & Secure – No data is stored or shared.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl">How to Use the XML to JSON Converter?</h2>
                        <ol className="list-decimal">
                            <li>Paste your XML code or upload an XML file.</li>
                            <li>Click the "Convert to JSON" button.</li>
                            <li>Download the JSON file or copy the converted data to your clipboard.</li>
                        </ol>
                        💡 Tip: Use the converter to prepare XML data for use in web applications, APIs, or databases.
                    </div>
                    <div>
                        <h2 className="text-3xl">Why Choose Codercrafter’s XML to JSON Converter?</h2>
                        <ul>
                            <li>✨ Lightning Fast: Convert XML to JSON in seconds.</li>
                            <li>🔒 100% Secure: No data is saved or tracked.</li>
                            <li>⚡ Developer-Friendly: Works for small and large XML files.</li>
                            <li>🌎 Cross-Platform: Use it on desktop & mobile.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl">What Can You Do with Converted JSON Data?</h2>
                        <ul>
                            <li>✅ Use JSON data in web applications and APIs.</li>
                            <li>✅ Store JSON in databases like MongoDB or Firebase.</li>
                            <li>✅ Share JSON data with front-end frameworks like React or Angular.</li>
                            <li>✅ Integrate JSON into your backend systems for seamless data processing.</li>
                        </ul>
                    </div>
                </div>
                <div className="md:w-1/2 flex flex-col">
                    <h2 className="text-4xl">Related Tools</h2>
                    <div className="p-6 flex flex-wrap gap-4">
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/xml-converters/xml-to-json">XML to JSON Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/xml-converters/xml-to-excel">XML to Excel Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/xml-converters/xml-to-yaml">XML to YAML Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/xml-converters/xml-to-text">XML to Text Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/xml-converters/xml-to-java">XML to Java Converter</a>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center gap-1 p-5">
                <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                    <span className="bg-gray-400 text-2xl text-white-800">🔹 Is XML to JSON Conversion Safe?</span>
                    <span>Yes! The conversion process does not alter the functionality of your data. It simply transforms the format for easier use.</span>
                </div>
                <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                    <span className="bg-gray-400 text-2xl text-white-800">🔹 Can I Convert JSON Back to XML?</span>
                    <span>Yes! You can use a JSON to XML converter to restore the original structure.</span>
                </div>
                <div className="w-2/3 flex flex-col border border-gray-600">
                    <span className="bg-gray-400 text-2xl text-black-900">🔹 Does Conversion Affect Data Integrity?</span>
                    <span>No! The converter ensures that your data remains intact and accurately represented in the JSON format.</span>
                </div>
            </div>
        </div>
    </div>
}
export default XmlToJsonPage;