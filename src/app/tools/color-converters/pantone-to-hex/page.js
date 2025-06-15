import PantoneToHex from "@/app/_components/tools/color-tools/PantoneToHex/page";

export const generateMetadata = () => {
    const toolName = "Pantone to HEX Converter";
    const toolDescription = "Convert Pantone color values to HEX codes effortlessly with our free online Pantone to HEX Converter tool. Perfect for designers and developers working with professional color matching!";
    const toolUrl = "https://www.codercrafter.in/tools/color-converters/pantone-to-hex";
    const toolImage = "https://codercrafter.in/assets/images/tools_codercrafter.png";

    return {
        title: `${toolName} | Free Online Pantone to HEX Color Converter`,
        description: toolDescription,
        openGraph: {
            title: `${toolName} | Free Online Pantone to HEX Color Converter`,
            description: toolDescription,
            type: "website",
            url: toolUrl,
            siteName: "CoderCrafter",
            images: [toolImage],
        },
        twitter: {
            card: "summary_large_image",
            title: `${toolName} | Free Online Pantone to HEX Color Converter`,
            description: toolDescription,
            images: [toolImage],
        },
    };
};

const PantoneToHexPage = () => {
    return <div className="container">
        <div className="w-full">
            <h1 style={{ fontWeight: 600 }} className="text-4xl">Pantone to HEX Converter</h1>
            {/* Replace with your Pantone to HEX Converter component */}
            <PantoneToHex />
            <div className="mt-10 flex flex-wrap justify-center">
                <div className="md:w-1/2 flex flex-col gap-10">
                    <div className="flex flex-col gap-10">
                        <div>
                            <h2 className="text-4xl">What is a Pantone to HEX Converter?</h2>
                            <p>
                                A Pantone to HEX Converter is a tool that transforms Pantone Matching System (PMS) colors into HEX (Hexadecimal) format. This conversion is essential for designers and developers who need to switch between Pantone colors and digital (HEX) systems.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-3xl">🚀 Why Convert Pantone to HEX?</h3>
                            <p>Converting Pantone to HEX can be beneficial for several reasons:</p>
                            <ul>
                                <li>✅ Digital Design: HEX is the standard color format for web design, making it essential for digital projects.</li>
                                <li>✅ Consistency: Ensures color consistency across Pantone and digital media.</li>
                                <li>✅ Compatibility: HEX is widely supported in design tools, CSS, and HTML.</li>
                                <li>✅ Simplification: Converts Pantone colors into a web-friendly HEX format.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl">Features of Our Pantone to HEX Converter</h2>
                        <ul>
                            <li>🔹 Instant Conversion – Convert Pantone to HEX in real-time.</li>
                            <li>🔹 Accurate Color Matching – Ensures precise color representation.</li>
                            <li>🔹 User-Friendly Interface – Simple and intuitive to use.</li>
                            <li>🔹 Free & Secure – No data is stored or shared.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl">How to Use the Pantone to HEX Converter?</h2>
                        <ol className="list-decimal">
                            <li>Enter your Pantone color code (e.g., PMS 185).</li>
                            <li>Click the "Convert to HEX" button.</li>
                            <li>Copy the HEX code or use it directly in your design tools.</li>
                        </ol>
                        💡 Tip: Use the converter to ensure your Pantone colors match their digital counterparts.
                    </div>
                    <div>
                        <h2 className="text-3xl">Why Choose Codercrafter’s Pantone to HEX Converter?</h2>
                        <ul>
                            <li>✨ Lightning Fast: Convert Pantone to HEX in seconds.</li>
                            <li>🔒 100% Secure: No data is saved or tracked.</li>
                            <li>⚡ Designer-Friendly: Works for both branding and digital designers.</li>
                            <li>🌎 Cross-Platform: Use it on desktop & mobile.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl">What Can You Do with Converted HEX Data?</h2>
                        <ul>
                            <li>✅ Use HEX codes in web design (CSS, HTML, JavaScript).</li>
                            <li>✅ Ensure color consistency across Pantone and digital media.</li>
                            <li>✅ Share HEX codes with developers or designers.</li>
                            <li>✅ Integrate HEX colors into branding and marketing materials.</li>
                        </ul>
                    </div>
                </div>
                <div className="md:w-1/2 flex flex-col">
                    <h2 className="text-4xl">Related Tools</h2>
                    <div className="p-6 flex flex-wrap gap-4">
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/hex-to-pantone">HEX to Pantone Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/rgb-to-pantone">RGB to Pantone Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/cmyk-to-pantone">CMYK to Pantone Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/pantone-to-rgb">Pantone to RGB Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/pantone-to-hex">Pantone to HEX Converter</a>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center gap-1 p-5">
                <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                    <span className="bg-gray-400 text-2xl text-white-800">🔹 Is Pantone to HEX Conversion Accurate?</span>
                    <span>Yes! The converter ensures precise color matching between Pantone and HEX formats.</span>
                </div>
                <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                    <span className="bg-gray-400 text-2xl text-white-800">🔹 Can I Convert HEX Back to Pantone?</span>
                    <span>Yes! You can use a HEX to Pantone converter to restore the original Pantone values.</span>
                </div>
                <div className="w-2/3 flex flex-col border border-gray-600">
                    <span className="bg-gray-400 text-2xl text-black-900">🔹 Does Conversion Affect Color Integrity?</span>
                    <span>No! The converter ensures that your colors remain accurate and consistent during the transformation process.</span>
                </div>
            </div>
        </div>
    </div>
}

export default PantoneToHexPage;