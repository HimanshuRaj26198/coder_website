import XmlBeautifier from "@/app/_components/tools/Beautifiers/xmlBeautifier/page";



export const generateMetadata = () => {
    const toolName = "XML Beautifier";
    const toolDescription = "Format and beautify your XML data effortlessly with our free online XML Beautifier tool. Make your XML code clean, readable, and well-structured in seconds!";
    const toolUrl = "https://www.codercrafter.in/tools/beautifiers/xml-beautifier";
    const toolImage = "https://codercrafter.in/assets/images/tools_codercrafter.png";

    return {
        title: `${toolName} | Free Online XML Beautifier Tool`,
        description: toolDescription,
        openGraph: {
            title: `${toolName} | Free Online XML Beautifier Tool`,
            description: toolDescription,
            type: "website",
            url: toolUrl,
            siteName: "CoderCrafter",
            images: toolImage,
        },
        twitter: {
            card: "summary_large_image",
            title: `${toolName} | Free Online XML Beautifier Tool`,
            description: toolDescription,
            images: toolImage,
        },
    };
};

const XmlBeautifierPage = () => {
    return <div className="container">
        <div className="w-full">
            <h1 style={{ fontWeight: 600 }} className="text-4xl">XML Beautifier</h1>
            {/* Replace with your XML Beautifier component */}
            <XmlBeautifier />
            <div className="mt-10 flex flex-wrap justify-center">
                <div className="md:w-1/2 flex flex-col gap-10">
                    <div className="flex flex-col gap-10">
                        <div>
                            <h2 className="text-4xl">What is an XML Beautifier?</h2>
                            <p>
                                An XML Beautifier is a tool that formats and organizes your XML data, making it more readable and maintainable. It adds proper indentation, spacing, and line breaks to your XML, ensuring that it is clean and easy to understand.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-3xl">🚀 Why Beautify XML?</h3>
                            <p>Beautifying your XML can significantly improve your workflow and data readability. It helps by:</p>
                            <ul>
                                <li>✅ Improving Readability: Proper formatting makes your XML easier to read and debug.</li>
                                <li>✅ Enhancing Maintainability: Organized XML is simpler to update and maintain.</li>
                                <li>✅ Facilitating Collaboration: Clean XML is easier for teams to work with.</li>
                                <li>✅ Reducing Errors: Well-structured XML minimizes the risk of syntax errors.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl">Features of Our XML Beautifier</h2>
                        <ul>
                            <li>🔹 Instant Formatting – Beautify XML in real-time.</li>
                            <li>🔹 Proper Indentation – Adds consistent spacing and line breaks.</li>
                            <li>🔹 Easy to Use – Simple and intuitive interface.</li>
                            <li>🔹 Free & Secure – No data is stored or shared.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl">How to Use the XML Beautifier?</h2>
                        <ol className="list-decimal">
                            <li>Paste your XML data in the input box.</li>
                            <li>Click the "Beautify XML" button.</li>
                            <li>Copy the formatted XML or download the beautified file directly and use it in your project.</li>
                        </ol>
                        💡 Tip: Use the beautifier to clean up minified or poorly formatted XML for better readability.
                    </div>
                    <div>
                        <h2 className="text-3xl">Why Choose Codercrafter’s XML Beautifier?</h2>
                        <ul>
                            <li>✨ Lightning Fast: Beautify XML in seconds.</li>
                            <li>🔒 100% Secure: No data is saved or tracked.</li>
                            <li>⚡ Developer-Friendly: Works for small and large XML files.</li>
                            <li>🌎 Cross-Platform: Use it on desktop & mobile.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl">What Does XML Beautification Do?</h2>
                        <ul>
                            <li>✅ Adds Proper Indentation – Ensures consistent spacing and alignment.</li>
                            <li>✅ Inserts Line Breaks – Separates XML elements and attributes for better readability.</li>
                            <li>✅ Organizes Data – Groups related elements and attributes together.</li>
                            <li>✅ Formats Comments – Preserves and formats XML comments for clarity.</li>
                        </ul>
                    </div>
                </div>
                <div className="md:w-1/2 flex flex-col">
                    <h2 className="text-4xl">Related Tools</h2>
                    <div className="p-6 flex flex-wrap gap-4">
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/beautifiers/xml-beautifier">XML Beautifier</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/beautifiers/json-beautifier">JSON Beautifier</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/beautifiers/js-beautifier">JavaScript Beautifier</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/beautifiers/css-beautifier">CSS Beautifier</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/beautifiers/html-beautifier">HTML Beautifier</a>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center gap-1 p-5">
                <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                    <span className="bg-gray-400 text-2xl text-white-800">🔹 Is XML Beautification Safe?</span>
                    <span>Yes! Beautification does not alter the functionality of your XML. It simply improves readability and organization.</span>
                </div>
                <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                    <span className="bg-gray-400 text-2xl text-white-800">🔹 Can I Minify Beautified XML?</span>
                    <span>Yes! You can use an XML minifier to compress the beautified XML for production use.</span>
                </div>
                <div className="w-2/3 flex flex-col border border-gray-600">
                    <span className="bg-gray-400 text-2xl text-black-900">🔹 Does Beautification Affect Performance?</span>
                    <span>No! Beautification is only for readability. It does not impact the performance of your XML in production.</span>
                </div>
            </div>
        </div>
    </div>
}
export default XmlBeautifierPage;