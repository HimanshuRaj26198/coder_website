import PantoneToRgb from "@/app/_components/tools/color-tools/PantoneToRgb/page";

export const generateMetadata = () => {
    const toolName = "Pantone to RGB Converter";
    const toolDescription = "Convert Pantone color values to RGB effortlessly with our free online Pantone to RGB Converter tool. Perfect for designers and developers working with professional color matching!";
    const toolUrl = "https://www.codercrafter.in/tools/color-converters/pantone-to-rgb";
    const toolImage = "https://codercrafter.in/assets/images/tools_codercrafter.png";

    return {
        title: `${toolName} | Free Online Pantone to RGB Color Converter`,
        description: toolDescription,
        openGraph: {
            title: `${toolName} | Free Online Pantone to RGB Color Converter`,
            description: toolDescription,
            type: "website",
            url: toolUrl,
            siteName: "CoderCrafter",
            images: [toolImage],
        },
        twitter: {
            card: "summary_large_image",
            title: `${toolName} | Free Online Pantone to RGB Color Converter`,
            description: toolDescription,
            images: [toolImage],
        },
    };
};

const PantoneToRgbPage = () => {
    return (
        <div className="container">
            <div className="w-full">
                <h1 style={{ fontWeight: 600 }} className="text-4xl">Pantone to RGB Converter</h1>
                {/* Replace with your Pantone to RGB Converter component */}
                <PantoneToRgb />
                <div className="mt-10 flex flex-wrap justify-center">
                    <div className="md:w-1/2 flex flex-col gap-10">
                        <div className="flex flex-col gap-10">
                            <div>
                                <h2 className="text-4xl">What is a Pantone to RGB Converter?</h2>
                                <p>
                                    A Pantone to RGB Converter is a tool that transforms Pantone Matching System (PMS) colors into RGB (Red, Green, Blue) format. This conversion is essential for designers and developers who need to switch between Pantone colors and digital color systems.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-3xl">🚀 Why Convert Pantone to RGB?</h3>
                                <p>Converting Pantone to RGB can be beneficial for several reasons:</p>
                                <ul>
                                    <li>✅ Digital Design: RGB is the standard color model for digital screens and web design.</li>
                                    <li>✅ Compatibility: RGB is widely supported in design tools and software.</li>
                                    <li>✅ Simplification: Converts Pantone colors into a format suitable for digital use.</li>
                                    <li>✅ Color Consistency: Ensures accurate color representation across digital platforms.</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl">Features of Our Pantone to RGB Converter</h2>
                            <ul>
                                <li>🔹 Instant Conversion – Convert Pantone to RGB in real-time.</li>
                                <li>🔹 Accurate Color Matching – Ensures precise color representation.</li>
                                <li>🔹 User-Friendly Interface – Simple and intuitive to use.</li>
                                <li>🔹 Free & Secure – No data is stored or shared.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-3xl">How to Use the Pantone to RGB Converter?</h2>
                            <ol className="list-decimal">
                                <li>Enter your Pantone color code (e.g., PMS 185).</li>
                                <li>Click the "Convert to RGB" button.</li>
                                <li>Copy the RGB values or use them directly in your design tools.</li>
                            </ol>
                            💡 Tip: Use the converter to ensure accurate color representation in digital projects.
                        </div>
                        <div>
                            <h2 className="text-3xl">Why Choose Codercrafter’s Pantone to RGB Converter?</h2>
                            <ul>
                                <li>✨ Lightning Fast: Convert Pantone to RGB in seconds.</li>
                                <li>🔒 100% Secure: No data is saved or tracked.</li>
                                <li>⚡ Designer-Friendly: Works for both branding and digital designers.</li>
                                <li>🌎 Cross-Platform: Use it on desktop & mobile.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-3xl">What Can You Do with Converted RGB Data?</h2>
                            <ul>
                                <li>✅ Use RGB values for digital design and web development.</li>
                                <li>✅ Ensure color consistency across Pantone and digital projects.</li>
                                <li>✅ Share RGB values with developers or designers.</li>
                                <li>✅ Integrate RGB colors into websites, apps, and digital media.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col">
                        <h2 className="text-4xl">Related Tools</h2>
                        <div className="p-6 flex flex-wrap gap-4">
                            <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/rgb-to-pantone">RGB to Pantone Converter</a>
                            <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/hex-to-pantone">HEX to Pantone Converter</a>
                            <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/pantone-to-hsv">Pantone to HSV Converter</a>
                            <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/pantone-to-rgb">Pantone to RGB Converter</a>
                            <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/hsv-to-pantone">HSV to Pantone Converter</a>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center gap-1 p-5">
                    <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                        <span className="bg-gray-400 text-2xl text-white-800">🔹 Is Pantone to RGB Conversion Accurate?</span>
                        <span>Yes! The converter ensures precise color matching between Pantone and RGB formats.</span>
                    </div>
                    <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                        <span className="bg-gray-400 text-2xl text-white-800">🔹 Can I Convert RGB Back to Pantone?</span>
                        <span>Yes! You can use an RGB to Pantone converter to restore the original Pantone values.</span>
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

export default PantoneToRgbPage;