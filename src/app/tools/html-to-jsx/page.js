import HtmlToJsxConverter from "@/app/_components/HtmlToJsxConverter/page"

export const metadata = {
    title: 'HTML to JSX Converter Online | Free React Code Transformer Tool',
    description: 'Instantly convert HTML to clean, formatted JSX with our free online tool. Perfect for React developers with real-time conversion, syntax highlighting, error detection, and line numbers. Transform HTML snippets to React components effortlessly.',
    keywords: [
        // ... (keep existing keywords array)
    ].join(', '),
    openGraph: {
        // ... (keep existing openGraph object)
    },
    twitter: {
        // ... (keep existing twitter object)
    },
}

export default function HtmlToJsxPage() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "HTML to JSX Converter",
        "url": "https://yourdomain.com/html-to-jsx",
        "description": "Free online tool to convert HTML to React JSX with syntax highlighting and error detection",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Web Browser",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "creator": {
            "@type": "Organization",
            "name": "Your Company Name"
        },
        "keywords": [
            "HTML to JSX converter", "React JSX transformer", "online code conversion tool",
            "HTML to React component", "JSX formatter", "web development utilities"
        ],
        "mainEntity": {
            "@type": "HowTo",
            "name": "How to Convert HTML to JSX",
            "step": [
                {
                    "@type": "HowToStep",
                    "text": "Paste your HTML code into the input editor",
                    "name": "Paste HTML"
                },
                {
                    "@type": "HowToStep",
                    "text": "The tool automatically converts to JSX with proper syntax",
                    "name": "Automatic Conversion"
                },
                {
                    "@type": "HowToStep",
                    "text": "Copy the generated JSX code for your React project",
                    "name": "Copy JSX Output"
                }
            ]
        }
    };

    const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is an HTML to JSX converter?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "An HTML to JSX converter is a tool that transforms standard HTML markup into JSX syntax compatible with React applications. It handles attribute conversion (like class to className), event handlers, and style formatting."
                }
            },
            {
                "@type": "Question",
                "name": "Why convert HTML to JSX?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "JSX is required for React component development. Converting existing HTML to JSX saves development time and ensures proper React syntax. Our tool automates this process with error checking and formatting."
                }
            },
            {
                "@type": "Question",
                "name": "Is this HTML to JSX converter free?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our online HTML to JSX conversion tool is completely free to use with no limitations. You can convert unlimited HTML snippets to React-compatible JSX without registration."
                }
            }
        ]
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Structured Data Scripts */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
            />

            <main className="container mx-auto px-4 py-12">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 mb-4">
                            HTML to JSX Converter
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Convert your HTML code to JSX with line numbers, error detection, and beautiful syntax highlighting.
                        </p>
                    </div>

                    <HtmlToJsxConverter />

                    <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">How to Use Our HTML to JSX Converter</h2>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 bg-blue-500 text-white h-8 w-8 rounded-full flex items-center justify-center">
                                    1
                                </div>
                                <div>
                                    <h3 className="font-medium">Paste your HTML code</h3>
                                    <p className="text-gray-600">Copy your HTML markup from any source and paste it into our converter's input editor. Works with HTML5, XHTML, and template code.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 bg-blue-500 text-white h-8 w-8 rounded-full flex items-center justify-center">
                                    2
                                </div>
                                <div>
                                    <h3 className="font-medium">Automatic JSX conversion</h3>
                                    <p className="text-gray-600">Our tool instantly transforms your HTML into React-compatible JSX, converting class to className, handling events, and formatting styles properly.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 bg-blue-500 text-white h-8 w-8 rounded-full flex items-center justify-center">
                                    3
                                </div>
                                <div>
                                    <h3 className="font-medium">Copy and use in your React project</h3>
                                    <p className="text-gray-600">Get clean, formatted JSX code ready for your React components. The converter handles all JSX syntax rules automatically.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Why Use Our HTML to JSX Converter?</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-lg mb-2">Time-Saving Conversion</h3>
                                <p className="text-gray-600">Convert complex HTML structures to JSX in seconds, eliminating manual conversion errors and saving development time.</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-lg mb-2">Error Detection</h3>
                                <p className="text-gray-600">Our tool identifies problematic HTML patterns that might break your React components and suggests fixes.</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-lg mb-2">Perfect Formatting</h3>
                                <p className="text-gray-600">Get properly indented, clean JSX code that follows React best practices and is ready for production.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Common HTML to JSX Conversions</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-medium text-lg mb-2">Class to className</h3>
                                <p className="text-gray-600">Our converter automatically changes HTML's <code>class</code> attribute to JSX's <code>className</code>, following React's naming conventions.</p>
                            </div>
                            <div>
                                <h3 className="font-medium text-lg mb-2">Inline Styles</h3>
                                <p className="text-gray-600">CSS styles are converted from strings to JavaScript objects with proper camelCase property names.</p>
                            </div>
                            <div>
                                <h3 className="font-medium text-lg mb-2">Event Handlers</h3>
                                <p className="text-gray-600">HTML event attributes like <code>onclick</code> become React-compatible <code>onClick</code> handlers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}