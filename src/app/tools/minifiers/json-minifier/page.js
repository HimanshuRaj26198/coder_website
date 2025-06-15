import JsonMinifier from "@/app/_components/tools/minifiers-tools/jsonMinifier/page";

export const generateMetadata = () => {
    return {
        title: "JSON Minifier | Free Online JSON Compressor & Optimizer",
        description: "Minify and compress your JSON data with our free online JSON Minifier. Reduce file size and optimize your JSON for better performance.",
        openGraph: {
            title: "JSON Minifier | Free Online JSON Compressor & Optimizer",
            description: "Use our free JSON Minifier to reduce file size and optimize JSON data for faster processing and transmission.",
            type: "website",
            url: "https://www.codercrafter.in/tools/minifiers/json-minifier",
            siteName: "CoderCrafter Tools",
            images: ["https://codercrafter.in/assets/images/tools_codercrafter.png"],
        },
        twitter: {
            card: "summary_large_image",
            title: "JSON Minifier | Free Online JSON Compressor & Optimizer",
            description: "Optimize your JSON data by minifying and compressing it with our free JSON Minifier. Improve performance effortlessly.",
            images: ["https://codercrafter.in/assets/images/tools_codercrafter.png"],
        }
    };
};


const JsonMinifierPage = () => {
    return <>
        <div className="container">
            <div className="w-full">
                <h1 style={{ fontWeight: 600 }} className="text-4xl">JSON Minifier</h1>
                {/* Replace with your JSON Minifier component */}
                <JsonMinifier />
                <div className="mt-10 flex flex-wrap justify-center">
                    <div className="md:w-1/2 flex flex-col gap-10">
                        <div className="flex flex-col gap-10">
                            <div>
                                <h2 className="text-4xl">What is a JSON Minifier?</h2>
                                <p>
                                    A JSON Minifier is a tool that removes unnecessary characters, spaces, and line breaks from your JSON files. This reduces the file size, making it easier to transfer and parse, while improving the performance of your applications.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-3xl">🚀 Why Minify JSON?</h3>
                                <p>Minifying your JSON can significantly improve your application's efficiency. It helps by:</p>
                                <ul>
                                    <li>✅ Reducing File Size: Eliminates unnecessary spaces and line breaks.</li>
                                    <li>✅ Improving Data Transfer Speed: Smaller files load and transfer faster.</li>
                                    <li>✅ Optimizing Performance: Reduces the amount of data sent over the network.</li>
                                    <li>✅ Enhancing Readability for Machines: Minified JSON is easier for machines to parse.</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl">Features of Our JSON Minifier</h2>
                            <ul>
                                <li>🔹 Instant Compression – Minify JSON in real-time.</li>
                                <li>🔹 Removes Whitespace & Line Breaks – Keeps only essential data.</li>
                                <li>🔹 Optimized for Performance – Reduces file size without affecting functionality.</li>
                                <li>🔹 Free & Secure – No data is stored or shared.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-3xl">How to Use the JSON Minifier?</h2>
                            <ol className="list-decimal">
                                <li>Paste your JSON code in the input box.</li>
                                <li>Click the "Minify JSON" button.</li>
                                <li>Copy the optimized JSON or download the minified file directly and use it in your project.</li>
                            </ol>
                            💡 Tip: Use minified JSON along with Gzip compression for even better performance.
                        </div>
                        <div>
                            <h2 className="text-3xl">Why Choose Codercrafter’s JSON Minifier?</h2>
                            <ul>
                                <li>✨ Lightning Fast: Compress JSON in seconds.</li>
                                <li>🔒 100% Secure: No code is saved or tracked.</li>
                                <li>⚡ Developer-Friendly: Works for small and large JSON files.</li>
                                <li>🌎 Cross-Platform: Use it on desktop & mobile.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-3xl">What Does JSON Minification Remove?</h2>
                            <ul>
                                <li>✅ Whitespace & Indentation – Reduces unnecessary spaces.</li>
                                <li>✅ Line Breaks – Eliminates extra lines for compact formatting.</li>
                                <li>✅ Comments – Removes any comments (if present in JSON-like structures).</li>
                                <li>✅ Redundant Data – Optimizes JSON structure for efficiency.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col">
                        <h2 className="text-4xl">Related Tools</h2>
                        <div className="p-6 flex flex-wrap gap-4">
                            <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/minifiers/css-minifier">CSS Minifier</a>
                            <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/minifiers/js-minifier">JS Minifier</a>
                            <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/minifiers/json-minifier">JSON Minifier</a>
                            <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/minifiers/sql-minifier">SQL Minifier</a>
                            <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/minifiers/html-minifier">HTML Minifier</a>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center gap-1 p-5">
                    <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                        <span className="bg-gray-400 text-2xl text-white-800">🔹 Is JSON Minification Safe?</span>
                        <span>Yes! Minification does not alter the functionality of your JSON. It simply removes unnecessary parts to reduce file size.</span>
                    </div>
                    <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                        <span className="bg-gray-400 text-2xl text-white-800">🔹 Can I Unminify JSON?</span>
                        <span>Yes! You can use a JSON beautifier or formatter to restore the original structure.</span>
                    </div>
                    <div className="w-2/3 flex flex-col border border-gray-600">
                        <span className="bg-gray-400 text-2xl text-black-900">🔹 Does Minification Improve Performance?</span>
                        <span>Absolutely! Minified JSON reduces file size, leading to faster data transfer and improved application performance.</span>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default JsonMinifierPage;