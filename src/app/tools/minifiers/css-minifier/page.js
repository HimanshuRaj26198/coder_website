import CssMinifier from "@/app/_components/tools/minifiers-tools/cssMinifier/page";


export const generateMetadata = () => {
    return {
        title: "CSS Minifier | Free Online CSS Compressor & Optimizer",
        description: "Minify and compress your CSS code with our free online CSS Minifier. Reduce file size, improve performance, and optimize website loading speed.",
        openGraph: {
            title: "CSS Minifier | Free Online CSS Compressor & Optimizer",
            description: "Optimize your CSS by minifying and compressing it using our free CSS Minifier. Reduce file size and enhance website performance.",
            type: "website",
            url: "https://www.codercrafter.in/tools/minfiers/css-minifier",
            siteName: "CoderCrafter Tools",
            images: ["https://codercrafter.in/assets/images/tools_codercrafter.png"],
        },
        twitter: {
            card: "summary_large_image",
            title: "CSS Minifier | Free Online CSS Compressor & Optimizer",
            description: "Use our free CSS Minifier to compress and optimize your CSS files for faster website loading and better performance.",
            images: ["https://codercrafter.in/assets/images/tools_codercrafter.png"],
        }
    };
};


const CssMinfierPage = () => {
    return (
        <div className="container">
            <div className="w-full" >
                <h1 style={{ fontWeight: 600 }} className="text-4xl" >CSS Minifier</h1>
                <CssMinifier />
                <div className="mt-10 flex flex-wrap justify-center" >
                    <div className="md:w-1/2 flex flex-col gap-10" >
                        <div className="flex flex-col gap-10" >
                            <div><h2 className="text-4xl">What is a CSS Minifier?</h2>
                                <p>A CSS Minifier is a tool that removes unnecessary characters, spaces, comments, and redundant code from your CSS files. This reduces the file size, leading to faster page load times, improved performance, and better user experience.</p></div>
                            <div>
                                <h3 className="text-3xl" >🚀 Why Minify CSS?</h3>
                                <p>Minifying your CSS can significantly improve your website's speed and efficiency. It helps by: </p>
                                <ul  >
                                    <li>✅ Reducing File Size: Eliminates unnecessary spaces and comments.</li>
                                    <li>✅ Improving Page Load Speed: Smaller files load faster.</li>
                                    <li>✅ Optimizing Performance: Reduces the amount of data sent to browsers.</li>
                                    <li>✅ Enhancing SEO: Faster websites rank better on search engines.</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl" >Features of Our CSS Minifier</h2>
                            <ul>
                                <li>🔹 Instant Compression – Minify CSS in real-time.</li>
                                <li>🔹 Removes Whitespace & Comments – Keeps only essential code.</li>
                                <li>🔹 Optimized for Performance – Reduces file size without affecting functionality.</li>
                                <li>🔹 Free & Secure – No data is stored or shared.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="3xl" >How to Use the CSS Minifier?</h2>
                            <ol className="list-decimal" >
                                <li>Paste your CSS code in the input box.</li>
                                <li>Click the "Minify CSS" button.</li>
                                <li>Copy the optimized CSS or download the minified file directly and use it in your project.</li>
                            </ol>
                            💡 Tip: Use minified CSS along with Gzip compression for even better performance.
                        </div>

                        <div>
                            <h2 className="3xl" >Why Choose Codercrafter’s CSS Minifier?</h2>
                            <ul >
                                <li>✨ Lightning Fast: Compress CSS in seconds.</li>
                                <li>🔒 100% Secure: No code is saved or tracked.</li>
                                <li>⚡ Developer-Friendly: Works for small and large CSS files.</li>
                                <li>🌎 Cross-Platform: Use it on desktop & mobile.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-3xl" >What Does CSS Minification Remove?</h2>
                            <ul >
                                <li>✅ Whitespace & Indentation – Reduces unnecessary spaces.</li>
                                <li>✅ CSS Comments – Eliminates /* this is a comment */.</li>
                                <li>✅ Extra Semicolons & Line Breaks – Optimizes code structure.</li>
                                <li>✅ Redundant Properties – Removes duplicate rules.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col" >
                        <h2 className="text-4xl" >Related Tools </h2>
                        <div className="p-6 flex flex-wrap gap-4" >
                            <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/minifiers/css-minifier" >CSS Minifier</a>
                            <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/minifiers/js-minifier" >JS Minifier</a>
                            <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/minifiers/json-minifier" >JSON Minifier</a>
                            <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/minifiers/sql-minifier" >SQL Minifier</a>
                            <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/minifiers/html-minifier" >XML Minifier</a>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center gap-1 p-5" >
                    <div className="w-2/3 flex flex-col border border-gray-600 gap-2" >
                        <span className="bg-gray-400 text-2xl text-white-800" >🔹 Is CSS Minification Safe?</span>
                        <span>Yes! Minification does not alter the functionality of your CSS. It simply removes unnecessary parts to reduce file size.</span>
                    </div>
                    <div className="w-2/3 flex flex-col border border-gray-600 gap-2" >
                        <span className="bg-gray-400 text-2xl text-white-800" >🔹 Can I Unminify CSS?</span>
                        <span>Yes! Minification does not alter the functionality of your CSS. It simply removes unnecessary parts to reduce file size.</span>
                    </div>
                    <div className="w-2/3 flex flex-col border border-gray-600" >
                        <span className="bg-gray-400 text-2xl text-black-900" >🔹 Does Minification Improve SEO?</span>
                        <span>Absolutely! Faster websites have better SEO rankings, which helps in improving traffic and engagement.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CssMinfierPage;