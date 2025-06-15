
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
//     JSONConverters: [
//         { name: "Json To XML", path: "/tools/json-converters/json-to-xml" },
//         { name: "Json To CSV", path: "/tools/json-converters/json-to-csv" },
//         { name: "Json To Excel", path: "/tools/json-converters/json-to-excel" },
//         { name: "Json To YAML", path: "/tools/json-converters/json-to-yaml" },
//         { name: "Json To HTML", path: "/tools/json-converters/json-to-html" },
//         { name: "Json To Text", path: "/tools/json-converters/json-to-text" },
//         { name: "Json To TSV", path: "/tools/json-converters/json-to-tsv" }
//     ],
//     minifiers: [
//         { name: "CSS Minifier", path: "/tools/minifiers/css-minifier" },
//         { name: "HTML Minifier", path: "/tools/minifiers/html-minifier" },
//         { name: "JS Minifier", path: "/tools/minifiers/js-minifier" },
//         { name: "JSON Minifier", path: "/tools/minifiers/json-minifier" },
//         { name: "SQL Minifier", path: "/tools/minifiers/sql-minifier" },
//         { name: "XML Minifier", path: "/tools/minifiers/xml-minifier" }
//     ],
//     JsonFormatters: [
//         { name: "Json Formatter", path: "/tools/json-formatter" }
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
//     ]
// };

// const ToolFooter = () => {
//     return (
//         <footer className="bg-white-800 text-white p-10">
//             <div className="container mx-auto">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {Object.entries(toolsList).map(([category, tools]) => (
//                         <div key={category}>
//                             <h3 className="text-lg font-semibold mb-4 capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
//                             <ul className="space-y-2">
//                                 {tools.map((tool) => (
//                                     <li key={tool.name}>
//                                         <a href={tool.path} className="text-gray-600 font-[600] !hover:text-yellow transition duration-300">
//                                             {tool.name}
//                                         </a>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default ToolFooter;