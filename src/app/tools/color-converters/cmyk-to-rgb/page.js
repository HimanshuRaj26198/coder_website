import CmykToRgb from "@/app/_components/tools/color-tools/cmykToRgb/page";

export const generateMetadata = () => {
    const toolName = "CMYK to RGB Converter";
    const toolDescription = "Convert CMYK color values to RGB effortlessly with our free online CMYK to RGB Converter tool. Perfect for designers and developers working with color conversions!";
    const toolUrl = "https://www.codercrafter.in/tools/color-converters/cmyk-to-rgb";
    const toolImage = "https://codercrafter.in/assets/images/tools_codercrafter.png";

    return {
        title: `${toolName} | Free Online CMYK to RGB Color Converter`,
        description: toolDescription,
        openGraph: {
            title: `${toolName} | Free Online CMYK to RGB Color Converter`,
            description: toolDescription,
            type: "website",
            url: toolUrl,
            siteName: "CoderCrafter",
            images: [toolImage],
        },
        twitter: {
            card: "summary_large_image",
            title: `${toolName} | Free Online CMYK to RGB Color Converter`,
            description: toolDescription,
            images: [toolImage],
        },
    };
};

const CmykToRgbPage = () => {
    return <>
        <div className="container">
            <div className="w-full">
                <h1 style={{ fontWeight: 600 }} className="text-4xl">CMYK to RGB Converter</h1>
                {/* Replace with your CMYK to RGB Converter component */}
                <CmykToRgb />
                <div className="mt-10 flex flex-wrap justify-center">
                    <div className="md:w-1/2 flex flex-col gap-10">
                        <div className="flex flex-col gap-10">
                            <div>
                                <h2 className="text-4xl">What is a CMYK to RGB Converter?</h2>
                                <p>
                                    A CMYK to RGB Converter is a tool that transforms CMYK (Cyan, Magenta, Yellow, Key/Black) color values into RGB (Red, Green, Blue) format. This conversion is essential for designers and developers who need to switch between print (CMYK) and digital (RGB) color systems.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-3xl">🚀 Why Convert CMYK to RGB?</h3>
                                <p>Converting CMYK to RGB can be beneficial for several reasons:</p>
                                <ul>
                                    <li>✅ Digital Design: RGB is the standard color format for screens, making it essential for web and digital projects.</li>
                                    <li>✅ Consistency: Ensures color consistency across print and digital media.</li>
                                    <li>✅ Compatibility: RGB is widely supported in design tools, CSS, and HTML.</li>
                                    <li>✅ Simplification: Converts complex CMYK values into a simple, screen-friendly format.</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl">Features of Our CMYK to RGB Converter</h2>
                            <ul>
                                <li>🔹 Instant Conversion – Convert CMYK to RGB in real-time.</li>
                                <li>🔹 Accurate Color Matching – Ensures precise color representation.</li>
                                <li>🔹 User-Friendly Interface – Simple and intuitive to use.</li>
                                <li>🔹 Free & Secure – No data is stored or shared.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-3xl">How to Use the CMYK to RGB Converter?</h2>
                            <ol className="list-decimal">
                                <li>Enter your CMYK values (e.g., 20, 40, 60, 80).</li>
                                <li>Click the "Convert to RGB" button.</li>
                                <li>Copy the RGB values or use them directly in your design tools.</li>
                            </ol>
                            💡 Tip: Use the converter to ensure your print colors match their digital counterparts.
                        </div>
                        <div>
                            <h2 className="text-3xl">Why Choose Codercrafter’s CMYK to RGB Converter?</h2>
                            <ul>
                                <li>✨ Lightning Fast: Convert CMYK to RGB in seconds.</li>
                                <li>🔒 100% Secure: No data is saved or tracked.</li>
                                <li>⚡ Designer-Friendly: Works for both print and digital designers.</li>
                                <li>🌎 Cross-Platform: Use it on desktop & mobile.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-3xl">What Can You Do with Converted RGB Data?</h2>
                            <ul>
                                <li>✅ Use RGB values in web design (CSS, HTML, JavaScript).</li>
                                <li>✅ Ensure color consistency across print and digital media.</li>
                                <li>✅ Share RGB values with developers or designers.</li>
                                <li>✅ Integrate RGB colors into design tools like Figma, Adobe XD, or Sketch.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col">
                        <h2 className="text-4xl">Related Tools</h2>
                        <div className="p-6 flex flex-wrap gap-4">
                            <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/rgb-to-cmyk">RGB to CMYK Converter</a>
                            <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/cmyk-to-hex">CMYK to HEX Converter</a>
                            <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/hex-to-cmyk">HEX to CMYK Converter</a>
                            <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/rgb-to-hex">RGB to HEX Converter</a>
                            <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/cmyk-to-rgb">CMYK to RGB Converter</a>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center gap-1 p-5">
                    <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                        <span className="bg-gray-400 text-2xl text-white-800">🔹 Is CMYK to RGB Conversion Accurate?</span>
                        <span>Yes! The converter ensures precise color matching between CMYK and RGB formats.</span>
                    </div>
                    <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                        <span className="bg-gray-400 text-2xl text-white-800">🔹 Can I Convert RGB Back to CMYK?</span>
                        <span>Yes! You can use an RGB to CMYK converter to restore the original CMYK values.</span>
                    </div>
                    <div className="w-2/3 flex flex-col border border-gray-600">
                        <span className="bg-gray-400 text-2xl text-black-900">🔹 Does Conversion Affect Color Integrity?</span>
                        <span>No! The converter ensures that your colors remain accurate and consistent during the transformation process.</span>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default CmykToRgbPage;