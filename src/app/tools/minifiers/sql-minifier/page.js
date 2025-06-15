import SqlMinifier from "@/app/_components/tools/minifiers-tools/sqlMinifier/page";

export const generateMetadata = () => {
    return {
        title: "SQL Minifier | Free Online SQL Compressor & Optimizer",
        description: "Minify and compress your SQL queries with our free online SQL Minifier. Reduce whitespace and optimize your SQL for better performance.",
        openGraph: {
            title: "SQL Minifier | Free Online SQL Compressor & Optimizer",
            description: "Use our free SQL Minifier to compress and optimize your SQL queries for faster execution and improved performance.",
            type: "website",
            url: "https://www.codercrafter.in/tools/minifiers/sql-minifier",
            siteName: "CoderCrafter Tools",
            images: ["https://codercrafter.in/assets/images/tools_codercrafter.png"],
        },
        twitter: {
            card: "summary_large_image",
            title: "SQL Minifier | Free Online SQL Compressor & Optimizer",
            description: "Optimize your SQL queries by minifying and compressing them with our free SQL Minifier. Improve database performance easily.",
            images: ["https://codercrafter.in/assets/images/tools_codercrafter.png"],
        }
    };
};


const SqlMinifierPage = () => {
    return <>
        <div className="container">
            <div className="w-full">
                <h1 style={{ fontWeight: 600 }} className="text-4xl">SQL Minifier</h1>
                {/* Replace with your SQL Minifier component */}
                <SqlMinifier />
                <div className="mt-10 flex flex-wrap justify-center">
                    <div className="md:w-1/2 flex flex-col gap-10">
                        <div className="flex flex-col gap-10">
                            <div>
                                <h2 className="text-4xl">What is an SQL Minifier?</h2>
                                <p>
                                    An SQL Minifier is a tool that removes unnecessary characters, spaces, comments, and line breaks from your SQL queries. This reduces the file size and improves the efficiency of your database operations, making your queries faster and easier to manage.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-3xl">🚀 Why Minify SQL?</h3>
                                <p>Minifying your SQL queries can significantly improve your database performance. It helps by:</p>
                                <ul>
                                    <li>✅ Reducing Query Size: Eliminates unnecessary spaces and comments.</li>
                                    <li>✅ Improving Execution Speed: Smaller queries are processed faster by the database engine.</li>
                                    <li>✅ Optimizing Storage: Reduces the amount of space required to store SQL scripts.</li>
                                    <li>✅ Enhancing Readability for Machines: Minified SQL is easier for databases to parse and execute.</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl">Features of Our SQL Minifier</h2>
                            <ul>
                                <li>🔹 Instant Compression – Minify SQL in real-time.</li>
                                <li>🔹 Removes Whitespace & Comments – Keeps only essential query logic.</li>
                                <li>🔹 Optimized for Performance – Reduces query size without affecting functionality.</li>
                                <li>🔹 Free & Secure – No data is stored or shared.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-3xl">How to Use the SQL Minifier?</h2>
                            <ol className="list-decimal">
                                <li>Paste your SQL query in the input box.</li>
                                <li>Click the "Minify SQL" button.</li>
                                <li>Copy the optimized SQL or download the minified file directly and use it in your project.</li>
                            </ol>
                            💡 Tip: Use minified SQL along with database indexing for even better performance.
                        </div>
                        <div>
                            <h2 className="text-3xl">Why Choose Codercrafter’s SQL Minifier?</h2>
                            <ul>
                                <li>✨ Lightning Fast: Compress SQL in seconds.</li>
                                <li>🔒 100% Secure: No code is saved or tracked.</li>
                                <li>⚡ Developer-Friendly: Works for small and large SQL scripts.</li>
                                <li>🌎 Cross-Platform: Use it on desktop & mobile.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-3xl">What Does SQL Minification Remove?</h2>
                            <ul>
                                <li>✅ Whitespace & Indentation – Reduces unnecessary spaces.</li>
                                <li>✅ SQL Comments – Eliminates /* ... */ and -- comments.</li>
                                <li>✅ Line Breaks – Removes extra lines for compact formatting.</li>
                                <li>✅ Redundant Syntax – Optimizes SQL structure for efficiency.</li>
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
                        <span className="bg-gray-400 text-2xl text-white-800">🔹 Is SQL Minification Safe?</span>
                        <span>Yes! Minification does not alter the functionality of your SQL queries. It simply removes unnecessary parts to reduce file size.</span>
                    </div>
                    <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                        <span className="bg-gray-400 text-2xl text-white-800">🔹 Can I Unminify SQL?</span>
                        <span>Yes! You can use an SQL beautifier or formatter to restore the original structure.</span>
                    </div>
                    <div className="w-2/3 flex flex-col border border-gray-600">
                        <span className="bg-gray-400 text-2xl text-black-900">🔹 Does Minification Improve Performance?</span>
                        <span>Absolutely! Minified SQL reduces query size, leading to faster execution and improved database performance.</span>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default SqlMinifierPage;