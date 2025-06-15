import CmykToPantone from "@/app/_components/tools/color-tools/cmykToPantone/page";

export const generateMetadata = () => {
    const toolName = "CMYK to Pantone Converter";
    const toolDescription = "Convert CMYK color values to Pantone effortlessly with our free online CMYK to Pantone Converter tool. Perfect for designers and developers working with professional color matching!";
    const toolUrl = "https://www.codercrafter.in/tools/color-converters/cmyk-to-pantone";
    const toolImage = "https://codercrafter.in/assets/images/tools_codercrafter.png";

    return {
        title: `${toolName} | Free Online CMYK to Pantone Color Converter`,
        description: toolDescription,
        openGraph: {
            title: `${toolName} | Free Online CMYK to Pantone Color Converter`,
            description: toolDescription,
            type: "website",
            url: toolUrl,
            siteName: "CoderCrafter",
            images: [toolImage],
        },
        twitter: {
            card: "summary_large_image",
            title: `${toolName} | Free Online CMYK to Pantone Color Converter`,
            description: toolDescription,
            images: [toolImage],
        },
    };
};

const CmykToPantonePage = () => {
    return <div className="container">
        <div className="w-full">
            <h1 style={{ fontWeight: 600 }} className="text-4xl">CMYK to Pantone Converter</h1>
            {/* Replace with your CMYK to Pantone Converter component */}
            <CmykToPantone />
            <div className="mt-10 flex flex-wrap justify-center">
                <div className="md:w-1/2 flex flex-col gap-10">
                    <div className="flex flex-col gap-10">
                        <div>
                            <h2 className="text-4xl">What is a CMYK to Pantone Converter?</h2>
                            <p>
                                A CMYK to Pantone Converter is a tool that transforms CMYK (Cyan, Magenta, Yellow, Key/Black) color values into Pantone Matching System (PMS) colors. This conversion is essential for designers and print professionals who need to ensure color consistency across different media and materials.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-3xl">🚀 Why Convert CMYK to Pantone?</h3>
                            <p>Converting CMYK to Pantone can be beneficial for several reasons:</p>
                            <ul>
                                <li>✅ Brand Consistency: Pantone colors ensure consistent branding across print and digital media.</li>
                                <li>✅ Print Accuracy: Pantone colors are standardized, making them ideal for high-quality printing.</li>
                                <li>✅ Color Matching: Pantone provides precise color matching for logos, packaging, and marketing materials.</li>
                                <li>✅ Global Standards: Pantone is recognized worldwide, ensuring consistency in international projects.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl">Features of Our CMYK to Pantone Converter</h2>
                        <ul>
                            <li>🔹 Instant Conversion – Convert CMYK to Pantone in real-time.</li>
                            <li>🔹 Accurate Color Matching – Ensures precise color representation.</li>
                            <li>🔹 User-Friendly Interface – Simple and intuitive to use.</li>
                            <li>🔹 Free & Secure – No data is stored or shared.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl">How to Use the CMYK to Pantone Converter?</h2>
                        <ol className="list-decimal">
                            <li>Enter your CMYK values (e.g., 20, 40, 60, 80).</li>
                            <li>Click the "Convert to Pantone" button.</li>
                            <li>Copy the Pantone color code or use it directly in your design tools.</li>
                        </ol>
                        💡 Tip: Use the converter to ensure your print colors match Pantone standards.
                    </div>
                    <div>
                        <h2 className="text-3xl">Why Choose Codercrafter’s CMYK to Pantone Converter?</h2>
                        <ul>
                            <li>✨ Lightning Fast: Convert CMYK to Pantone in seconds.</li>
                            <li>🔒 100% Secure: No data is saved or tracked.</li>
                            <li>⚡ Designer-Friendly: Works for both print and digital designers.</li>
                            <li>🌎 Cross-Platform: Use it on desktop & mobile.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl">What Can You Do with Converted Pantone Data?</h2>
                        <ul>
                            <li>✅ Ensure brand consistency across print and digital media.</li>
                            <li>✅ Use Pantone colors for high-quality printing and packaging.</li>
                            <li>✅ Share Pantone codes with printers and designers.</li>
                            <li>✅ Integrate Pantone colors into branding and marketing materials.</li>
                        </ul>
                    </div>
                </div>
                <div className="md:w-1/2 flex flex-col">
                    <h2 className="text-4xl">Related Tools</h2>
                    <div className="p-6 flex flex-wrap gap-4">
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/rgb-to-pantone">RGB to Pantone Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/pantone-to-rgb">Pantone to RGB Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/cmyk-to-rgb">CMYK to RGB Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/pantone-to-cmyk">Pantone to CMYK Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/cmyk-to-pantone">CMYK to Pantone Converter</a>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center gap-1 p-5">
                <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                    <span className="bg-gray-400 text-2xl text-white-800">🔹 Is CMYK to Pantone Conversion Accurate?</span>
                    <span>Yes! The converter ensures precise color matching between CMYK and Pantone formats.</span>
                </div>
                <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                    <span className="bg-gray-400 text-2xl text-white-800">🔹 Can I Convert Pantone Back to CMYK?</span>
                    <span>Yes! You can use a Pantone to CMYK converter to restore the original CMYK values.</span>
                </div>
                <div className="w-2/3 flex flex-col border border-gray-600">
                    <span className="bg-gray-400 text-2xl text-black-900">🔹 Does Conversion Affect Color Integrity?</span>
                    <span>No! The converter ensures that your colors remain accurate and consistent during the transformation process.</span>
                </div>
            </div>
        </div>
    </div>
}

export default CmykToPantonePage;