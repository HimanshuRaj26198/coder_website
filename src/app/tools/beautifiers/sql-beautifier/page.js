import SqlBeautifier from "@/app/_components/tools/Beautifiers/sqlBeautifier/page";

export const generateMetadata = () => {
    const toolName = "SQL Beautifier";
    const toolDescription = "Format and beautify your SQL queries effortlessly with our free online SQL Beautifier tool. Make your SQL code clean, readable, and well-structured in seconds!";
    const toolUrl = "https://www.codercrafter.in/tools/beautifiers/sql-beautifier";
    const toolImage = "https://codercrafter.in/assets/images/tools_codercrafter.png";

    return {
        title: `${toolName} | Free Online SQL Beautifier Tool`,
        description: toolDescription,
        openGraph: {
            title: `${toolName} | Free Online SQL Beautifier Tool`,
            description: toolDescription,
            type: "website",
            url: toolUrl,
            siteName: "CoderCrafter",
            images: [toolImage],
        },
        twitter: {
            card: "summary_large_image",
            title: `${toolName} | Free Online SQL Beautifier Tool`,
            description: toolDescription,
            images: [toolImage],
        },
    };
};

const SqlBeautifierPage = () => {
    return <div className="container">
        <div className="w-full">
            <h1 style={{ fontWeight: 600 }} className="text-4xl">SQL Beautifier</h1>
            {/* Replace with your SQL Beautifier component */}
            <SqlBeautifier />
            <div className="mt-10 flex flex-wrap justify-center">
                <div className="md:w-1/2 flex flex-col gap-10">
                    <div className="flex flex-col gap-10">
                        <div>
                            <h2 className="text-4xl">What is an SQL Beautifier?</h2>
                            <p>
                                An SQL Beautifier is a tool that formats and organizes your SQL queries, making them more readable and maintainable. It adds proper indentation, spacing, and line breaks to your SQL code, ensuring that it is clean and easy to understand.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-3xl">🚀 Why Beautify SQL?</h3>
                            <p>Beautifying your SQL can significantly improve your workflow and query readability. It helps by:</p>
                            <ul>
                                <li>✅ Improving Readability: Proper formatting makes your SQL easier to read and debug.</li>
                                <li>✅ Enhancing Maintainability: Organized queries are simpler to update and maintain.</li>
                                <li>✅ Facilitating Collaboration: Clean SQL is easier for teams to work with.</li>
                                <li>✅ Reducing Errors: Well-structured SQL minimizes the risk of syntax errors.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl">Features of Our SQL Beautifier</h2>
                        <ul>
                            <li>🔹 Instant Formatting – Beautify SQL in real-time.</li>
                            <li>🔹 Proper Indentation – Adds consistent spacing and line breaks.</li>
                            <li>🔹 SQL Keyword Highlighting – Recognizes all major SQL keywords.</li>
                            <li>🔹 Free & Secure – No queries are stored or shared.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl">How to Use the SQL Beautifier?</h2>
                        <ol className="list-decimal">
                            <li>Paste your SQL query in the input box.</li>
                            <li>Click the "Beautify SQL" button.</li>
                            <li>Copy the formatted SQL or download the beautified file directly and use it in your project.</li>
                        </ol>
                        💡 Tip: Use the beautifier to clean up complex queries with multiple joins and subqueries for better readability.
                    </div>
                    <div>
                        <h2 className="text-3xl">Why Choose Codercrafter's SQL Beautifier?</h2>
                        <ul>
                            <li>✨ Lightning Fast: Beautify SQL in seconds.</li>
                            <li>🔒 100% Secure: No queries are saved or tracked.</li>
                            <li>⚡ Developer-Friendly: Works with all SQL dialects (MySQL, PostgreSQL, SQL Server, etc.).</li>
                            <li>🌎 Cross-Platform: Use it on desktop & mobile.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl">What Does SQL Beautification Do?</h2>
                        <ul>
                            <li>✅ Adds Proper Indentation – Ensures consistent spacing and alignment.</li>
                            <li>✅ Inserts Line Breaks – Separates SQL clauses for better readability.</li>
                            <li>✅ Organizes Queries – Groups related clauses together.</li>
                            <li>✅ Formats Subqueries – Properly nests and indents subqueries.</li>
                        </ul>
                    </div>
                </div>
                <div className="md:w-1/2 flex flex-col">
                    <h2 className="text-4xl">Related Tools</h2>
                    <div className="p-6 flex flex-wrap gap-4">
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/beautifiers/sql-beautifier">SQL Beautifier</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/beautifiers/json-beautifier">JSON Beautifier</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/beautifiers/js-beautifier">JavaScript Beautifier</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/beautifiers/css-beautifier">CSS Beautifier</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/beautifiers/html-beautifier">HTML Beautifier</a>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center gap-1 p-5">
                <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                    <span className="bg-gray-400 text-2xl text-white-800">🔹 Is SQL Beautification Safe?</span>
                    <span>Yes! Beautification doesn't change your query's functionality. It only improves its structure and readability.</span>
                </div>
                <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                    <span className="bg-gray-400 text-2xl text-white-800">🔹 Can I Execute Beautified SQL?</span>
                    <span>Yes! The beautified SQL is fully functional and can be executed just like the original query.</span>
                </div>
                <div className="w-2/3 flex flex-col border border-gray-600">
                    <span className="bg-gray-400 text-2xl text-black-900">🔹 Does Beautification Affect Query Performance?</span>
                    <span>No! Beautification is only for readability. It does not impact the performance of your SQL queries.</span>
                </div>
            </div>
        </div>
    </div>
}

export default SqlBeautifierPage;