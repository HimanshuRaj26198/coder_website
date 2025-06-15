"use client";
import { useState, useRef, useEffect } from 'react';
import { Heart, Copy, Droplet, ChevronDown, ChevronUp, CheckCircle, AlertTriangle } from 'react-feather';
import { TinyColor } from '@ctrl/tinycolor';
import { SketchPicker } from 'react-color';
import { motion, AnimatePresence } from 'framer-motion';

const CmykToHex = () => {
    const [cmyk, setCmyk] = useState({ c: 100, m: 0, y: 0, k: 0 });
    const [hexCode, setHexCode] = useState('#00C9D1');
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [copied, setCopied] = useState(false);
    const [favorited, setFavorited] = useState(false);
    const colorPickerRef = useRef(null);

    // Close color picker when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (colorPickerRef.current && !colorPickerRef.current.contains(event.target)) {
                setShowColorPicker(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Convert CMYK to HEX whenever CMYK values change
    useEffect(() => {
        const { r, g, b } = cmykToRgb(cmyk.c, cmyk.m, cmyk.y, cmyk.k);
        setHexCode(new TinyColor({ r, g, b }).toHex());
    }, [cmyk]);

    const cmykToRgb = (c, m, y, k) => {
        return {
            r: Math.round(255 * (1 - c / 100) * (1 - k / 100)),
            g: Math.round(255 * (1 - m / 100) * (1 - k / 100)),
            b: Math.round(255 * (1 - y / 100) * (1 - k / 100))
        };
    };

    const handleCmykChange = (e, channel) => {
        const value = parseInt(e.target.value, 10) || 0;
        const clampedValue = Math.min(100, Math.max(0, value));
        setCmyk(prev => ({ ...prev, [channel]: clampedValue }));
    };

    const handleColorChange = (color) => {
        const newCmyk = new TinyColor(color.hex).toCmyk();
        setCmyk({
            c: Math.round(newCmyk.c),
            m: Math.round(newCmyk.m),
            y: Math.round(newCmyk.y),
            k: Math.round(newCmyk.k)
        });
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(hexCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleAddToFavorites = () => {
        setFavorited(!favorited);
    };

    const previewRgb = cmykToRgb(cmyk.c, cmyk.m, cmyk.y, cmyk.k);
    const textColor = new TinyColor(hexCode).isLight() ? '#000000' : '#ffffff';

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                            CMYK to HEX Converter
                        </h1>
                        <p className="text-gray-600 mt-2">Convert CMYK color values to HEX codes instantly</p>
                    </div>
                    <button
                        onClick={handleAddToFavorites}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full ${favorited ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'} hover:bg-gray-200 transition-colors`}
                    >
                        <Heart size={18} fill={favorited ? 'currentColor' : 'none'} />
                        <span>{favorited ? 'Favorited' : 'Favorite'}</span>
                    </button>
                </div>

                {/* Main Converter */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* Color Preview - Now updates in real-time */}
                    <div
                        className="h-48 flex items-end p-6 transition-colors duration-300"
                        style={{
                            backgroundColor: hexCode,
                            color: textColor
                        }}
                    >
                        <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
                            <div className="flex items-center gap-3">
                                <span className="font-mono text-lg">{hexCode}</span>
                                <button
                                    onClick={handleCopy}
                                    className="p-1 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors"
                                    title="Copy HEX code"
                                >
                                    <Copy size={18} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Color Picker Toggle */}
                    <div className="px-6 pt-4">
                        <button
                            onClick={() => setShowColorPicker(!showColorPicker)}
                            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <Droplet size={18} />
                            <span>Color Picker</span>
                            {showColorPicker ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                    </div>

                    {/* Color Picker */}
                    <AnimatePresence>
                        {showColorPicker && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="px-6 py-4"
                                ref={colorPickerRef}
                            >
                                <SketchPicker
                                    color={hexCode}
                                    onChangeComplete={handleColorChange}
                                    presetColors={[]}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* CMYK Inputs */}
                    <div className="p-6">
                        <h2 className="text-xl font-semibold mb-4">CMYK Values</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {['c', 'm', 'y', 'k'].map((channel) => (
                                <div key={channel} className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        {channel.toUpperCase()}
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={cmyk[channel]}
                                            onChange={(e) => handleCmykChange(e, channel)}
                                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                        />
                                        <input
                                            type="number"
                                            min="0"
                                            max="100"
                                            value={cmyk[channel]}
                                            onChange={(e) => handleCmykChange(e, channel)}
                                            className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Color Details */}
                    <div className="p-6 bg-gray-50">
                        <h2 className="text-xl font-semibold mb-4">Color Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 bg-white rounded-lg shadow">
                                <h3 className="text-sm font-medium text-gray-500">HEX</h3>
                                <p className="mt-1 font-mono">{hexCode}</p>
                            </div>
                            <div className="p-4 bg-white rounded-lg shadow">
                                <h3 className="text-sm font-medium text-gray-500">RGB</h3>
                                <p className="mt-1 font-mono">
                                    {previewRgb.r}, {previewRgb.g}, {previewRgb.b}
                                </p>
                            </div>
                            <div className="p-4 bg-white rounded-lg shadow">
                                <h3 className="text-sm font-medium text-gray-500">CMYK</h3>
                                <p className="mt-1 font-mono">
                                    {cmyk.c}%, {cmyk.m}%, {cmyk.y}%, {cmyk.k}%
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copy Notification */}
                <AnimatePresence>
                    {copied && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
                        >
                            <CheckCircle size={18} />
                            <span>Copied to clipboard!</span>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Information Section */}
                <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">About CMYK to HEX Conversion</h2>
                    <div className="space-y-4">
                        <p>
                            CMYK (Cyan, Magenta, Yellow, Key/Black) is a subtractive color model used in color printing.
                            HEX (Hexadecimal) is a color code used in digital design and web development.
                        </p>
                        <p>
                            This converter helps you translate between these color models, which is especially useful when
                            working on designs that need to be implemented both in print and digital formats.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h3 className="font-medium text-lg mb-2">CMYK Color Model</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Used primarily in printing</li>
                                    <li>Subtractive color model</li>
                                    <li>Values range from 0% to 100%</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h3 className="font-medium text-lg mb-2">HEX Color Codes</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Used in web design and digital media</li>
                                    <li>Hexadecimal format (#RRGGBB)</li>
                                    <li>Values range from 00 to FF for each channel</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CmykToHex;