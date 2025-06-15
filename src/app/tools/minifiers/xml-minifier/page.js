import XmlMinifier from "@/app/_components/tools/minifiers-tools/xmlMinfier/page";

export const generateMetadata = () => {
    return {
        title: "XML Minifier | Free Online XML Compressor & Formatter",
        description: "Minify and compress your XML data with our free online XML Minifier. Remove unnecessary spaces and reduce file size for better performance.",
        openGraph: {
            title: "XML Minifier | Free Online XML Compressor & Formatter",
            description: "Use our free XML Minifier to compress and optimize your XML files. Reduce size and improve efficiency with just one click.",
            type: "website",
            url: "https://www.codercrafter.in/tools/minifiers/xml-minifier",
            siteName: "CoderCrafter Tools",
            images: ["https://codercrafter.in/assets/images/tools_codercrafter.png"],
        },
        twitter: {
            card: "summary_large_image",
            title: "XML Minifier | Free Online XML Compressor & Formatter",
            description: "Optimize and minify your XML files effortlessly with our free online XML Minifier. Reduce whitespace and enhance performance.",
            images: ["https://codercrafter.in/assets/images/tools_codercrafter.png"],
        }
    };
};


const XmlMinifierPage = () => {
    return <>
        <div className="container">
            <div className="w-full">
                <h1 style={{ fontWeight: 600 }} className="text-4xl">XML Minifier</h1>
                {/* Replace with your XML Minifier component */}
                <XmlMinifier />
                <div className="mt-10 flex flex-wrap justify-center">
                    <div className="md:w-1/2 flex flex-col gap-10">
                        <div className="flex flex-col gap-10">
                            <div>
                                <h2 className="text-4xl">What is an XML Minifier?</h2>
                                <p>
                                    An XML Minifier is a tool that removes unnecessary characters, spaces, comments, and line breaks from your XML files. This reduces the file size, making it easier to transfer and parse, while improving the performance of your applications.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-3xl">🚀 Why Minify XML?</h3>
                                <p>Minifying your XML can significantly improve your application's efficiency. It helps by:</p>
                                <ul>
                                    <li>✅ Reducing File Size: Eliminates unnecessary spaces and comments.</li>
                                    <li>✅ Improving Data Transfer Speed: Smaller files load and transfer faster.</li>
                                    <li>✅ Optimizing Performance: Reduces the amount of data sent over the network.</li>
                                    <li>✅ Enhancing Readability for Machines: Minified XML is easier for machines to parse.</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl">Features of Our XML Minifier</h2>
                            <ul>
                                <li>🔹 Instant Compression – Minify XML in real-time.</li>
                                <li>🔹 Removes Whitespace & Comments – Keeps only essential data.</li>
                                <li>🔹 Optimized for Performance – Reduces file size without affecting functionality.</li>
                                <li>🔹 Free & Secure – No data is stored or shared.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-3xl">How to Use the XML Minifier?</h2>
                            <ol className="list-decimal">
                                <li>Paste your XML code in the input box.</li>
                                <li>Click the "Minify XML" button.</li>
                                <li>Copy the optimized XML or download the minified file directly and use it in your project.</li>
                            </ol>
                            💡 Tip: Use minified XML along with Gzip compression for even better performance.
                        </div>
                        <div>
                            <h2 className="text-3xl">Why Choose Codercrafter’s XML Minifier?</h2>
                            <ul>
                                <li>✨ Lightning Fast: Compress XML in seconds.</li>
                                <li>🔒 100% Secure: No code is saved or tracked.</li>
                                <li>⚡ Developer-Friendly: Works for small and large XML files.</li>
                                <li>🌎 Cross-Platform: Use it on desktop & mobile.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-3xl">What Does XML Minification Remove?</h2>
                            <ul>
                                <li>✅ Whitespace & Indentation – Reduces unnecessary spaces.</li>
                                <li>✅ XML Comments – Eliminates  comments.</li>
                                <li>✅ Line Breaks – Removes extra lines for compact formatting.</li>
                                <li>✅ Redundant Tags – Optimizes XML structure for efficiency.</li>
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
                            <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/minifiers/xml-minifier">XML Minifier</a>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center gap-1 p-5">
                    <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                        <span className="bg-gray-400 text-2xl text-white-800">🔹 Is XML Minification Safe?</span>
                        <span>Yes! Minification does not alter the functionality of your XML. It simply removes unnecessary parts to reduce file size.</span>
                    </div>
                    <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                        <span className="bg-gray-400 text-2xl text-white-800">🔹 Can I Unminify XML?</span>
                        <span>Yes! You can use an XML beautifier or formatter to restore the original structure.</span>
                    </div>
                    <div className="w-2/3 flex flex-col border border-gray-600">
                        <span className="bg-gray-400 text-2xl text-black-900">🔹 Does Minification Improve Performance?</span>
                        <span>Absolutely! Minified XML reduces file size, leading to faster data transfer and improved application performance.</span>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default XmlMinifierPage;