import HtmlBeautifier from "@/app/_components/tools/Beautifiers/htmlBeautifier/page";

export const generateMetadata = () => {
    const toolName = "HTML Beautifier";
    const toolDescription = "Format and beautify your HTML code effortlessly with our free online HTML Beautifier tool. Make your HTML clean, readable, and well-structured in seconds!";
    const toolUrl = "https://www.codercrafter.in/tools/beautifiers/html-beautifier";
    const toolImage = "https://codercrafter.in/assets/images/tools_codercrafter.png";

    return {
        title: `${toolName} | Free Online HTML Beautifier Tool`,
        description: toolDescription,
        openGraph: {
            title: `${toolName} | Free Online HTML Beautifier Tool`,
            description: toolDescription,
            type: "website",
            url: toolUrl,
            siteName: "CoderCrafter",
            images: [toolImage],
        },
        twitter: {
            card: "summary_large_image",
            title: `${toolName} | Free Online HTML Beautifier Tool`,
            description: toolDescription,
            images: [toolImage],
        },
    };
};

const HtmlBeautifierPage = () => {
    return <div className="container">
        <div className="w-full">
            <h1 style={{ fontWeight: 600 }} className="text-4xl">HTML Beautifier</h1>
            {/* Replace with your HTML Beautifier component */}
            <HtmlBeautifier />
            <div className="mt-10 flex flex-wrap justify-center">
                <div className="md:w-1/2 flex flex-col gap-10">
                    <div className="flex flex-col gap-10">
                        <div>
                            <h2 className="text-4xl">What is an HTML Beautifier?</h2>
                            <p>
                                An HTML Beautifier is a tool that formats and organizes your HTML code, making it more readable and maintainable. It adds proper indentation, spacing, and line breaks to your markup, ensuring that it is clean and well-structured.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-3xl">🚀 Why Beautify HTML?</h3>
                            <p>Beautifying your HTML can significantly improve your workflow and code quality. It helps by:</p>
                            <ul>
                                <li>✅ Improving Readability: Proper formatting makes your HTML easier to read and debug.</li>
                                <li>✅ Enhancing Maintainability: Organized markup is simpler to update and maintain.</li>
                                <li>✅ Facilitating Collaboration: Clean code is easier for teams to work with.</li>
                                <li>✅ Reducing Errors: Well-structured HTML minimizes the risk of nesting errors.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl">Features of Our HTML Beautifier</h2>
                        <ul>
                            <li>🔹 Instant Formatting – Beautify HTML in real-time.</li>
                            <li>🔹 Proper Indentation – Adds consistent spacing and nesting.</li>
                            <li>🔹 Preserves Content – Handles text and special characters correctly.</li>
                            <li>🔹 Free & Secure – No data is stored or shared.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl">How to Use the HTML Beautifier?</h2>
                        <ol className="list-decimal">
                            <li>Paste your HTML code in the input box.</li>
                            <li>Click the "Beautify HTML" button.</li>
                            <li>Copy the formatted HTML or download the beautified file directly.</li>
                        </ol>
                        💡 Tip: Use the beautifier to clean up minified or poorly formatted HTML from websites.
                    </div>
                    <div>
                        <h2 className="text-3xl">Why Choose Codercrafter's HTML Beautifier?</h2>
                        <ul>
                            <li>✨ Lightning Fast: Beautify HTML in seconds.</li>
                            <li>🔒 100% Secure: No code is saved or tracked.</li>
                            <li>⚡ Developer-Friendly: Works for small snippets and full pages.</li>
                            <li>🌎 Cross-Platform: Use it on desktop & mobile.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl">What Does HTML Beautification Do?</h2>
                        <ul>
                            <li>✅ Corrects Indentation – Ensures proper nesting of HTML elements.</li>
                            <li>✅ Adds Line Breaks – Separates elements for better readability.</li>
                            <li>✅ Preserves Content – Maintains text formatting and whitespace.</li>
                            <li>✅ Formats Attributes – Aligns and organizes element attributes.</li>
                        </ul>
                    </div>
                </div>
                <div className="md:w-1/2 flex flex-col">
                    <h2 className="text-4xl">Related Tools</h2>
                    <div className="p-6 flex flex-wrap gap-4">
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/beautifiers/js-beautifier">JavaScript Beautifier</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/beautifiers/css-beautifier">CSS Beautifier</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/beautifiers/html-beautifier">HTML Beautifier</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/beautifiers/json-beautifier">JSON Beautifier</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/beautifiers/xml-beautifier">XML Beautifier</a>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center gap-1 p-5">
                <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                    <span className="bg-gray-400 text-2xl text-white-800">🔹 Is HTML Beautification Safe?</span>
                    <span>Yes! Beautification doesn't change your HTML's functionality. It only improves its structure and readability.</span>
                </div>
                <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                    <span className="bg-gray-400 text-2xl text-white-800">🔹 Can I Minify Beautified HTML?</span>
                    <span>Yes! You can use an HTML minifier to compress the beautified code for production use.</span>
                </div>
                <div className="w-2/3 flex flex-col border border-gray-600">
                    <span className="bg-gray-400 text-2xl text-black-900">🔹 Does Beautification Affect SEO?</span>
                    <span>No! Search engines process the DOM, not the raw HTML formatting. Beautification helps developers, not search engines.</span>
                </div>
            </div>
        </div>
    </div>
}

export default HtmlBeautifierPage;