import RgbToCmyk from "@/app/_components/tools/color-tools/RgbToCmyk/page";

export const generateMetadata = () => {
    const toolName = "RGB to CMYK Converter";
    const toolDescription = "Convert RGB color values to CMYK effortlessly with our free online RGB to CMYK Converter tool. Perfect for designers and developers working with color conversions!";
    const toolUrl = "https://www.codercrafter.in/tools/color-converters/rgb-to-cmyk";
    const toolImage = "https://codercrafter.in/assets/images/tools_codercrafter.png";

    return {
        title: `${toolName} | Free Online RGB to CMYK Color Converter`,
        description: toolDescription,
        openGraph: {
            title: `${toolName} | Free Online RGB to CMYK Color Converter`,
            description: toolDescription,
            type: "website",
            url: toolUrl,
            siteName: "CoderCrafter",
            images: [toolImage],
        },
        twitter: {
            card: "summary_large_image",
            title: `${toolName} | Free Online RGB to CMYK Color Converter`,
            description: toolDescription,
            images: [toolImage],
        },
    };
};

const RgbToCmykPage = () => {
    return <div className="container">
        <div className="w-full">
            <h1 style={{ fontWeight: 600 }} className="text-4xl">RGB to CMYK Converter</h1>
            {/* Replace with your RGB to CMYK Converter component */}
            <RgbToCmyk />
            <div className="mt-10 flex flex-wrap justify-center">
                <div className="md:w-1/2 flex flex-col gap-10">
                    <div className="flex flex-col gap-10">
                        <div>
                            <h2 className="text-4xl">What is an RGB to CMYK Converter?</h2>
                            <p>
                                An RGB to CMYK Converter is a tool that transforms RGB (Red, Green, Blue) color values into CMYK (Cyan, Magenta, Yellow, Key/Black) format. This conversion is essential for designers and print professionals who need to switch between digital (RGB) and print-ready (CMYK) color systems.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-3xl">🚀 Why Convert RGB to CMYK?</h3>
                            <p>Converting RGB to CMYK can be beneficial for several reasons:</p>
                            <ul>
                                <li>✅ Print Accuracy: CMYK is the standard color format for printing, ensuring accurate color reproduction.</li>
                                <li>✅ Consistency: Ensures color consistency across digital and print media.</li>
                                <li>✅ Compatibility: CMYK is widely supported in professional printing and design tools.</li>
                                <li>✅ Simplification: Converts screen-friendly RGB values into print-ready CMYK values.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl">Features of Our RGB to CMYK Converter</h2>
                        <ul>
                            <li>🔹 Instant Conversion – Convert RGB to CMYK in real-time.</li>
                            <li>🔹 Accurate Color Matching – Ensures precise color representation.</li>
                            <li>🔹 User-Friendly Interface – Simple and intuitive to use.</li>
                            <li>🔹 Free & Secure – No data is stored or shared.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl">How to Use the RGB to CMYK Converter?</h2>
                        <ol className="list-decimal">
                            <li>Enter your RGB values (e.g., R: 255, G: 0, B: 0).</li>
                            <li>Click the "Convert to CMYK" button.</li>
                            <li>Copy the CMYK values or use them directly in your design tools.</li>
                        </ol>
                        💡 Tip: Use the converter to ensure your digital colors match their print counterparts.
                    </div>
                    <div>
                        <h2 className="text-3xl">Why Choose Codercrafter’s RGB to CMYK Converter?</h2>
                        <ul>
                            <li>✨ Lightning Fast: Convert RGB to CMYK in seconds.</li>
                            <li>🔒 100% Secure: No data is saved or tracked.</li>
                            <li>⚡ Designer-Friendly: Works for both digital and print designers.</li>
                            <li>🌎 Cross-Platform: Use it on desktop & mobile.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl">What Can You Do with Converted CMYK Data?</h2>
                        <ul>
                            <li>✅ Use CMYK values for professional printing and packaging.</li>
                            <li>✅ Ensure color consistency across digital and print media.</li>
                            <li>✅ Share CMYK values with printers and designers.</li>
                            <li>✅ Integrate CMYK colors into branding and marketing materials.</li>
                        </ul>
                    </div>
                </div>
                <div className="md:w-1/2 flex flex-col">
                    <h2 className="text-4xl">Related Tools</h2>
                    <div className="p-6 flex flex-wrap gap-4">
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/cmyk-to-rgb">CMYK to RGB Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/rgb-to-hex">RGB to HEX Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/hex-to-rgb">HEX to RGB Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/rgb-to-hsv">RGB to HSV Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/rgb-to-cmyk">RGB to CMYK Converter</a>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center gap-1 p-5">
                <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                    <span className="bg-gray-400 text-2xl text-white-800">🔹 Is RGB to CMYK Conversion Accurate?</span>
                    <span>Yes! The converter ensures precise color matching between RGB and CMYK formats.</span>
                </div>
                <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                    <span className="bg-gray-400 text-2xl text-white-800">🔹 Can I Convert CMYK Back to RGB?</span>
                    <span>Yes! You can use a CMYK to RGB converter to restore the original RGB values.</span>
                </div>
                <div className="w-2/3 flex flex-col border border-gray-600">
                    <span className="bg-gray-400 text-2xl text-black-900">🔹 Does Conversion Affect Color Integrity?</span>
                    <span>No! The converter ensures that your colors remain accurate and consistent during the transformation process.</span>
                </div>
            </div>
        </div>
    </div>
}

export default RgbToCmykPage;