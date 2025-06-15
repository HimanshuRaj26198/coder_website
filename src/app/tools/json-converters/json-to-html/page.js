import JsonToHtmlConverter from "@/app/_components/tools/json-tools/JsonToHtml/page";

export const generateMetadata = () => {
    return {
        title: "JSON to HTML Converter | Free Online Tool",
        description: "Easily convert JSON data into HTML tables or formatted structures with our free online JSON to HTML Converter. Perfect for developers and data presentation.",
        openGraph: {
            title: "JSON to HTML Converter | Free Online Tool",
            description: "Transform JSON data into well-structured HTML effortlessly with our free online JSON to HTML Converter. Ideal for developers and web designers.",
            type: "website",
            url: "https://www.codercrafter.in/tools/json-converters/json-to-html",
            siteName: "CoderCrafter Tools",
            images: ["https://codercrafter.in/assets/images/tools_codercrafter.png"],
        },
        twitter: {
            card: "summary_large_image",
            title: "JSON to HTML Converter | Free Online Tool",
            description: "Quickly convert JSON into formatted HTML structures with our easy-to-use online tool. Perfect for web developers and data visualization.",
            images: ["https://codercrafter.in/assets/images/tools_codercrafter.png"],
        }
    };
};


const JsonToHtmlPage = () => {
    return <div className="container">
        <div className="w-full">
            <h1 style={{ fontWeight: 600 }} className="text-4xl">JSON to HTML Converter</h1>
            {/* Replace with your JSON to HTML Converter component */}
            <JsonToHtmlConverter />
            <div className="mt-10 flex flex-wrap justify-center">
                <div className="md:w-1/2 flex flex-col gap-10">
                    <div className="flex flex-col gap-10">
                        <div>
                            <h2 className="text-4xl">What is a JSON to HTML Converter?</h2>
                            <p>
                                A JSON to HTML Converter is a tool that transforms JSON (JavaScript Object Notation) files into HTML (HyperText Markup Language) format. This conversion makes it easier to display and visualize JSON data in web browsers or integrate it into web pages.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-3xl">🚀 Why Convert JSON to HTML?</h3>
                            <p>Converting JSON to HTML can significantly improve your data presentation and usability. It helps by:</p>
                            <ul>
                                <li>✅ Enhancing Data Visualization: HTML allows you to display JSON data in a user-friendly format.</li>
                                <li>✅ Improving Web Integration: HTML is the standard markup language for web pages.</li>
                                <li>✅ Simplifying Sharing: HTML files can be easily viewed in any web browser.</li>
                                <li>✅ Enabling Styling: HTML can be styled with CSS for better design and readability.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl">Features of Our JSON to HTML Converter</h2>
                        <ul>
                            <li>🔹 Instant Conversion – Convert JSON to HTML in real-time.</li>
                            <li>🔹 Preserves Data Structure – Maintains the hierarchy and relationships in your JSON data.</li>
                            <li>🔹 Customizable Output – Choose HTML tags and formatting options.</li>
                            <li>🔹 Free & Secure – No data is stored or shared.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl">How to Use the JSON to HTML Converter?</h2>
                        <ol className="list-decimal">
                            <li>Paste your JSON code or upload a JSON file.</li>
                            <li>Click the "Convert to HTML" button.</li>
                            <li>Download the HTML file or copy the converted code to your clipboard.</li>
                        </ol>
                        💡 Tip: Use the converter to display JSON data on your website or in a web application.
                    </div>
                    <div>
                        <h2 className="text-3xl">Why Choose Codercrafter’s JSON to HTML Converter?</h2>
                        <ul>
                            <li>✨ Lightning Fast: Convert JSON to HTML in seconds.</li>
                            <li>🔒 100% Secure: No data is saved or tracked.</li>
                            <li>⚡ Developer-Friendly: Works for small and large JSON files.</li>
                            <li>🌎 Cross-Platform: Use it on desktop & mobile.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl">What Can You Do with Converted HTML Data?</h2>
                        <ul>
                            <li>✅ Display JSON data on your website or web application.</li>
                            <li>✅ Style the HTML output using CSS for better design.</li>
                            <li>✅ Share JSON data in a format that is easy to view in any browser.</li>
                            <li>✅ Integrate JSON data into existing HTML templates.</li>
                        </ul>
                    </div>
                </div>
                <div className="md:w-1/2 flex flex-col">
                    <h2 className="text-4xl">Related Tools</h2>
                    <div className="p-6 flex flex-wrap gap-4">
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/json-converters/json-to-xml">JSON to XML Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/json-converters/json-to-excel">JSON to Excel Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/json-converters/json-to-yaml">JSON to YAML Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/json-converters/json-to-text">JSON to Text Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/json-converters/json-to-html">JSON to HTML Converter</a>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center gap-1 p-5">
                <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                    <span className="bg-gray-400 text-2xl text-white-800">🔹 Is JSON to HTML Conversion Safe?</span>
                    <span>Yes! The conversion process does not alter the functionality of your data. It simply transforms the format for easier use.</span>
                </div>
                <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                    <span className="bg-gray-400 text-2xl text-white-800">🔹 Can I Convert HTML Back to JSON?</span>
                    <span>Yes! You can use an HTML to JSON converter to restore the original structure.</span>
                </div>
                <div className="w-2/3 flex flex-col border border-gray-600">
                    <span className="bg-gray-400 text-2xl text-black-900">🔹 Does Conversion Affect Data Integrity?</span>
                    <span>No! The converter ensures that your data remains intact and accurately represented in the HTML format.</span>
                </div>
            </div>
        </div>
    </div>
}

export default JsonToHtmlPage;