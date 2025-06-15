import RgbToHsv from "@/app/_components/tools/color-tools/RgbToHsv/page";

export const generateMetadata = () => {
    return {
        title: "RGB to HEX Converter | Free Online Color Converter",
        description: "Easily convert RGB colors to HEX format with our free online RGB to HEX Converter. Simple, fast, and accurate color conversion for designers and developers.",
        openGraph: {
            title: "RGB to HEX Converter | Free Online Color Converter",
            description: "Easily convert RGB colors to HEX format with our free online RGB to HEX Converter. Simple, fast, and accurate color conversion for designers and developers.",
            type: "website",
            url: "https://www.codercrafter.in/tools/color-converters/rgb-to-hex",
            siteName: "CoderCrafter Tools",
            images: ["https://codercrafter.in/assets/images/tools_codercrafter.png"],
        },
        twitter: {
            card: "summary_large_image",
            title: "RGB to HEX Converter | Free Online Color Converter",
            description: "Convert RGB colors to HEX format quickly and accurately using our free online tool. Ideal for designers and developers.",
            images: ["https://codercrafter.in/assets/images/tools_codercrafter.png"],
        }
    };
};


const RgbToHsvPage = () => {
    return <div className="container">
        <div className="w-full">
            <h1 style={{ fontWeight: 600 }} className="text-4xl">RGB to HSV Converter</h1>
            {/* Replace with your RGB to HSV Converter component */}
            <RgbToHsv />
            <div className="mt-10 flex flex-wrap justify-center">
                <div className="md:w-1/2 flex flex-col gap-10">
                    <div className="flex flex-col gap-10">
                        <div>
                            <h2 className="text-4xl">What is an RGB to HSV Converter?</h2>
                            <p>
                                An RGB to HSV Converter is a tool that transforms RGB (Red, Green, Blue) color values into HSV (Hue, Saturation, Value) format. This conversion is essential for designers and developers who need to switch between digital (RGB) and color manipulation (HSV) systems.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-3xl">🚀 Why Convert RGB to HSV?</h3>
                            <p>Converting RGB to HSV can be beneficial for several reasons:</p>
                            <ul>
                                <li>✅ Color Manipulation: HSV simplifies color adjustments like changing brightness or saturation.</li>
                                <li>✅ Intuitive Representation: HSV is more intuitive for humans to understand and work with compared to RGB.</li>
                                <li>✅ Compatibility: HSV is widely supported in design tools and graphics software.</li>
                                <li>✅ Simplification: Converts screen-friendly RGB values into a flexible HSV format.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl">Features of Our RGB to HSV Converter</h2>
                        <ul>
                            <li>🔹 Instant Conversion – Convert RGB to HSV in real-time.</li>
                            <li>🔹 Accurate Color Matching – Ensures precise color representation.</li>
                            <li>🔹 User-Friendly Interface – Simple and intuitive to use.</li>
                            <li>🔹 Free & Secure – No data is stored or shared.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl">How to Use the RGB to HSV Converter?</h2>
                        <ol className="list-decimal">
                            <li>Enter your RGB values (e.g., R: 255, G: 0, B: 0).</li>
                            <li>Click the "Convert to HSV" button.</li>
                            <li>Copy the HSV values or use them directly in your design tools.</li>
                        </ol>
                        💡 Tip: Use the converter to adjust colors more intuitively in your projects.
                    </div>
                    <div>
                        <h2 className="text-3xl">Why Choose Codercrafter’s RGB to HSV Converter?</h2>
                        <ul>
                            <li>✨ Lightning Fast: Convert RGB to HSV in seconds.</li>
                            <li>🔒 100% Secure: No data is saved or tracked.</li>
                            <li>⚡ Designer-Friendly: Works for both digital and creative designers.</li>
                            <li>🌎 Cross-Platform: Use it on desktop & mobile.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl">What Can You Do with Converted HSV Data?</h2>
                        <ul>
                            <li>✅ Use HSV values for intuitive color adjustments in design tools.</li>
                            <li>✅ Ensure color consistency across digital and creative projects.</li>
                            <li>✅ Share HSV values with developers or designers.</li>
                            <li>✅ Integrate HSV colors into creative projects and visualizations.</li>
                        </ul>
                    </div>
                </div>
                <div className="md:w-1/2 flex flex-col">
                    <h2 className="text-4xl">Related Tools</h2>
                    <div className="p-6 flex flex-wrap gap-4">
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/hsv-to-rgb">HSV to RGB Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/rgb-to-hex">RGB to HEX Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/hex-to-rgb">HEX to RGB Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/rgb-to-cmyk">RGB to CMYK Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/rgb-to-hsv">RGB to HSV Converter</a>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center gap-1 p-5">
                <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                    <span className="bg-gray-400 text-2xl text-white-800">🔹 Is RGB to HSV Conversion Accurate?</span>
                    <span>Yes! The converter ensures precise color matching between RGB and HSV formats.</span>
                </div>
                <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                    <span className="bg-gray-400 text-2xl text-white-800">🔹 Can I Convert HSV Back to RGB?</span>
                    <span>Yes! You can use an HSV to RGB converter to restore the original RGB values.</span>
                </div>
                <div className="w-2/3 flex flex-col border border-gray-600">
                    <span className="bg-gray-400 text-2xl text-black-900">🔹 Does Conversion Affect Color Integrity?</span>
                    <span>No! The converter ensures that your colors remain accurate and consistent during the transformation process.</span>
                </div>
            </div>
        </div>
    </div>
}

export default RgbToHsvPage;