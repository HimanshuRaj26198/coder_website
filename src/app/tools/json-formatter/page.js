import JsonFormatter from "@/app/_components/tools/JsonFormatter/page";

export const generateMetadata = () => {
    return {
        title: "JSON Formatter | Free Online JSON Beautifier & Validator",
        description: "Format and beautify JSON data with our free online JSON Formatter. Validate, indent, and optimize your JSON code for better readability.",
        openGraph: {
            title: "JSON Formatter | Free Online JSON Beautifier & Validator",
            description: "Easily format and validate JSON data with our free online JSON Formatter. Beautify and optimize JSON for improved readability and debugging.",
            type: "website",
            url: "https://www.codercrafter.in/tools/json-formatter",
            siteName: "CoderCrafter Tools",
            images: ["https://codercrafter.in/assets/images/jtools_codercrafter.png"],
        },
        twitter: {
            card: "summary_large_image",
            title: "JSON Formatter | Free Online JSON Beautifier & Validator",
            description: "Use our free JSON Formatter to beautify, validate, and optimize JSON data for better readability and debugging.",
            images: ["https://codercrafter.in/assets/images/tools_codercrafter.png"],
        }
    };
};


const JsonFormatetrPage = () => {
    return <>
        <JsonFormatter />
    </>
}

export default JsonFormatetrPage;