// import { imageOptimizer } from "next/dist/server/image-optimizer";

// const toolsList = {
//     imageOptmizer: [{ name: "Image Optimizer", path: "/tools/image-optimizer" },
//     { name: "Image Converter", path: "/tools/image-optimizer" },
//     { name: "Image Compressor", path: "/tools/image-optimizer" }
//     ],
//     beautifiers: [
//         { name: "CSS Beautifier", path: "/tools/beautifiers/css-beautifier" },
//         { name: "JS Beautifier", path: "/tools/beautifiers/js-beautifier" },
//         { name: "JSON Beautifier", path: "/tools/beautifiers/json-beautifier" },
//         { name: "XML Beautifier", path: "/tools/beautifiers/xml-beautifier" },
//         { name: "YAML Beautifier", path: "/tools/beautifiers/yaml-beautifier" }
//     ],
//     minifiers: [
//         { name: "CSS Minifier", path: "/tools/minifiers/css-minifier" },
//         { name: "HTML Minifier", path: "/tools/minifiers/html-minifier" },
//         { name: "JS Minifier", path: "/tools/minifiers/js-minifier" },
//         { name: "JSON Minifier", path: "/tools/minifiers/json-minifier" },
//         { name: "SQL Minifier", path: "/tools/minifiers/sql-minifier" },
//         { name: "XML Minifier", path: "/tools/minifiers/xml-minifier" }
//     ],
//     JSONConverters: [
//         { name: "Json To XML", path: "/tools/json-converters/json-to-xml" },
//         { name: "Json To CSV", path: "/tools/json-converters/json-to-csv" },
//         { name: "Json To Excel", path: "/tools/json-converters/json-to-excel" },
//         { name: "Json To YAML", path: "/tools/json-converters/json-to-yaml" },
//         { name: "Json To HTML", path: "/tools/json-converters/json-to-html" },
//         { name: "Json To Text", path: "/tools/json-converters/json-to-text" },
//         { name: "Json To TSV", path: "/tools/json-converters/json-to-tsv" }
//     ],
//     XmlConverters: [
//         { name: "XML To JSON", path: "/tools/xml-converters/xml-to-json" },
//         { name: "XML To Excel", path: "/tools/xml-converters/xml-to-excel" },
//         { name: "XML To CSV", path: "/tools/xml-converters/xml-to-csv" },
//         { name: "XML TO YAML", path: "/tools/xml-converters/xml-to-yaml" },
//         { name: "XML TO XSL", path: "/tools/xml-converters/xml-to-xsl" },
//         { name: "XML TO TSV", path: "/tools/xml-converters/xml-to-tsv" },
//         { name: "XML TO TEXT", path: "/tools/xml-converters/xml-to-text" },
//         { name: "XML TO JAVA", path: "/tools/xml-converters/xml-to-java" },
//         { name: "XML To HTML", path: "/tools/xml-converters/xml-to-html" }
//     ],
//     colorConverters: [
//         { name: "RGB TO HEX", path: "/tools/color-converters/rgb-to-hex" },
//         { name: "RGB To HSV", path: "/tools/color-converters/rgb-to-hsv" },
//         { name: "RGB TO CMYK", path: "/tools/color-converters/rgb-to-cmyk" },
//         { name: "RGB To Pantone", path: "/tools/color-converters/rgb-to-pantone" },
//         { name: "HEX TO RGB", path: "/tools/color-converters/hex-to-rgb" },
//         { name: "HEX TO HSV", path: "/tools/color-converters/hex-to-hsv" },
//         { name: "HEX TO CMYK", path: "/tools/color-converters/hex-to-cmyk" },
//         { name: "HEX TO PANTONE", path: "/tools/color-converters/hex-to-pantone" },
//         { name: "CMYK TO RGB", path: "/tools/color-converters/cmyk-to-rgb" },
//         { name: "CMYK TO HEX", path: "/tools/color-converters/cmyk-to-hex" },
//         { name: "CMYK TO HSV", path: "/tools/color-converters/cmyk-to-hsv" },
//         { name: "CMYK TO Pantone", path: "/tools/color-converters/cmyk-to-pantone" },
//         { name: "Pantone To RGB", path: "/tools/color-converters/pantone-to-rgb" },
//         { name: "Pantone To HEX", path: "/tools/color-converters/pantone-to-hex" },
//         { name: "Pantone TO HSV", path: "/tools/color-converters/pantone-to-hsv" },
//         { name: "Pantone TO CMYK", path: "/tools/color-converters/pantone-to-cmyk" },
//         { name: "HSV TO RGB", path: "/tools/color-converters/hsv-to-rgb" },
//         { name: "HSV TO HEX", path: "/tools/color-converters/hsv-to-hex" },
//         { name: "HSV TO CMYK", path: "/tools/color-converters/hsv-to-cmyk" },
//         // { name: "HSV TO Pantone", path: "/tools/color-converters/hsv-to-pantone" }
//     ],


//     JsonFormatters: [
//         { name: "Json Formatter", path: "/tools/json-formatter" }
//     ],


// };

// const toolsCategory = {
//     imageOptmizer: "Image Optimizers/Converters",
//     beautifiers: "Beautifiers",
//     colorConverters: "Color Converters",
//     JSONConverters: "JSON Converters",
//     minifiers: "Minifiers",
//     JsonFormatters: "JSON Formatters",
//     XmlConverters: "XML Converters"
// }

// const ToolCard = ({ tool }) => {
//     return (
//         <a href={tool.path} className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//             <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
//             <p className="text-gray-600">Click to use the {tool.name} tool.</p>
//         </a>
//     );
// };

// const ToolCategory = ({ category, tools }) => {
//     return (
//         <div className="mb-8">
//             <h2 className="text-2xl font-bold mb-4">{toolsCategory[category]}</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {tools.map((tool, index) => (
//                     <ToolCard key={index} tool={tool} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export const generateMetadata = () => {
//     return {
//         title: "Free Online Tools for Developers and Designers | Beautifiers, Converters, Minifiers, and More",
//         description: "Explore our collection of free online tools for developers and designers. Beautify, convert, minify, and optimize your code and data with our easy-to-use tools. Improve your productivity today!",
//         openGraph: { // ✅ Fixed: "opengraph" → "openGraph"
//             title: "Free Online Tools for Developers and Designers | Beautifiers, Converters, Minifiers, and More",
//             description: "Explore our collection of free online tools for developers and designers. Beautify, convert, minify, and optimize your code and data with our easy-to-use tools. Improve your productivity today!",
//             type: "website",
//             url: "https://www.codercrafter.in/blogs/tools",
//             siteName: "Your Website Name", // ✅ Fixed: "site_name" → "siteName"
//             images: ["https://codercrafter.in/assets/images/tools_codercrafter.png"], // ✅ Fixed: should be an array
//         },
//         twitter: {
//             card: "summary_large_image",
//             title: "Free Online Tools for Developers and Designers | Beautifiers, Converters, Minifiers, and More",
//             description: "Explore our collection of free online tools for developers and designers. Beautify, convert, minify, and optimize your code and data with our easy-to-use tools. Improve your productivity today!",
//             images: ["https://codercrafter.in/assets/images/tools_codercrafter.png"], // ✅ Fixed: should be an array
//         }
//     }
// }




// const ToolsListPage = () => {
//     return (
//         <div className="container mx-auto px-4 py-8">
//             <h1 className="text-3xl font-bold mb-8">Tools List</h1>
//             <p className="text-lg text-gray-700 mb-8">
//                 Explore our collection of free online tools designed to make your work easier and more efficient. From beautifiers and minifiers to color converters and JSON/XML tools, we offer a wide range of utilities to help you with your development and design tasks. Whether you're a developer, designer, or just someone looking to simplify your workflow, our tools are here to assist you.
//             </p>
//             <p className="text-lg text-gray-700 mb-8">
//                 Our tools are easy to use, fast, and reliable. They are perfect for formatting, converting, and optimizing your code and data. Browse through the categories below to find the tool you need, and start improving your productivity today!
//             </p>
//             {Object.entries(toolsList).map(([category, tools]) => (
//                 <ToolCategory key={category} category={category} tools={tools} />
//             ))}
//             <p className="text-lg text-gray-700 mt-8">
//                 If you have any questions or need assistance, feel free to reach out to us. We are constantly updating and adding new tools to our collection, so make sure to check back often for the latest additions. Happy tooling!
//             </p>
//         </div>
//     );
// };

// export default ToolsListPage;

"use client"

import Link from "next/link"
import {
    ImageIcon,
    Minimize2,
    Palette,
    FileJson2,
    Search,
    Wand2,
    Settings2,
    FileOutput,
    FileInput,
    ArrowRight,
} from "lucide-react"

// --- Data Definitions ---
const toolsList = {
    imageTools: [
        {
            name: "Image Optimizer",
            path: "/tools/image-optimizer",
            description: "Reduce image file sizes without losing quality.",
        },
        {
            name: "Image Converter",
            path: "/tools/image-optimizer",
            description: "Convert images between various formats (PNG, JPG, WEBP).",
        },
        {
            name: "Image Compressor",
            path: "/tools/image-optimizer",
            description: "Compress images to significantly smaller sizes.",
        },
    ],
    beautifiers: [
        {
            name: "CSS Beautifier",
            path: "/tools/beautifiers/css-beautifier",
            description: "Format and indent your CSS code for readability.",
        },
        {
            name: "JS Beautifier",
            path: "/tools/beautifiers/js-beautifier",
            description: "Make your JavaScript code neat and well-structured.",
        },
        {
            name: "JSON Beautifier",
            path: "/tools/beautifiers/json-beautifier",
            description: "Format JSON data for easy viewing and debugging.",
        },
        {
            name: "XML Beautifier",
            path: "/tools/beautifiers/xml-beautifier",
            description: "Structure your XML documents clearly.",
        },
        {
            name: "YAML Beautifier",
            path: "/tools/beautifiers/yaml-beautifier",
            description: "Improve the readability of YAML files.",
        },
    ],
    minifiers: [
        {
            name: "CSS Minifier",
            path: "/tools/minifiers/css-minifier",
            description: "Reduce CSS file size for faster loading.",
        },
        {
            name: "HTML Minifier",
            path: "/tools/minifiers/html-minifier",
            description: "Shrink HTML documents by removing unnecessary characters.",
        },
        {
            name: "JS Minifier",
            path: "/tools/minifiers/js-minifier",
            description: "Compress JavaScript code for optimal performance.",
        },
        {
            name: "JSON Minifier",
            path: "/tools/minifiers/json-minifier",
            description: "Compact JSON data by removing whitespace.",
        },
        {
            name: "SQL Minifier",
            path: "/tools/minifiers/sql-minifier",
            description: "Reduce the size of your SQL queries.",
        },
        {
            name: "XML Minifier",
            path: "/tools/minifiers/xml-minifier",
            description: "Make XML files smaller by removing extra space.",
        },
    ],
    jsonConverters: [
        {
            name: "JSON To XML",
            path: "/tools/json-converters/json-to-xml",
            description: "Convert JSON data structures to XML format.",
        },
        {
            name: "JSON To CSV",
            path: "/tools/json-converters/json-to-csv",
            description: "Transform JSON arrays into CSV files.",
        },
        {
            name: "JSON To Excel",
            path: "/tools/json-converters/json-to-excel",
            description: "Convert JSON to Excel (XLSX) spreadsheets.",
        },
        {
            name: "JSON To YAML",
            path: "/tools/json-converters/json-to-yaml",
            description: "Change JSON data into YAML format.",
        },
        {
            name: "JSON To HTML",
            path: "/tools/json-converters/json-to-html",
            description: "Render JSON data as an HTML table or structure.",
        },
    ],
    xmlConverters: [
        {
            name: "XML To JSON",
            path: "/tools/xml-converters/xml-to-json",
            description: "Convert XML documents to JSON objects.",
        },
        {
            name: "XML To CSV",
            path: "/tools/xml-converters/xml-to-csv",
            description: "Transform XML data into comma-separated values.",
        },
        {
            name: "XML To YAML",
            path: "/tools/xml-converters/xml-to-yaml",
            description: "Change XML structures into YAML format.",
        },
    ],
    colorConverters: [
        {
            name: "RGB to HEX",
            path: "/tools/color-converters/rgb-to-hex",
            description: "Convert RGB color values to HEX codes.",
        },
        {
            name: "HEX to RGB",
            path: "/tools/color-converters/hex-to-rgb",
            description: "Convert HEX color codes to RGB values.",
        },
        {
            name: "CMYK to RGB",
            path: "/tools/color-converters/cmyk-to-rgb",
            description: "Transform CMYK colors to RGB for screen display.",
        },
        {
            name: "Color Picker",
            path: "/tools/color-picker",
            description: "Select and identify colors with an interactive picker.",
        },
    ],
    jsonFormatters: [
        {
            name: "JSON Formatter & Validator",
            path: "/tools/json-formatter",
            description: "Format, validate, and beautify your JSON data.",
        },
    ],
}

const toolsCategoryDetails = {
    imageTools: {
        title: "Image Utilities",
        Icon: ImageIcon,
        iconColor: "text-sky-500",
        description: "Optimize, convert, and compress your images.",
    },
    beautifiers: {
        title: "Code Beautifiers",
        Icon: Wand2,
        iconColor: "text-emerald-500",
        description: "Make your code more readable and consistently formatted.",
    },
    minifiers: {
        title: "Code Minifiers",
        Icon: Minimize2,
        iconColor: "text-amber-500",
        description: "Reduce file sizes for faster web performance.",
    },
    jsonConverters: {
        title: "JSON Converters",
        Icon: FileInput,
        iconColor: "text-purple-500",
        description: "Transform JSON data to and from various formats.",
    },
    xmlConverters: {
        title: "XML Converters",
        Icon: FileOutput,
        iconColor: "text-rose-500",
        description: "Convert XML data to other common formats.",
    },
    colorConverters: {
        title: "Color Tools",
        Icon: Palette,
        iconColor: "text-pink-500",
        description: "Convert colors between formats and pick new shades.",
    },
    jsonFormatters: {
        title: "JSON Tools",
        Icon: FileJson2,
        iconColor: "text-indigo-500",
        description: "Format, validate, and work with JSON data efficiently.",
    },
}

// --- Components ---
const ToolCard = ({ tool, categoryIcon: CategoryIcon, categoryIconColor }) => {
    const SpecificIcon = tool.Icon || CategoryIcon
    const iconColor = tool.Icon ? categoryIconColor || "text-sky-600" : categoryIconColor || "text-sky-600"

    return (
        <Link
            href={tool.path}
            className="group block rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-200/50 transition-all duration-300 ease-in-out hover:shadow-2xl hover:ring-sky-500/50 hover:-translate-y-1"
        >
            <div className="flex items-start gap-4">
                <div
                    className={`flex-shrink-0 rounded-lg p-3 bg-sky-100/70 group-hover:bg-sky-100 transition-colors ${iconColor}`}
                >
                    <SpecificIcon className="h-6 w-6" />
                </div>
                <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-sky-700 transition-colors mb-1">
                        {tool.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{tool.description || `Access the ${tool.name} utility.`}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" />
            </div>
        </Link>
    )
}

const ToolCategorySection = ({ categoryKey, tools }) => {
    const categoryInfo = toolsCategoryDetails[categoryKey]
    if (!categoryInfo) return null

    const { title, Icon: CategoryIcon, iconColor, description } = categoryInfo

    return (
        <section className="mb-16 scroll-mt-20" id={categoryKey}>
            <div className="mb-8 md:flex md:items-end md:justify-between">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-md bg-sky-100 ${iconColor || "text-sky-600"}`}>
                            <CategoryIcon className="h-7 w-7" />
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
                    </div>
                    {description && <p className="mt-2 text-lg text-gray-600 max-w-3xl">{description}</p>}
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {tools.map((tool) => (
                    <ToolCard key={tool.name} tool={tool} categoryIcon={CategoryIcon} categoryIconColor={iconColor} />
                ))}
            </div>
        </section>
    )
}

// --- Main Page Component ---
export default function ToolsListPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-sky-600 to-indigo-700 text-white py-20 sm:py-28 md:py-32">
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
                        Developer <span className="text-sky-300">Toolkit</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg sm:text-xl text-sky-100/90 mb-10 leading-relaxed">
                        Streamline your workflow with CoderCrafter's suite of free online utilities. Convert, format, optimize, and
                        beautify your code and assets with ease.
                    </p>
                    <div className="relative max-w-xl mx-auto">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="search"
                            placeholder="Search tools (e.g., JSON to XML, Image Compressor...)"
                            className="w-full pl-12 pr-4 py-3.5 text-gray-900 bg-white/95 rounded-xl shadow-lg border-transparent focus:ring-2 focus:ring-sky-400 focus:border-transparent placeholder-gray-500 text-base transition"
                            aria-label="Search tools"
                        />
                    </div>
                </div>
            </section>

            {/* Main Content: Tools List */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                <div className="prose prose-lg max-w-none mb-12 text-gray-700">
                    <p>
                        Explore our comprehensive collection of free online tools designed to make your development and design tasks
                        easier and more efficient. From code beautifiers and minifiers to versatile converters for colors, JSON, and
                        XML, we offer a wide range of utilities.
                    </p>
                    <p>
                        Our tools are intuitive, fast, and reliable—perfect for formatting, converting, and optimizing your
                        projects. Browse through the categories below to find the tool you need and enhance your productivity today!
                    </p>
                </div>

                {Object.entries(toolsList).map(([categoryKey, tools]) => (
                    <ToolCategorySection key={categoryKey} categoryKey={categoryKey} tools={tools} />
                ))}

                <div className="mt-20 text-center prose prose-lg max-w-none text-gray-700">
                    <p>
                        If you have any questions or need assistance, feel free to reach out. We are constantly updating and adding
                        new tools to our collection, so make sure to check back often for the latest additions. Happy tooling!
                    </p>
                </div>
            </main>
        </div>
    )
}
