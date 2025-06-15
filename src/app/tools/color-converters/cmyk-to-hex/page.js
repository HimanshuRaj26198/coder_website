import CmykToHex from "@/app/_components/tools/color-tools/cmykToHex/page";

export const generateMetadata = () => {
    const toolName = "CMYK to HEX Converter";
    const toolDescription = "Convert CMYK color values to HEX codes effortlessly with our free online CMYK to HEX Converter tool. Perfect for designers and developers working with color codes!";
    const toolUrl = "https://www.codercrafter.in/tools/color-converters/cmyk-to-hex";
    const toolImage = "https://codercrafter.in/assets/images/tools_codercrafter.png";

    return {
        title: `${toolName} | Free Online CMYK to HEX Color Converter`,
        description: toolDescription,
        openGraph: {
            title: `${toolName} | Free Online CMYK to HEX Color Converter`,
            description: toolDescription,
            type: "website",
            url: toolUrl,
            siteName: "CoderCrafter",
            images: [toolImage],
        },
        twitter: {
            card: "summary_large_image",
            title: `${toolName} | Free Online CMYK to HEX Color Converter`,
            description: toolDescription,
            images: [toolImage],
        },
    };
};

const CmykToHexPage = () => {
    // Structured Data for SEO
    const pageSchema = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "CMYK to HEX Converter",
        "url": "https://www.codercrafter.in/tools/color-converters/cmyk-to-hex",
        "description": "Free online tool to convert CMYK color values to HEX codes instantly",
        "applicationCategory": "DesignApplication",
        "operatingSystem": "Web Browser",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "creator": {
            "@type": "Organization",
            "name": "CoderCrafter",
            "url": "https://www.codercrafter.in"
        }
    };

    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Convert CMYK to HEX",
        "description": "Step-by-step guide to convert CMYK color values to HEX codes",
        "step": [
            {
                "@type": "HowToStep",
                "text": "Enter your CMYK values (Cyan, Magenta, Yellow, Key/Black) in the input fields",
                "name": "Enter CMYK Values"
            },
            {
                "@type": "HowToStep",
                "text": "The tool automatically converts the values to HEX format in real-time",
                "name": "Automatic Conversion"
            },
            {
                "@type": "HowToStep",
                "text": "Copy the resulting HEX code for use in your digital projects",
                "name": "Copy HEX Code"
            }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Is CMYK to HEX conversion accurate?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our converter uses precise color transformation algorithms to ensure accurate conversion between CMYK and HEX color formats."
                }
            },
            {
                "@type": "Question",
                "name": "Can I convert HEX back to CMYK?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, you can use our HEX to CMYK converter tool to reverse the conversion process."
                }
            },
            {
                "@type": "Question",
                "name": "Is this tool free to use?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely! Our CMYK to HEX converter is completely free with no limitations or hidden costs."
                }
            }
        ]
    };

    return (
        <div className="container">
            {/* Structured Data Scripts */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="w-full">
                <h1 style={{ fontWeight: 600 }} className="text-4xl">CMYK to HEX Converter</h1>

                {/* CMYK to HEX Converter Component */}
                <CmykToHex />

                <div className="mt-10 flex flex-wrap justify-center">
                    <div className="md:w-1/2 flex flex-col gap-10">
                        <div className="flex flex-col gap-10">
                            <div>
                                <h2 className="text-4xl">What is a CMYK to HEX Converter?</h2>
                                <p>
                                    A CMYK to HEX Converter is a tool that transforms CMYK (Cyan, Magenta, Yellow, Key/Black) color values into HEX (Hexadecimal) format. This conversion is useful for designers and developers who need to switch between print (CMYK) and digital (HEX) color systems.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-3xl">🚀 Why Convert CMYK to HEX?</h3>
                                <p>Converting CMYK to HEX can be beneficial for several reasons:</p>
                                <ul>
                                    <li>✅ Digital Design: HEX is the standard color format for web design, making it essential for digital projects.</li>
                                    <li>✅ Consistency: Ensures color consistency across print and digital media.</li>
                                    <li>✅ Compatibility: HEX is widely supported in design tools, CSS, and HTML.</li>
                                    <li>✅ Simplification: Converts complex CMYK values into a simple, web-friendly format.</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl">Features of Our CMYK to HEX Converter</h2>
                            <ul>
                                <li>🔹 Instant Conversion – Convert CMYK to HEX in real-time.</li>
                                <li>🔹 Accurate Color Matching – Ensures precise color representation.</li>
                                <li>🔹 User-Friendly Interface – Simple and intuitive to use.</li>
                                <li>🔹 Free & Secure – No data is stored or shared.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-3xl">How to Use the CMYK to HEX Converter?</h2>
                            <ol className="list-decimal">
                                <li>Enter your CMYK values (e.g., 20, 40, 60, 80).</li>
                                <li>Click the "Convert to HEX" button.</li>
                                <li>Copy the HEX code or use it directly in your design tools.</li>
                            </ol>
                            💡 Tip: Use the converter to ensure your print colors match their digital counterparts.
                        </div>
                        <div>
                            <h2 className="text-3xl">Why Choose Codercrafter's CMYK to HEX Converter?</h2>
                            <ul>
                                <li>✨ Lightning Fast: Convert CMYK to HEX in seconds.</li>
                                <li>🔒 100% Secure: No data is saved or tracked.</li>
                                <li>⚡ Designer-Friendly: Works for both print and digital designers.</li>
                                <li>🌎 Cross-Platform: Use it on desktop & mobile.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-3xl">What Can You Do with Converted HEX Data?</h2>
                            <ul>
                                <li>✅ Use HEX codes in web design (CSS, HTML, JavaScript).</li>
                                <li>✅ Ensure color consistency across print and digital media.</li>
                                <li>✅ Share HEX codes with developers or designers.</li>
                                <li>✅ Integrate HEX colors into design tools like Figma, Adobe XD, or Sketch.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col">
                        <h2 className="text-4xl">Related Tools</h2>
                        <div className="p-6 flex flex-wrap gap-4">
                            <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/rgb-to-hex">RGB to HEX Converter</a>
                            <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/hex-to-rgb">HEX to RGB Converter</a>
                            <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/cmyk-to-rgb">CMYK to RGB Converter</a>
                            <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/hex-to-cmyk">HEX to CMYK Converter</a>
                            <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/cmyk-to-hex">CMYK to HEX Converter</a>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center gap-1 p-5">
                    <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                        <span className="bg-gray-400 text-2xl text-white-800">🔹 Is CMYK to HEX Conversion Accurate?</span>
                        <span>Yes! The converter ensures precise color matching between CMYK and HEX formats.</span>
                    </div>
                    <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                        <span className="bg-gray-400 text-2xl text-white-800">🔹 Can I Convert HEX Back to CMYK?</span>
                        <span>Yes! You can use a HEX to CMYK converter to restore the original CMYK values.</span>
                    </div>
                    <div className="w-2/3 flex flex-col border border-gray-600">
                        <span className="bg-gray-400 text-2xl text-black-900">🔹 Does Conversion Affect Color Integrity?</span>
                        <span>No! The converter ensures that your colors remain accurate and consistent during the transformation process.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CmykToHexPage;