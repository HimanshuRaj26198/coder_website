import HtmlMinifier from "@/app/_components/tools/minifiers-tools/htmlMinifer/page";

export const generateMetadata = () => {
    return {
        title: "HTML Minifier | Free Online HTML Compressor & Optimizer",
        description: "Minify and compress your HTML code with our free online HTML Minifier. Reduce file size, improve page speed, and optimize web performance.",
        openGraph: {
            title: "HTML Minifier | Free Online HTML Compressor & Optimizer",
            description: "Use our free HTML Minifier to compress and optimize your HTML files for faster page load times and improved performance.",
            type: "website",
            url: "https://www.codercrafter.in/tools/minifiers/html-minifier",
            siteName: "CoderCrafter Tools",
            images: ["https://codercrafter.in/assets/images/logo_codercrafter.png"],
        },
        twitter: {
            card: "summary_large_image",
            title: "HTML Minifier | Free Online HTML Compressor & Optimizer",
            description: "Optimize your HTML by minifying and compressing it with our free HTML Minifier. Improve page speed and web performance effortlessly.",
            images: ["https://codercrafter.in/assets/images/logo_codercrafter.png"],
        }
    };
};


const HtmlMinifierPage = () => {
    return <>
        <div className="container">
            <div className="w-full">
                <h1 style={{ fontWeight: 600 }} className="text-4xl">HTML Minifier</h1>
                {/* Replace with your HTML Minifier component */}
                <HtmlMinifier />
                <div className="mt-10 flex flex-wrap justify-center">
                    <div className="md:w-1/2 flex flex-col gap-10">
                        <div className="flex flex-col gap-10">
                            <div>
                                <h2 className="text-4xl">What is an HTML Minifier?</h2>
                                <p>
                                    An HTML Minifier is a tool that removes unnecessary characters, spaces, comments, and redundant code from your HTML files. This reduces the file size, leading to faster page load times, improved performance, and better user experience.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-3xl">🚀 Why Minify HTML?</h3>
                                <p>Minifying your HTML can significantly improve your website's speed and efficiency. It helps by:</p>
                                <ul>
                                    <li>✅ Reducing File Size: Eliminates unnecessary spaces and comments.</li>
                                    <li>✅ Improving Page Load Speed: Smaller files load faster.</li>
                                    <li>✅ Optimizing Performance: Reduces the amount of data sent to browsers.</li>
                                    <li>✅ Enhancing SEO: Faster websites rank better on search engines.</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl">Features of Our HTML Minifier</h2>
                            <ul>
                                <li>🔹 Instant Compression – Minify HTML in real-time.</li>
                                <li>🔹 Removes Whitespace & Comments – Keeps only essential code.</li>
                                <li>🔹 Optimized for Performance – Reduces file size without affecting functionality.</li>
                                <li>🔹 Free & Secure – No data is stored or shared.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-3xl">How to Use the HTML Minifier?</h2>
                            <ol className="list-decimal">
                                <li>Paste your HTML code in the input box.</li>
                                <li>Click the "Minify HTML" button.</li>
                                <li>Copy the optimized HTML or download the minified file directly and use it in your project.</li>
                            </ol>
                            💡 Tip: Use minified HTML along with Gzip compression for even better performance.
                        </div>
                        <div>
                            <h2 className="text-3xl">Why Choose Codercrafter’s HTML Minifier?</h2>
                            <ul>
                                <li>✨ Lightning Fast: Compress HTML in seconds.</li>
                                <li>🔒 100% Secure: No code is saved or tracked.</li>
                                <li>⚡ Developer-Friendly: Works for small and large HTML files.</li>
                                <li>🌎 Cross-Platform: Use it on desktop & mobile.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-3xl">What Does HTML Minification Remove?</h2>
                            <ul>
                                <li>✅ Whitespace & Indentation – Reduces unnecessary spaces.</li>
                                <li>✅ HTML Comments – Eliminates</li>
                                <li>✅ Extra Line Breaks – Optimizes code structure.</li>
                                <li>✅ Redundant Attributes – Removes duplicate attributes.</li>
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
                        <span className="bg-gray-400 text-2xl text-white-800">🔹 Is HTML Minification Safe?</span>
                        <span>Yes! Minification does not alter the functionality of your HTML. It simply removes unnecessary parts to reduce file size.</span>
                    </div>
                    <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                        <span className="bg-gray-400 text-2xl text-white-800">🔹 Can I Unminify HTML?</span>
                        <span>Yes! You can use an HTML beautifier or formatter to restore the original structure.</span>
                    </div>
                    <div className="w-2/3 flex flex-col border border-gray-600">
                        <span className="bg-gray-400 text-2xl text-black-900">🔹 Does Minification Improve SEO?</span>
                        <span>Absolutely! Faster websites have better SEO rankings, which helps in improving traffic and engagement.</span>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default HtmlMinifierPage;