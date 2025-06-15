"use client";
import { useState, useRef, useEffect } from 'react';
import { Heart, Copy, Droplet, ChevronDown, ChevronUp, CheckCircle, AlertTriangle } from 'react-feather';
import { TinyColor } from '@ctrl/tinycolor';
import { SketchPicker } from 'react-color';
import { motion, AnimatePresence } from 'framer-motion';

const HexToRgb = () => {
    const [hex, setHex] = useState('#00C9D1');
    const [rgb, setRgb] = useState({ r: 0, g: 201, b: 209 });
    const [errorMessage, setErrorMessage] = useState('');
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
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Convert HEX to RGB whenever HEX changes
    useEffect(() => {
        const tinyColor = new TinyColor(hex);
        if (tinyColor.isValid) {
            setRgb(tinyColor.toRgb());
            setErrorMessage('');
        } else {
            setErrorMessage('Invalid HEX value');
        }
    }, [hex]);

    const handleHexChange = (e) => {
        let value = e.target.value;
        // Add # if missing but only if there's a value
        if (value && !value.startsWith('#')) {
            value = '#' + value;
        }
        setHex(value);
    };

    const handleColorChange = (color) => {
        const { r, g, b } = color.rgb;
        setRgb({ r, g, b });
        setHex(new TinyColor({ r, g, b }).toHexString());
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const handleAddToFavorites = () => {
        setFavorited(!favorited);
    };

    const textColor = new TinyColor(hex).isLight() ? '#000000' : '#ffffff';

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}


                {/* Main Converter */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* Color Preview */}
                    <div
                        className="h-48 flex items-end p-6 transition-colors duration-300"
                        style={{
                            backgroundColor: hex,
                            color: textColor
                        }}
                    >
                        <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
                            <div className="flex items-center gap-3">
                                <span className="font-mono text-lg">{hex}</span>
                                <button
                                    onClick={() => handleCopy(hex)}
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
                                    color={hex}
                                    onChangeComplete={handleColorChange}
                                    presetColors={[]}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* HEX Input */}
                    <div className="p-6">
                        <h2 className="text-xl font-semibold mb-4">HEX Value</h2>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <span className="text-gray-500">#</span>
                            </div>
                            <input
                                type="text"
                                value={hex.replace('#', '')}
                                onChange={handleHexChange}
                                className="pl-7 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 font-mono"
                                placeholder="Enter HEX code"
                                maxLength={6}
                            />
                        </div>
                    </div>

                    {/* RGB Output */}
                    <div className="p-6 bg-gray-50">
                        <h2 className="text-xl font-semibold mb-4">RGB Values</h2>
                        <div className="grid grid-cols-3 gap-4">
                            {['r', 'g', 'b'].map((channel) => (
                                <div key={channel} className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        {channel.toUpperCase()}
                                    </label>
                                    <input
                                        type="number"
                                        min="0"
                                        max="255"
                                        value={rgb[channel]}
                                        readOnly
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 font-mono"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="mt-4">
                            <button
                                onClick={() => handleCopy(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`)}
                                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                            >
                                <Copy size={16} />
                                <span>Copy RGB</span>
                            </button>
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

                {/* Error Message */}
                {errorMessage && (
                    <div className="mt-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-lg flex items-start">
                        <AlertTriangle className="h-5 w-5 mr-3 flex-shrink-0" />
                        <div>
                            <p className="font-medium">{errorMessage}</p>
                        </div>
                    </div>
                )}

                {/* Information Section */}
                <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">About HEX to RGB Conversion</h2>
                    <div className="space-y-4">
                        <p>
                            HEX (Hexadecimal) and RGB (Red, Green, Blue) are two common color formats used in digital design.
                            HEX codes are typically used in web design (CSS, HTML), while RGB values are used in various design applications.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h3 className="font-medium text-lg mb-2">HEX Color Codes</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>6-digit hexadecimal format (e.g., #RRGGBB)</li>
                                    <li>Widely used in web development</li>
                                    <li>Compact representation of colors</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h3 className="font-medium text-lg mb-2">RGB Color Model</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Represents colors with Red, Green, Blue values</li>
                                    <li>Each value ranges from 0 to 255</li>
                                    <li>Common in graphic design software</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HexToRgb;