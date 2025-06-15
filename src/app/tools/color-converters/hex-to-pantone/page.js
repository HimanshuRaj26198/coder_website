import HexToPantone from "@/app/_components/tools/color-tools/hexToPantone/page";

export const generateMetadata = () => {
    const toolName = "HEX to Pantone Converter";
    const toolDescription = "Convert HEX color codes to Pantone effortlessly with our free online HEX to Pantone Converter tool. Perfect for designers and developers working with professional color matching!";
    const toolUrl = "https://www.codercrafter.in/tools/color-converters/hex-to-pantone";
    const toolImage = "https://codercrafter.in/assets/images/tools_codercrafter.png";

    return {
        title: `${toolName} | Free Online HEX to Pantone Color Converter`,
        description: toolDescription,
        openGraph: {
            title: `${toolName} | Free Online HEX to Pantone Color Converter`,
            description: toolDescription,
            type: "website",
            url: toolUrl,
            siteName: "CoderCrafter",
            images: [toolImage],
        },
        twitter: {
            card: "summary_large_image",
            title: `${toolName} | Free Online HEX to Pantone Color Converter`,
            description: toolDescription,
            images: [toolImage],
        },
    };
};

const HexToPantonePage = () => {
    return <div className="container">
        <div className="w-full">
            <h1 style={{ fontWeight: 600 }} className="text-4xl">HEX to Pantone Converter</h1>
            {/* Replace with your HEX to Pantone Converter component */}
            <HexToPantone />
            <div className="mt-10 flex flex-wrap justify-center">
                <div className="md:w-1/2 flex flex-col gap-10">
                    <div className="flex flex-col gap-10">
                        <div>
                            <h2 className="text-4xl">What is a HEX to Pantone Converter?</h2>
                            <p>
                                A HEX to Pantone Converter is a tool that transforms HEX (Hexadecimal) color values into Pantone color codes. Pantone is a standardized color matching system widely used in design, printing, and manufacturing industries. This conversion ensures that digital colors (HEX) can be accurately represented in physical products and print media.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-3xl">🚀 Why Convert HEX to Pantone?</h3>
                            <p>Converting HEX to Pantone can be beneficial for several reasons:</p>
                            <ul>
                                <li>✅ Print Accuracy: Pantone colors are the industry standard for printing, ensuring precise color reproduction.</li>
                                <li>✅ Brand Consistency: Maintains color consistency across digital and physical media.</li>
                                <li>✅ Professional Use: Pantone is widely used in design, fashion, and product manufacturing.</li>
                                <li>✅ Simplification: Converts web-friendly HEX values into standardized Pantone colors.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl">Features of Our HEX to Pantone Converter</h2>
                        <ul>
                            <li>🔹 Instant Conversion – Convert HEX to Pantone in real-time.</li>
                            <li>🔹 Accurate Color Matching – Ensures precise Pantone color representation.</li>
                            <li>🔹 User-Friendly Interface – Simple and intuitive to use.</li>
                            <li>🔹 Free & Secure – No data is stored or shared.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl">How to Use the HEX to Pantone Converter?</h2>
                        <ol className="list-decimal">
                            <li>Enter your HEX code (e.g., #FF5733).</li>
                            <li>Click the "Convert to Pantone" button.</li>
                            <li>Copy the Pantone color code or use it directly in your design tools.</li>
                        </ol>
                        💡 Tip: Use the converter to ensure your digital colors match their physical counterparts.
                    </div>
                    <div>
                        <h2 className="text-3xl">Why Choose Codercrafter’s HEX to Pantone Converter?</h2>
                        <ul>
                            <li>✨ Lightning Fast: Convert HEX to Pantone in seconds.</li>
                            <li>🔒 100% Secure: No data is saved or tracked.</li>
                            <li>⚡ Designer-Friendly: Works for both digital and print designers.</li>
                            <li>🌎 Cross-Platform: Use it on desktop & mobile.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl">What Can You Do with Converted Pantone Data?</h2>
                        <ul>
                            <li>✅ Use Pantone colors for professional printing and manufacturing.</li>
                            <li>✅ Ensure brand consistency across digital and physical media.</li>
                            <li>✅ Share Pantone codes with printers, designers, and manufacturers.</li>
                            <li>✅ Integrate Pantone colors into branding and marketing materials.</li>
                        </ul>
                    </div>
                </div>
                <div className="md:w-1/2 flex flex-col">
                    <h2 className="text-4xl">Related Tools</h2>
                    <div className="p-6 flex flex-wrap gap-4">
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/pantone-to-hex">Pantone to HEX Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/rgb-to-pantone">RGB to Pantone Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/hex-to-rgb">HEX to RGB Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/rgb-to-hex">RGB to HEX Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/hex-to-cmyk">HEX to CMYK Converter</a>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center gap-1 p-5">
                <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                    <span className="bg-gray-400 text-2xl text-white-800">🔹 Is HEX to Pantone Conversion Accurate?</span>
                    <span>Yes! The converter ensures precise color matching between HEX and Pantone formats.</span>
                </div>
                <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                    <span className="bg-gray-400 text-2xl text-white-800">🔹 Can I Convert Pantone Back to HEX?</span>
                    <span>Yes! You can use a Pantone to HEX converter to restore the original HEX values.</span>
                </div>
                <div className="w-2/3 flex flex-col border border-gray-600">
                    <span className="bg-gray-400 text-2xl text-black-900">🔹 Does Conversion Affect Color Integrity?</span>
                    <span>No! The converter ensures that your colors remain accurate and consistent during the transformation process.</span>
                </div>
            </div>
        </div>
    </div>
}

export default HexToPantonePage;