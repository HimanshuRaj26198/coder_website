import CmykToHsv from "@/app/_components/tools/color-tools/cmykToHsv/page";

export const generateMetadata = () => {
    const toolName = "CMYK to HSV Converter";
    const toolDescription = "Convert CMYK color values to HSV effortlessly with our free online CMYK to HSV Converter tool. Perfect for designers and developers working with color codes!";
    const toolUrl = "https://www.codercrafter.in/tools/color-converters/cmyk-to-hsv";
    const toolImage = "https://codercrafter.in/assets/images/tools_codercrafter.png";

    return {
        title: `${toolName} | Free Online CMYK to HSV Color Converter`,
        description: toolDescription,
        openGraph: {
            title: `${toolName} | Free Online CMYK to HSV Color Converter`,
            description: toolDescription,
            type: "website",
            url: toolUrl,
            siteName: "CoderCrafter",
            images: [toolImage],
        },
        twitter: {
            card: "summary_large_image",
            title: `${toolName} | Free Online CMYK to HSV Color Converter`,
            description: toolDescription,
            images: [toolImage],
        },
    };
};

const CmykToHsvPage = () => {
    return <div className="container">
        <div className="w-full">
            <h1 style={{ fontWeight: 600 }} className="text-4xl">CMYK to HSV Converter</h1>
            {/* Replace with your CMYK to HSV Converter component */}
            <CmykToHsv />
            <div className="mt-10 flex flex-wrap justify-center">
                <div className="md:w-1/2 flex flex-col gap-10">
                    <div className="flex flex-col gap-10">
                        <div>
                            <h2 className="text-4xl">What is a CMYK to HSV Converter?</h2>
                            <p>
                                A CMYK to HSV Converter is a tool that transforms CMYK (Cyan, Magenta, Yellow, Key/Black) color values into HSV (Hue, Saturation, Value) format. This conversion is useful for designers and developers who need to switch between print (CMYK) and digital (HSV) color systems.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-3xl">🚀 Why Convert CMYK to HSV?</h3>
                            <p>Converting CMYK to HSV can be beneficial for several reasons:</p>
                            <ul>
                                <li>✅ Digital Design: HSV is a popular color model for digital design, making it essential for creative projects.</li>
                                <li>✅ Color Manipulation: HSV simplifies color adjustments like changing brightness or saturation.</li>
                                <li>✅ Compatibility: HSV is widely supported in design tools and graphics software.</li>
                                <li>✅ Intuitive Representation: HSV is more intuitive for humans to understand and work with compared to CMYK.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl">Features of Our CMYK to HSV Converter</h2>
                        <ul>
                            <li>🔹 Instant Conversion – Convert CMYK to HSV in real-time.</li>
                            <li>🔹 Accurate Color Matching – Ensures precise color representation.</li>
                            <li>🔹 User-Friendly Interface – Simple and intuitive to use.</li>
                            <li>🔹 Free & Secure – No data is stored or shared.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl">How to Use the CMYK to HSV Converter?</h2>
                        <ol className="list-decimal">
                            <li>Enter your CMYK values (e.g., 20, 40, 60, 80).</li>
                            <li>Click the "Convert to HSV" button.</li>
                            <li>Copy the HSV values or use them directly in your design tools.</li>
                        </ol>
                        💡 Tip: Use the converter to ensure your print colors match their digital counterparts.
                    </div>
                    <div>
                        <h2 className="text-3xl">Why Choose Codercrafter’s CMYK to HSV Converter?</h2>
                        <ul>
                            <li>✨ Lightning Fast: Convert CMYK to HSV in seconds.</li>
                            <li>🔒 100% Secure: No data is saved or tracked.</li>
                            <li>⚡ Designer-Friendly: Works for both print and digital designers.</li>
                            <li>🌎 Cross-Platform: Use it on desktop & mobile.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl">What Can You Do with Converted HSV Data?</h2>
                        <ul>
                            <li>✅ Use HSV values in digital design tools like Photoshop, Illustrator, or GIMP.</li>
                            <li>✅ Adjust color properties like brightness and saturation easily.</li>
                            <li>✅ Share HSV values with developers or designers.</li>
                            <li>✅ Integrate HSV colors into creative projects and visualizations.</li>
                        </ul>
                    </div>
                </div>
                <div className="md:w-1/2 flex flex-col">
                    <h2 className="text-4xl">Related Tools</h2>
                    <div className="p-6 flex flex-wrap gap-4">
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/rgb-to-hsv">RGB to HSV Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/hsv-to-rgb">HSV to RGB Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/cmyk-to-rgb">CMYK to RGB Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/hsv-to-cmyk">HSV to CMYK Converter</a>
                        <a className="border border-gray-400 p-4 font-bold related-link" href="/tools/color-converters/cmyk-to-hsv">CMYK to HSV Converter</a>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center gap-1 p-5">
                <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                    <span className="bg-gray-400 text-2xl text-white-800">🔹 Is CMYK to HSV Conversion Accurate?</span>
                    <span>Yes! The converter ensures precise color matching between CMYK and HSV formats.</span>
                </div>
                <div className="w-2/3 flex flex-col border border-gray-600 gap-2">
                    <span className="bg-gray-400 text-2xl text-white-800">🔹 Can I Convert HSV Back to CMYK?</span>
                    <span>Yes! You can use an HSV to CMYK converter to restore the original CMYK values.</span>
                </div>
                <div className="w-2/3 flex flex-col border border-gray-600">
                    <span className="bg-gray-400 text-2xl text-black-900">🔹 Does Conversion Affect Color Integrity?</span>
                    <span>No! The converter ensures that your colors remain accurate and consistent during the transformation process.</span>
                </div>
            </div>
        </div>
    </div>
}

export default CmykToHsvPage;