import RgbToHex from "@/app/_components/tools/color-tools/RgbToHex/page";

export const generateMetadata = () => {
    const toolName = "RGB to HEX Converter";
    const toolDescription = "Convert RGB color values to HEX codes effortlessly with our free online RGB to HEX Converter tool. Perfect for designers and developers working with color conversions!";
    const toolUrl = "https://www.codercrafter.in/tools/color-converters/rgb-to-hex";
    const toolImage = "https://codercrafter.in/assets/images/tools_codercrafter.png";

    return {
        title: `${toolName} | Free Online RGB to HEX Color Converter`,
        description: toolDescription,
        openGraph: {
            title: `${toolName} | Free Online RGB to HEX Color Converter`,
            description: toolDescription,
            type: "website",
            url: toolUrl,
            siteName: "CoderCrafter",
            images: [toolImage],
        },
        twitter: {
            card: "summary_large_image",
            title: `${toolName} | Free Online RGB to HEX Color Converter`,
            description: toolDescription,
            images: [toolImage],
        },
    };
};

const RgbToHexPage = () => {
    return <div className="container">
        <div className="w-full">
            <h1 style={{ fontWeight: 600 }} className="text-4xl">RGB to HEX Converter</h1>
            {/* Replace with your RGB to HEX Converter component */}
            <RgbToHex />
            <div className="mt-10 flex flex-wrap justify-center">
                <div className="md:w-1/2 flex flex-col gap-10">
                    <div className="flex flex-col gap-10">
                        <div>
                            <h2 className="text-4xl">What is an RGB to HEX Converter?</h2>
                            <p>
                                An RGB to HEX Converter is a tool that transforms RGB (Red, Green, Blue) color values into HEX (Hexadecimal) format. This conversion is essential for designers and developers who need to switch between digital (RGB) and web-friendly (HEX) color systems.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-3xl">🚀 Why Convert RGB to HEX?</h3>
                            <p>Converting RGB to HEX can be beneficial for several reasons:</p>
                            <ul>
                                <li>✅ Web Design: HEX is the standard color format for web design, making it essential for digital projects.</li>
                                <li>✅ Consistency: Ensures color consistency across digital media.</li>
                                <li>✅ Compatibility: HEX is widely supported in design tools, CSS, and HTML.</li>
                                <li>✅ Simplification: Converts screen-friendly RGB values into a web-friendly HEX format.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl">Features of Our RGB to HEX Converter</h2>
                        <ul>
                            <li>🔹 Instant Conversion – Convert RGB to HEX in real-time.</li>
                            <li>🔹 Accurate Color Matching – Ensures precise color representation.</li>
                            <li>🔹 User-Friendly Interface – Simple and intuitive to use.</li>
                            <li>🔹 Free & Secure – No data is stored or shared.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl">How to Use the RGB to HEX Converter?</h2>
                        <ol className="list-decimal">
                            <li>Enter your RGB values (e.g., R: 255, G: 0, B: 0).</li>
                            <li>Click the "Convert to HEX" button.</li>
                            <li>Copy the HEX code or use it directly in your design tools.</li>
                        </ol>
                        💡 Tip: Use the converter to ensure your digital colors match their web counterparts.
                    </div>
                    <div>
                        <h2 className="text-3xl">Why Choose Codercrafter’s RGB to HEX Converter?</h2>
                        <ul>
                            <li>✨ Lightning Fast: Convert RGB to HEX in seconds.</li>
                            <li>🔒 100% Secure: No data is saved or tracked.</li>
                            <li>⚡ Designer-Friendly: Works for both digital and web designers.</li>
                            <li>🌎 Cross-Platform: Use it on desktop & mobile.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl">What Can You Do with Converted HEX Data?</h2>
                        <ul>
                            <li>✅ Use HEX codes in web design (CSS, HTML, JavaScript).</li>
                            <li>✅ Ensure color consistency across digital media.</li>
                            <li>✅ Share HEX codes with developers or designers.</li>
                            <li>✅ Integrate HEX colors into branding and marketing materials.</li>
                        </ul>
                    </div>
                </div>
                <div className="md:w-1/2 flex flex-col">
                    <h2 className="text-4xl">Related Tools</h2>
                    <div className="p-6 flex flex-wrap gap-4">
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/hex-to-rgb">HEX to RGB Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/rgb-to-cmyk">RGB to CMYK Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/cmyk-to-rgb">CMYK to RGB Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/rgb-to-hsv">RGB to HSV Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/rgb-to-hex">RGB to HEX Converter</a>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center gap-1 p-5">
                <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                    <span className="bg-gray-400 text-2xl text-white-800">🔹 Is RGB to HEX Conversion Accurate?</span>
                    <span>Yes! The converter ensures precise color matching between RGB and HEX formats.</span>
                </div>
                <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                    <span className="bg-gray-400 text-2xl text-white-800">🔹 Can I Convert HEX Back to RGB?</span>
                    <span>Yes! You can use a HEX to RGB converter to restore the original RGB values.</span>
                </div>
                <div className="w-2/3 flex flex-col border border-gray-600">
                    <span className="bg-gray-400 text-2xl text-black-900">🔹 Does Conversion Affect Color Integrity?</span>
                    <span>No! The converter ensures that your colors remain accurate and consistent during the transformation process.</span>
                </div>
            </div>
        </div>
    </div>
}

export default RgbToHexPage;