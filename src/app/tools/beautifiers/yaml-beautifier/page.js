import YamlBeautifier from "@/app/_components/tools/Beautifiers/yamlBeautifier/page";

export const generateMetadata = () => {
    const toolName = "YAML Beautifier";
    const toolDescription = "Format and beautify your YAML data effortlessly with our free online YAML Beautifier tool. Make your YAML code clean, readable, and well-structured in seconds!";
    const toolUrl = "https://www.codercrafter.in/tools/beautifiers/yaml-beautifier";
    const toolImage = "https://codercrafter.in/assets/images/yaml_beautifier_tool.png";

    return {
        title: `${toolName} | Free Online YAML Beautifier Tool`,
        description: toolDescription,
        openGraph: {
            title: `${toolName} | Free Online YAML Beautifier Tool`,
            description: toolDescription,
            type: "website",
            url: toolUrl,
            siteName: "CoderCrafter",
            images: [toolImage],
        },
        twitter: {
            card: "summary_large_image",
            title: `${toolName} | Free Online YAML Beautifier Tool`,
            description: toolDescription,
            images: [toolImage],
        },
    };
};

const YamlBeautifierPage = () => {
    return <div className="container">
        <div className="w-full">
            <h1 style={{ fontWeight: 600 }} className="text-4xl">YAML Beautifier</h1>
            {/* Replace with your YAML Beautifier component */}
            <YamlBeautifier />
            <div className="mt-10 flex flex-wrap justify-center">
                <div className="md:w-1/2 flex flex-col gap-10">
                    <div className="flex flex-col gap-10">
                        <div>
                            <h2 className="text-4xl">What is a YAML Beautifier?</h2>
                            <p>
                                A YAML Beautifier is a tool that formats and organizes your YAML data, making it more readable and maintainable. It adds proper indentation, spacing, and line breaks to your YAML, ensuring that it is clean and easy to understand.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-3xl">🚀 Why Beautify YAML?</h3>
                            <p>Beautifying your YAML can significantly improve your workflow and data readability. It helps by:</p>
                            <ul>
                                <li>✅ Improving Readability: Proper formatting makes your YAML easier to read and debug.</li>
                                <li>✅ Enhancing Maintainability: Organized YAML is simpler to update and maintain.</li>
                                <li>✅ Facilitating Collaboration: Clean YAML is easier for teams to work with.</li>
                                <li>✅ Reducing Errors: Well-structured YAML minimizes the risk of syntax errors.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl">Features of Our YAML Beautifier</h2>
                        <ul>
                            <li>🔹 Instant Formatting – Beautify YAML in real-time.</li>
                            <li>🔹 Proper Indentation – Adds consistent spacing and line breaks.</li>
                            <li>🔹 Easy to Use – Simple and intuitive interface.</li>
                            <li>🔹 Free & Secure – No data is stored or shared.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl">How to Use the YAML Beautifier?</h2>
                        <ol className="list-decimal">
                            <li>Paste your YAML data in the input box.</li>
                            <li>Click the "Beautify YAML" button.</li>
                            <li>Copy the formatted YAML or download the beautified file directly and use it in your project.</li>
                        </ol>
                        💡 Tip: Use the beautifier to clean up minified or poorly formatted YAML for better readability.
                    </div>
                    <div>
                        <h2 className="text-3xl">Why Choose Codercrafter’s YAML Beautifier?</h2>
                        <ul>
                            <li>✨ Lightning Fast: Beautify YAML in seconds.</li>
                            <li>🔒 100% Secure: No data is saved or tracked.</li>
                            <li>⚡ Developer-Friendly: Works for small and large YAML files.</li>
                            <li>🌎 Cross-Platform: Use it on desktop & mobile.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl">What Does YAML Beautification Do?</h2>
                        <ul>
                            <li>✅ Adds Proper Indentation – Ensures consistent spacing and alignment.</li>
                            <li>✅ Inserts Line Breaks – Separates YAML keys and values for better readability.</li>
                            <li>✅ Organizes Data – Groups related keys and values together.</li>
                            <li>✅ Formats Comments – Preserves and formats YAML comments for clarity.</li>
                        </ul>
                    </div>
                </div>
                <div className="md:w-1/2 flex flex-col">
                    <h2 className="text-4xl">Related Tools</h2>
                    <div className="p-6 flex flex-wrap gap-4">
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/beautifiers/yaml-beautifier">YAML Beautifier</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/beautifiers/json-beautifier">JSON Beautifier</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/beautifiers/xml-beautifier">XML Beautifier</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/beautifiers/js-beautifier">JavaScript Beautifier</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/beautifiers/css-beautifier">CSS Beautifier</a>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center gap-1 p-5">
                <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                    <span className="bg-gray-400 text-2xl text-white-800">🔹 Is YAML Beautification Safe?</span>
                    <span>Yes! Beautification does not alter the functionality of your YAML. It simply improves readability and organization.</span>
                </div>
                <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                    <span className="bg-gray-400 text-2xl text-white-800">🔹 Can I Minify Beautified YAML?</span>
                    <span>Yes! You can use a YAML minifier to compress the beautified YAML for production use.</span>
                </div>
                <div className="w-2/3 flex flex-col border border-gray-600">
                    <span className="bg-gray-400 text-2xl text-black-900">🔹 Does Beautification Affect Performance?</span>
                    <span>No! Beautification is only for readability. It does not impact the performance of your YAML in production.</span>
                </div>
            </div>
        </div>
    </div>
}

export default YamlBeautifierPage;