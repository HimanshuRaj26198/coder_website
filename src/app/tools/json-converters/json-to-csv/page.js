import JsonToCsvConverter from "@/app/_components/tools/json-tools/JsonToCsv/page";

export const generateMetadata = () => {
    return {
        title: "JSON to CSV Converter | Free Online Tool",
        description: "Convert JSON data to CSV format instantly with our free online JSON to CSV Converter. Export structured data for spreadsheets, databases, and analytics with ease.",
        openGraph: {
            title: "JSON to CSV Converter | Free Online Tool",
            description: "Easily convert JSON to CSV format using our online tool. Perfect for developers and data analysts looking to export structured data for spreadsheets and databases.",
            type: "website",
            url: "https://www.codercrafter.in/tools/json-converters/json-to-csv",
            siteName: "CoderCrafter Tools",
            images: ["https://codercrafter.in/assets/images/tools_codercrafter.png"],
        },
        twitter: {
            card: "summary_large_image",
            title: "JSON to CSV Converter | Free Online Tool",
            description: "Instantly convert JSON to CSV format with our simple and efficient online tool. Ideal for developers, analysts, and database professionals.",
            images: ["https://codercrafter.in/assets/images/tools_codercrafter.png"],
        }
    };
};


const JsonToCsvPage = () => {
    return <div className="container">
        <div className="w-full">
            <h1 style={{ fontWeight: 600 }} className="text-4xl">JSON to CSV Converter</h1>
            {/* Replace with your JSON to CSV Converter component */}
            <JsonToCsvConverter />
            <div className="mt-10 flex flex-wrap justify-center">
                <div className="md:w-1/2 flex flex-col gap-10">
                    <div className="flex flex-col gap-10">
                        <div>
                            <h2 className="text-4xl">What is a JSON to CSV Converter?</h2>
                            <p>
                                A JSON to CSV Converter is a tool that transforms JSON (JavaScript Object Notation) files into CSV (Comma-Separated Values) format. This conversion makes it easier to analyze, share, and manipulate data in spreadsheet applications like Excel or Google Sheets.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-3xl">🚀 Why Convert JSON to CSV?</h3>
                            <p>Converting JSON to CSV can significantly improve your data handling capabilities. It helps by:</p>
                            <ul>
                                <li>✅ Simplifying Data Analysis: CSV files are easier to work with in spreadsheet software.</li>
                                <li>✅ Improving Compatibility: CSV is widely supported by databases and data analysis tools.</li>
                                <li>✅ Reducing File Size: CSV files are often smaller than JSON files, saving storage space.</li>
                                <li>✅ Enhancing Readability: CSV files are more human-readable compared to JSON.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl">Features of Our JSON to CSV Converter</h2>
                        <ul>
                            <li>🔹 Instant Conversion – Convert JSON to CSV in real-time.</li>
                            <li>🔹 Preserves Data Structure – Maintains the hierarchy and relationships in your JSON data.</li>
                            <li>🔹 Customizable Output – Choose delimiter and encoding options.</li>
                            <li>🔹 Free & Secure – No data is stored or shared.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl">How to Use the JSON to CSV Converter?</h2>
                        <ol className="list-decimal">
                            <li>Paste your JSON code or upload a JSON file.</li>
                            <li>Click the "Convert to CSV" button.</li>
                            <li>Download the CSV file or copy the converted data to your clipboard.</li>
                        </ol>
                        💡 Tip: Use the converter to prepare JSON data for analysis in Excel or other tools.
                    </div>
                    <div>
                        <h2 className="text-3xl">Why Choose Codercrafter’s JSON to CSV Converter?</h2>
                        <ul>
                            <li>✨ Lightning Fast: Convert JSON to CSV in seconds.</li>
                            <li>🔒 100% Secure: No data is saved or tracked.</li>
                            <li>⚡ Developer-Friendly: Works for small and large JSON files.</li>
                            <li>🌎 Cross-Platform: Use it on desktop & mobile.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl">What Can You Do with Converted CSV Data?</h2>
                        <ul>
                            <li>✅ Import into Excel or Google Sheets for analysis.</li>
                            <li>✅ Use in databases for easier querying and manipulation.</li>
                            <li>✅ Share with colleagues who prefer spreadsheet formats.</li>
                            <li>✅ Integrate with data visualization tools.</li>
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
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/json-converters/json-to-csv">JSON to CSV Converter</a>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center gap-1 p-5">
                <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                    <span className="bg-gray-400 text-2xl text-white-800">🔹 Is JSON to CSV Conversion Safe?</span>
                    <span>Yes! The conversion process does not alter the functionality of your data. It simply transforms the format for easier use.</span>
                </div>
                <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                    <span className="bg-gray-400 text-2xl text-white-800">🔹 Can I Convert CSV Back to JSON?</span>
                    <span>Yes! You can use a CSV to JSON converter to restore the original structure.</span>
                </div>
                <div className="w-2/3 flex flex-col border border-gray-600">
                    <span className="bg-gray-400 text-2xl text-black-900">🔹 Does Conversion Affect Data Integrity?</span>
                    <span>No! The converter ensures that your data remains intact and accurate during the transformation process.</span>
                </div>
            </div>
        </div>
    </div>
}

export default JsonToCsvPage;