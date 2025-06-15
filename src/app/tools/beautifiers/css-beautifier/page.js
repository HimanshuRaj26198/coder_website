// import CssBeautifier from "@/app/_components/tools/Beautifiers/cssBeautifier/page";

// export const generateMetadata = () => {
//     return {
//         title: "CSS Beautifier - Free Online Tool to Format and Beautify CSS Code | CoderCrafter",
//         description: "Use our free online CSS Beautifier tool to format, prettify, and beautify your CSS code instantly. Make your CSS code more readable and organized with ease. Perfect for developers and designers!",
//         openGraph: {
//             title: "CSS Beautifier - Free Online Tool to Format and Beautify CSS Code | CoderCrafter",
//             description: "Use our free online CSS Beautifier tool to format, prettify, and beautify your CSS code instantly. Make your CSS code more readable and organized with ease. Perfect for developers and designers!",
//             type: "website",
//             url: "https://www.codercrafter.in/tools/beautifiers/css-beautifier",
//             siteName: "CoderCrafter",
//             images: "https://codercrafter.in/assets/images/css_beautifier_tool.png"
//         },
//         twitter: {
//             card: "summary_large_image",
//             title: "CSS Beautifier - Free Online Tool to Format and Beautify CSS Code | CoderCrafter",
//             description: "Use our free online CSS Beautifier tool to format, prettify, and beautify your CSS code instantly. Make your CSS code more readable and organized with ease. Perfect for developers and designers!",
//             images: "https://codercrafter.in/assets/images/css_beautifier_tool.png"
//         }
//     };
// };

// const CssBeautifierPage = () => {
//     // Structured data for SEO
//     const pageSchema = {
//         "@context": "https://schema.org",
//         "@type": "WebApplication",
//         "name": "CSS Beautifier Tool",
//         "url": "https://www.codercrafter.in/tools/beautifiers/css-beautifier",
//         "description": "Free online tool to format and beautify CSS code with syntax highlighting and error detection",
//         "applicationCategory": "DeveloperTool",
//         "operatingSystem": "Web Browser",
//         "offers": {
//             "@type": "Offer",
//             "price": "0",
//             "priceCurrency": "USD"
//         },
//         "creator": {
//             "@type": "Organization",
//             "name": "CoderCrafter",
//             "url": "https://www.codercrafter.in"
//         }
//     };

//     const howToSchema = {
//         "@context": "https://schema.org",
//         "@type": "HowTo",
//         "name": "How to Use the CSS Beautifier Tool",
//         "description": "Step-by-step guide to beautify your CSS code",
//         "step": [
//             {
//                 "@type": "HowToStep",
//                 "text": "Paste your CSS code in the input box",
//                 "name": "Paste CSS"
//             },
//             {
//                 "@type": "HowToStep",
//                 "text": "Click the 'Beautify CSS' button to format your code",
//                 "name": "Beautify"
//             },
//             {
//                 "@type": "HowToStep",
//                 "text": "Copy the formatted CSS or download the beautified file",
//                 "name": "Get Results"
//             }
//         ]
//     };

//     const faqSchema = {
//         "@context": "https://schema.org",
//         "@type": "FAQPage",
//         "mainEntity": [
//             {
//                 "@type": "Question",
//                 "name": "Is CSS Beautification Safe?",
//                 "acceptedAnswer": {
//                     "@type": "Answer",
//                     "text": "Yes! Beautification does not alter the functionality of your CSS. It simply improves readability and organization."
//                 }
//             },
//             {
//                 "@type": "Question",
//                 "name": "Can I Minify Beautified CSS?",
//                 "acceptedAnswer": {
//                     "@type": "Answer",
//                     "text": "Yes! You can use a CSS minifier to compress the beautified CSS for production use."
//                 }
//             },
//             {
//                 "@type": "Question",
//                 "name": "Does Beautification Affect Performance?",
//                 "acceptedAnswer": {
//                     "@type": "Answer",
//                     "text": "No! Beautification is only for readability. It does not impact the performance of your CSS in production."
//                 }
//             }
//         ]
//     };

//     return (
//         <div className="container">
//             {/* Structured Data Scripts */}
//             <script
//                 type="application/ld+json"
//                 dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
//             />
//             <script
//                 type="application/ld+json"
//                 dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
//             />
//             <script
//                 type="application/ld+json"
//                 dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
//             />

//             <div className="w-full">
//                 <div className="text-center mb-12">
//                     <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 mb-4">
//                         CSS Beautifier
//                     </h1>
//                     <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//                         Format and validate your CSS code with beautiful syntax highlighting and error detection.
//                     </p>
//                 </div>

//                 <CssBeautifier />

//                 <div className="mt-10 flex flex-wrap justify-center">
//                     <div className="md:w-1/2 flex flex-col gap-10">
//                         <div className="flex flex-col gap-10">
//                             <div>
//                                 <h2 className="text-4xl">What is a CSS Beautifier?</h2>
//                                 <p>
//                                     A CSS Beautifier is a tool that formats and organizes your CSS code, making it more readable and maintainable. It adds proper indentation, spacing, and line breaks to your CSS, ensuring that your code is clean and easy to understand.
//                                 </p>
//                             </div>
//                             <div>
//                                 <h3 className="text-3xl">🚀 Why Beautify CSS?</h3>
//                                 <p>Beautifying your CSS can significantly improve your workflow and code quality. It helps by:</p>
//                                 <ul>
//                                     <li>✅ Improving Readability: Proper formatting makes your CSS easier to read and debug.</li>
//                                     <li>✅ Enhancing Maintainability: Organized code is simpler to update and maintain.</li>
//                                     <li>✅ Facilitating Collaboration: Clean code is easier for teams to work with.</li>
//                                     <li>✅ Reducing Errors: Well-structured code minimizes the risk of syntax errors.</li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div>
//                             <h2 className="text-3xl">Features of Our CSS Beautifier</h2>
//                             <ul>
//                                 <li>🔹 Instant Formatting – Beautify CSS in real-time.</li>
//                                 <li>🔹 Proper Indentation – Adds consistent spacing and line breaks.</li>
//                                 <li>🔹 Easy to Use – Simple and intuitive interface.</li>
//                                 <li>🔹 Free & Secure – No data is stored or shared.</li>
//                             </ul>
//                         </div>
//                         <div>
//                             <h2 className="text-3xl">How to Use the CSS Beautifier?</h2>
//                             <ol className="list-decimal">
//                                 <li>Paste your CSS code in the input box.</li>
//                                 <li>Click the "Beautify CSS" button.</li>
//                                 <li>Copy the formatted CSS or download the beautified file directly and use it in your project.</li>
//                             </ol>
//                             💡 Tip: Use the beautifier to clean up minified or poorly formatted CSS for better readability.
//                         </div>
//                         <div>
//                             <h2 className="text-3xl">Why Choose Codercrafter's CSS Beautifier?</h2>
//                             <ul>
//                                 <li>✨ Lightning Fast: Beautify CSS in seconds.</li>
//                                 <li>🔒 100% Secure: No code is saved or tracked.</li>
//                                 <li>⚡ Developer-Friendly: Works for small and large CSS files.</li>
//                                 <li>🌎 Cross-Platform: Use it on desktop & mobile.</li>
//                             </ul>
//                         </div>
//                         <div>
//                             <h2 className="text-3xl">What Does CSS Beautification Do?</h2>
//                             <ul>
//                                 <li>✅ Adds Proper Indentation – Ensures consistent spacing and alignment.</li>
//                                 <li>✅ Inserts Line Breaks – Separates CSS rules for better readability.</li>
//                                 <li>✅ Organizes Selectors – Groups related styles together.</li>
//                                 <li>✅ Formats Comments – Preserves and formats CSS comments for clarity.</li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="md:w-1/2 flex flex-col">
//                         <h2 className="text-4xl">Related Tools</h2>
//                         <div className="p-6 flex flex-wrap gap-4">
//                             <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/beautifiers/css-beautifier">CSS Beautifier</a>
//                             <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/beautifiers/js-beautifier">JS Beautifier</a>
//                             <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/beautifiers/html-beautifier">HTML Beautifier</a>
//                             <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/beautifiers/json-beautifier">JSON Beautifier</a>
//                             <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/beautifiers/sql-beautifier">SQL Beautifier</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="w-full flex flex-col items-center gap-1 p-5">
//                     <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
//                         <span className="bg-gray-400 text-2xl text-white-800">🔹 Is CSS Beautification Safe?</span>
//                         <span>Yes! Beautification does not alter the functionality of your CSS. It simply improves readability and organization.</span>
//                     </div>
//                     <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
//                         <span className="bg-gray-400 text-2xl text-white-800">🔹 Can I Minify Beautified CSS?</span>
//                         <span>Yes! You can use a CSS minifier to compress the beautified CSS for production use.</span>
//                     </div>
//                     <div className="w-2/3 flex flex-col border border-gray-600">
//                         <span className="bg-gray-400 text-2xl text-black-900">🔹 Does Beautification Affect Performance?</span>
//                         <span>No! Beautification is only for readability. It does not impact the performance of your CSS in production.</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CssBeautifierPage;


import React from "react"
import CssBeautifier from "@/app/_components/tools/Beautifiers/cssBeautifier/page"
import { Lightbulb, CheckCircle, LinkIcon, HelpCircle, Wand2 } from "lucide-react" // Added icons for visual enhancement

const generateMetadata = () => {
    return {
        title: "CSS Beautifier - Free Online Tool to Format and Beautify CSS Code | CoderCrafter",
        description:
            "Use our free online CSS Beautifier tool to format, prettify, and beautify your CSS code instantly. Make your CSS code more readable and organized with ease. Perfect for developers and designers!",
        openGraph: {
            title: "CSS Beautifier - Free Online Tool to Format and Beautify CSS Code | CoderCrafter",
            description:
                "Use our free online CSS Beautifier tool to format, prettify, and beautify your CSS code instantly. Make your CSS code more readable and organized with ease. Perfect for developers and designers!",
            type: "website",
            url: "https://www.codercrafter.in/tools/beautifiers/css-beautifier",
            siteName: "CoderCrafter",
            images: [
                {
                    url: "https://codercrafter.in/assets/images/css_beautifier_tool.png",
                    width: 1200,
                    height: 630,
                    alt: "CoderCrafter CSS Beautifier Tool",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "CSS Beautifier - Free Online Tool to Format and Beautify CSS Code | CoderCrafter",
            description:
                "Use our free online CSS Beautifier tool to format, prettify, and beautify your CSS code instantly. Make your CSS code more readable and organized with ease. Perfect for developers and designers!",
            images: ["https://codercrafter.in/assets/images/css_beautifier_tool.png"],
        },
    }
}

const CssBeautifierPage = () => {
    // Structured data for SEO
    const pageSchema = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "CSS Beautifier Tool",
        url: "https://www.codercrafter.in/tools/beautifiers/css-beautifier",
        description: "Free online tool to format and beautify CSS code with syntax highlighting and error detection",
        applicationCategory: "DeveloperTool",
        operatingSystem: "Web Browser",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
        },
        creator: {
            "@type": "Organization",
            name: "CoderCrafter",
            url: "https://www.codercrafter.in",
        },
    }

    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "How to Use the CSS Beautifier Tool",
        description: "Step-by-step guide to beautify your CSS code",
        step: [
            { "@type": "HowToStep", text: "Paste your CSS code in the input box", name: "Paste CSS" },
            { "@type": "HowToStep", text: "Click the 'Beautify CSS' button to format your code", name: "Beautify" },
            { "@type": "HowToStep", text: "Copy the formatted CSS or download the beautified file", name: "Get Results" },
        ],
    }

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Is CSS Beautification Safe?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! Beautification does not alter the functionality of your CSS. It simply improves readability and organization.",
                },
            },
            {
                "@type": "Question",
                name: "Can I Minify Beautified CSS?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! You can use a CSS minifier to compress the beautified CSS for production use.",
                },
            },
            {
                "@type": "Question",
                name: "Does Beautification Affect Performance?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "No! Beautification is only for readability. It does not impact the performance of your CSS in production.",
                },
            },
        ],
    }

    const relatedTools = [
        { name: "JS Beautifier", href: "/tools/beautifiers/js-beautifier" },
        { name: "HTML Beautifier", href: "/tools/beautifiers/html-beautifier" },
        { name: "JSON Beautifier", href: "/tools/beautifiers/json-beautifier" },
        { name: "SQL Beautifier", href: "/tools/beautifiers/sql-beautifier" },
        { name: "XML Beautifier", href: "/tools/beautifiers/xml-beautifier" }, // Added for consistency
    ]

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            {/* Structured Data Scripts */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero Section */}
            <section className="py-16 sm:py-20 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">

                    <h1 className="text-4xl sm:text-5xl  font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-sky-500 to-indigo-600 mb-6 tracking-tight">
                        CSS Beautifier
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Effortlessly format, prettify, and validate your CSS code. Enhance readability and organization with our
                        smart beautification tool, complete with syntax highlighting and error detection.
                    </p>
                </div>
            </section>

            {/* Main Content Area */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                {/* CSS Beautifier Component - Centered */}
                <div className="mb-12 sm:mb-16 md:mb-20 max-w-4xl mx-auto">
                    <CssBeautifier />
                </div>

                {/* Informational Content & Related Tools */}
                <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
                    {/* Left Column: Informational Content */}
                    <div className="lg:col-span-2 space-y-10 sm:space-y-12">
                        {[
                            {
                                title: "What is a CSS Beautifier?",
                                text: "A CSS Beautifier is a tool that formats and organizes your CSS code, making it more readable and maintainable. It adds proper indentation, spacing, and line breaks to your CSS, ensuring that your code is clean and easy to understand.",
                            },
                            {
                                title: "🚀 Why Beautify CSS?",
                                list: [
                                    "✅ Improving Readability: Proper formatting makes your CSS easier to read and debug.",
                                    "✅ Enhancing Maintainability: Organized code is simpler to update and maintain.",
                                    "✅ Facilitating Collaboration: Clean code is easier for teams to work with.",
                                    "✅ Reducing Errors: Well-structured code minimizes the risk of syntax errors.",
                                ],
                            },
                            {
                                title: "Features of Our CSS Beautifier",
                                list: [
                                    "🔹 Instant Formatting – Beautify CSS in real-time.",
                                    "🔹 Proper Indentation – Adds consistent spacing and line breaks.",
                                    "🔹 Easy to Use – Simple and intuitive interface.",
                                    "🔹 Free & Secure – No data is stored or shared.",
                                ],
                            },
                            {
                                title: "How to Use the CSS Beautifier?",
                                orderedList: [
                                    "Paste your CSS code in the input box.",
                                    'Click the "Beautify CSS" button.',
                                    "Copy the formatted CSS or download the beautified file directly and use it in your project.",
                                ],
                                tip: "Use the beautifier to clean up minified or poorly formatted CSS for better readability.",
                            },
                            {
                                title: "Why Choose Codercrafter's CSS Beautifier?",
                                list: [
                                    "✨ Lightning Fast: Beautify CSS in seconds.",
                                    "🔒 100% Secure: No code is saved or tracked.",
                                    "⚡ Developer-Friendly: Works for small and large CSS files.",
                                    "🌎 Cross-Platform: Use it on desktop & mobile.",
                                ],
                            },
                            {
                                title: "What Does CSS Beautification Do?",
                                list: [
                                    "✅ Adds Proper Indentation – Ensures consistent spacing and alignment.",
                                    "✅ Inserts Line Breaks – Separates CSS rules for better readability.",
                                    "✅ Organizes Selectors – Groups related styles together.",
                                    "✅ Formats Comments – Preserves and formats CSS comments for clarity.",
                                ],
                            },
                        ].map((section, index) => (
                            <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200/80">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-5">{section.title}</h2>
                                {section.text && <p className="text-gray-700 leading-relaxed">{section.text}</p>}
                                {section.list && (
                                    <ul className="space-y-3 text-gray-700 leading-relaxed">
                                        {section.list.map((item, i) => (
                                            <li key={i} className="flex items-start">
                                                <CheckCircle className="h-5 w-5 text-green-500 mr-2.5 mt-1 flex-shrink-0" />
                                                <span>
                                                    {item.substring(
                                                        item.startsWith("✅") ||
                                                            item.startsWith("🔹") ||
                                                            item.startsWith("✨") ||
                                                            item.startsWith("🔒") ||
                                                            item.startsWith("⚡") ||
                                                            item.startsWith("🌎")
                                                            ? 2
                                                            : 0,
                                                    )}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {section.orderedList && (
                                    <ol className="space-y-3 text-gray-700 leading-relaxed">
                                        {section.orderedList.map((item, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="font-semibold text-sky-600 mr-2.5">{i + 1}.</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ol>
                                )}
                                {section.tip && (
                                    <div className="mt-5 p-4 bg-sky-50 border-l-4 border-sky-500 text-sky-700 rounded-r-md text-sm">
                                        <div className="flex items-start">
                                            <Lightbulb className="h-5 w-5 mr-2.5 mt-0.5 flex-shrink-0" />
                                            <span>
                                                <strong>Tip:</strong> {section.tip}
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Related Tools */}
                    <div className="lg:col-span-1 lg:sticky lg:top-28">
                        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200/80">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                                <LinkIcon className="h-7 w-7 text-sky-600 mr-3" />
                                Related Tools
                            </h2>
                            <div className="space-y-3">
                                {relatedTools.map((tool) => (
                                    <a
                                        key={tool.name}
                                        href={tool.href}
                                        className="flex items-center p-3.5 bg-slate-50 hover:bg-sky-100 border border-slate-200 hover:border-sky-300 rounded-lg transition-all duration-200 ease-in-out group"
                                    >
                                        <span className="font-medium text-gray-700 group-hover:text-sky-700">{tool.name}</span>
                                        <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-sky-600 ml-auto transform transition-transform group-hover:translate-x-1" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <section className="mt-16 sm:mt-20 md:mt-24">
                    <div className="text-center mb-10 sm:mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-5">
                        {faqSchema.mainEntity.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-lg border border-gray-200/80 transition-shadow hover:shadow-xl"
                            >
                                <h3 className="text-lg sm:text-xl font-semibold text-sky-700 mb-2">{faq.name}</h3>
                                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{faq.acceptedAnswer.text}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

// Helper component, if not already available globally
const ChevronRight = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
        />
    </svg>
)

export default CssBeautifierPage
