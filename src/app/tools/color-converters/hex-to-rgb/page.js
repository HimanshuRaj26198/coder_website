import HexToRgb from "@/app/_components/tools/color-tools/HexToRgb/page";
import { Heart } from "react-feather";

export const generateMetadata = () => {
    const toolName = "HEX to RGB Converter";
    const toolDescription = "Convert HEX color codes to RGB effortlessly with our free online HEX to RGB Converter tool. Perfect for designers and developers working with color conversions!";
    const toolUrl = "https://www.codercrafter.in/tools/color-converters/hex-to-rgb";
    const toolImage = "https://codercrafter.in/assets/images/tools_codercrafter.png";

    return {
        title: `${toolName} | Free Online HEX to RGB Color Converter`,
        description: toolDescription,
        openGraph: {
            title: `${toolName} | Free Online HEX to RGB Color Converter`,
            description: toolDescription,
            type: "website",
            url: toolUrl,
            siteName: "CoderCrafter",
            images: [toolImage],
        },
        twitter: {
            card: "summary_large_image",
            title: `${toolName} | Free Online HEX to RGB Color Converter`,
            description: toolDescription,
            images: [toolImage],
        },
    };
};

const HexToRgbPage = () => {
    // Structured Data for SEO
    const pageSchema = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "HEX to RGB Converter",
        "url": "https://www.codercrafter.in/tools/color-converters/hex-to-rgb",
        "description": "Free online tool to convert HEX color codes to RGB values instantly",
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
        },
        "keywords": ["HEX to RGB", "color converter", "web design tools", "HEX color codes", "RGB values"]
    };

    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Convert HEX to RGB",
        "description": "Step-by-step guide to convert HEX color codes to RGB values",
        "step": [
            {
                "@type": "HowToStep",
                "text": "Enter your HEX color code in the input field (e.g., #FF5733)",
                "name": "Enter HEX Code"
            },
            {
                "@type": "HowToStep",
                "text": "The tool automatically converts the HEX value to RGB format",
                "name": "Automatic Conversion"
            },
            {
                "@type": "HowToStep",
                "text": "Copy the resulting RGB values for use in your projects",
                "name": "Copy RGB Values"
            }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is the difference between HEX and RGB color formats?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "HEX is a hexadecimal color representation used primarily in web design (e.g., #FFFFFF), while RGB represents colors through Red, Green, and Blue values (e.g., rgb(255, 255, 255)). Both represent the same colors but in different formats."
                }
            },
            {
                "@type": "Question",
                "name": "Is the HEX to RGB conversion accurate?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our converter uses precise algorithms to ensure 100% accurate conversion between HEX and RGB color formats."
                }
            },
            {
                "@type": "Question",
                "name": "Can I convert RGB back to HEX?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, you can use our RGB to HEX converter tool to perform the reverse conversion."
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
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                            HEX to RGB Converter
                        </h1>
                        <p className="text-gray-600 mt-2">Convert HEX color codes to RGB values instantly</p>
                    </div>
                    <button
                        className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 transition-colors`}
                    >
                        <Heart size={18} fill={'none'} />
                        <span>{'Favorite'}</span>
                    </button>
                </div>

                <HexToRgb />

                <div className="mt-10 flex flex-wrap justify-center">
                    <div className="md:w-1/2 flex flex-col gap-10">
                        <div className="flex flex-col gap-10">
                            <div>
                                <h2 className="text-4xl">What is a HEX to RGB Converter?</h2>
                                <p>
                                    A HEX to RGB Converter is a tool that transforms HEX (Hexadecimal) color values into RGB (Red, Green, Blue) format. RGB is a color model used for digital displays, such as monitors, TVs, and web design. This conversion is essential for developers and designers who need to work with colors in digital formats.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-3xl">🚀 Why Convert HEX to RGB?</h3>
                                <p>Converting HEX to RGB can be beneficial for several reasons:</p>
                                <ul>
                                    <li>✅ Digital Design: RGB is the standard color model for digital displays and web design.</li>
                                    <li>✅ Compatibility: RGB is widely supported in design tools, programming languages, and frameworks.</li>
                                    <li>✅ Flexibility: RGB values allow for precise color adjustments and manipulation.</li>
                                    <li>✅ Simplification: Converts web-friendly HEX values into a more adjustable RGB format.</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl">Features of Our HEX to RGB Converter</h2>
                            <ul>
                                <li>🔹 Instant Conversion – Convert HEX to RGB in real-time.</li>
                                <li>🔹 Accurate Color Matching – Ensures precise RGB color representation.</li>
                                <li>🔹 User-Friendly Interface – Simple and intuitive to use.</li>
                                <li>🔹 Free & Secure – No data is stored or shared.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-3xl">How to Use the HEX to RGB Converter?</h2>
                            <ol className="list-decimal">
                                <li>Enter your HEX code (e.g., #FF5733).</li>
                                <li>Click the "Convert to RGB" button.</li>
                                <li>Copy the RGB values or use them directly in your design tools.</li>
                            </ol>
                            💡 Tip: Use the converter to ensure your colors are accurately represented in digital formats.
                        </div>
                        <div>
                            <h2 className="text-3xl">Why Choose Codercrafter's HEX to RGB Converter?</h2>
                            <ul>
                                <li>✨ Lightning Fast: Convert HEX to RGB in seconds.</li>
                                <li>🔒 100% Secure: No data is saved or tracked.</li>
                                <li>⚡ Developer-Friendly: Works for both web and app developers.</li>
                                <li>🌎 Cross-Platform: Use it on desktop & mobile.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-3xl">What Can You Do with Converted RGB Data?</h2>
                            <ul>
                                <li>✅ Use RGB values for web design, app development, and digital art.</li>
                                <li>✅ Ensure color consistency across digital platforms and devices.</li>
                                <li>✅ Share RGB values with developers and designers.</li>
                                <li>✅ Integrate RGB colors into CSS, JavaScript, and other programming languages.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col">
                        <h2 className="text-4xl">Related Tools</h2>
                        <div className="p-6 flex flex-wrap gap-4">
                            <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/rgb-to-hex">RGB to HEX Converter</a>
                            <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/hex-to-cmyk">HEX to CMYK Converter</a>
                            <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/hex-to-hsv">HEX to HSV Converter</a>
                            <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/rgb-to-cmyk">RGB to CMYK Converter</a>
                            <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/hex-to-pantone">HEX to Pantone Converter</a>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center gap-1 p-5">
                    <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                        <span className="bg-gray-400 text-2xl text-white-800">🔹 Is HEX to RGB Conversion Accurate?</span>
                        <span>Yes! The converter ensures precise color matching between HEX and RGB formats.</span>
                    </div>
                    <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                        <span className="bg-gray-400 text-2xl text-white-800">🔹 Can I Convert RGB Back to HEX?</span>
                        <span>Yes! You can use an RGB to HEX converter to restore the original HEX values.</span>
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

export default HexToRgbPage;