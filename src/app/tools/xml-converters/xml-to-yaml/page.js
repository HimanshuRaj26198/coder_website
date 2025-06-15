import XmlToYamlConverter from "@/app/_components/tools/xml-tools/xmlToyaml/page";

export const generateMetadata = () => {
    return {
        title: "XML to YAML Converter | Free Online XML to YAML Conversion Tool",
        description: "Easily convert your XML files into YAML format with our free online XML to YAML converter. Fast, secure, and accurate conversion.",
        openGraph: {
            title: "XML to YAML Converter | Free Online XML to YAML Conversion Tool",
            description: "Use our free XML to YAML converter to transform XML files into structured YAML format effortlessly. Quick and reliable conversion.",
            type: "website",
            url: "https://www.codercrafter.in/tools/xml-converters/xml-to-yaml",
            siteName: "CoderCrafter Tools",
            images: ["https://codercrafter.in/assets/images/tools_codercrafter.png"], // Keeping static image
        },
        twitter: {
            card: "summary_large_image",
            title: "XML to YAML Converter | Free Online XML to YAML Conversion Tool",
            description: "Convert XML files into YAML format quickly with our free online XML to YAML converter. Reliable and easy-to-use tool.",
            images: ["https://codercrafter.in/assets/images/tools_codercrafter.png"], // Keeping static image
        }
    };
};


const XmlToYamlPage = () => {
    return <div className="container">
        <div className="w-full">
            <h1 style={{ fontWeight: 600 }} className="text-4xl">XML to YAML Converter</h1>
            {/* Replace with your XML to YAML Converter component */}
            <XmlToYamlConverter />
            <div className="mt-10 flex flex-wrap justify-center">
                <div className="md:w-1/2 flex flex-col gap-10">
                    <div className="flex flex-col gap-10">
                        <div>
                            <h2 className="text-4xl">What is an XML to YAML Converter?</h2>
                            <p>
                                An XML to YAML Converter is a tool that transforms XML (Extensible Markup Language) files into YAML (YAML Ain't Markup Language) format. This conversion makes it easier to work with XML data in modern applications, configuration files, and APIs that prefer YAML for its simplicity and readability.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-3xl">🚀 Why Convert XML to YAML?</h3>
                            <p>Converting XML to YAML can significantly improve your data handling capabilities. It helps by:</p>
                            <ul>
                                <li>✅ Simplifying Data: YAML is easier to read and write compared to XML.</li>
                                <li>✅ Improving Compatibility: YAML is widely supported by modern applications and APIs.</li>
                                <li>✅ Reducing File Size: YAML files are often smaller and more efficient than XML.</li>
                                <li>✅ Enhancing Readability: YAML is more human-readable and easier to debug.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl">Features of Our XML to YAML Converter</h2>
                        <ul>
                            <li>🔹 Instant Conversion – Convert XML to YAML in real-time.</li>
                            <li>🔹 Preserves Data Structure – Maintains the hierarchy and relationships in your XML data.</li>
                            <li>🔹 Customizable Output – Choose formatting options like indentation and key naming.</li>
                            <li>🔹 Free & Secure – No data is stored or shared.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl">How to Use the XML to YAML Converter?</h2>
                        <ol className="list-decimal">
                            <li>Paste your XML code or upload an XML file.</li>
                            <li>Click the "Convert to YAML" button.</li>
                            <li>Download the YAML file or copy the converted data to your clipboard.</li>
                        </ol>
                        💡 Tip: Use the converter to prepare XML data for use in configuration files, APIs, or modern applications.
                    </div>
                    <div>
                        <h2 className="text-3xl">Why Choose Codercrafter’s XML to YAML Converter?</h2>
                        <ul>
                            <li>✨ Lightning Fast: Convert XML to YAML in seconds.</li>
                            <li>🔒 100% Secure: No data is saved or tracked.</li>
                            <li>⚡ Developer-Friendly: Works for small and large XML files.</li>
                            <li>🌎 Cross-Platform: Use it on desktop & mobile.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl">What Can You Do with Converted YAML Data?</h2>
                        <ul>
                            <li>✅ Use YAML for configuration files in modern applications.</li>
                            <li>✅ Integrate YAML data into APIs and microservices.</li>
                            <li>✅ Share YAML data with colleagues or stakeholders in a simple format.</li>
                            <li>✅ Use YAML in DevOps tools like Kubernetes, Ansible, and Docker.</li>
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
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/xml-converters/xml-to-xsl">XML to XSL Converter</a>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center gap-1 p-5">
                <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                    <span className="bg-gray-400 text-2xl text-white-800">🔹 Is XML to YAML Conversion Safe?</span>
                    <span>Yes! The conversion process does not alter the functionality of your data. It simply transforms the format for easier use.</span>
                </div>
                <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                    <span className="bg-gray-400 text-2xl text-white-800">🔹 Can I Convert YAML Back to XML?</span>
                    <span>Yes! You can use a YAML to XML converter to restore the original structure.</span>
                </div>
                <div className="w-2/3 flex flex-col border border-gray-600">
                    <span className="bg-gray-400 text-2xl text-black-900">🔹 Does Conversion Affect Data Integrity?</span>
                    <span>No! The converter ensures that your data remains intact and accurately represented in the YAML format.</span>
                </div>
            </div>
        </div>
    </div>
}

export default XmlToYamlPage;