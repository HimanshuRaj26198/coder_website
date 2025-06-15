"use client";
// components/CmykToHsv.js
import { useState } from 'react';
import { Heart } from 'react-feather';
import { TinyColor } from '@ctrl/tinycolor';
import { SketchPicker } from 'react-color'; // Import the color picker
import '../style.css';

const CmykToHsv = () => {
    const [cmyk, setCmyk] = useState({ c: 100, m: 0, y: 0, k: 0 }); // Default CMYK values
    const [hsv, setHsv] = useState({ h: 0, s: 0, v: 0 }); // Default HSV value
    const [errorMessage, setErrorMessage] = useState('');
    const [showColorPicker, setShowColorPicker] = useState(true); // State to toggle color picker

    // Function to convert CMYK to RGB
    const cmykToRgb = (c, m, y, k) => {
        const r = Math.round(255 * (1 - c / 100) * (1 - k / 100));
        const g = Math.round(255 * (1 - m / 100) * (1 - k / 100));
        const b = Math.round(255 * (1 - y / 100) * (1 - k / 100));
        return { r, g, b };
    };

    // Function to convert RGB to HSV
    const rgbToHsv = (r, g, b) => {
        const tinyColor = new TinyColor({ r, g, b });
        const { h, s, v } = tinyColor.toHsv();
        return { h: Math.round(h), s: Math.round(s * 100), v: Math.round(v * 100) };
    };

    // Handle CMYK input change
    const handleCmykChange = (e, channel) => {
        const value = parseInt(e.target.value, 10);
        const newCmyk = { ...cmyk, [channel]: value };
        setCmyk(newCmyk);

        const newRgb = cmykToRgb(newCmyk.c, newCmyk.m, newCmyk.y, newCmyk.k);
        const newHsv = rgbToHsv(newRgb.r, newRgb.g, newRgb.b);
        setHsv(newHsv);
    };

    // Handle color picker change
    const handleColorChange = (color) => {
        const { r, g, b } = color.rgb;
        const hex = new TinyColor({ r, g, b }).toHex();
        const newCmyk = new TinyColor(hex).toCmyk();
        const newHsv = rgbToHsv(r, g, b);
        setCmyk({ c: newCmyk.c, m: newCmyk.m, y: newCmyk.y, k: newCmyk.k });
        setHsv(newHsv);
    };

    // Handle "Add to Favorites" click
    const handleAddToFavorites = () => {
        alert('Added to Favorites!');
    };

    // Convert CMYK to RGB for preview
    const previewRgb = cmykToRgb(cmyk.c, cmyk.m, cmyk.y, cmyk.k);

    return (
        <div className="container section pt-5">
            <div className="columns is-centered">
                <div className="column is-12">
                    {/* Header and Add to Favorites button */}
                    <div className="columns">
                        <div className="column is-2 py-0"></div>
                        <div className="column">
                            {/* <h1 className="title has-text-centered">CMYK to HSV Converter</h1> */}
                        </div>
                        <div className="column is-2">
                            <div className="has-text-right">
                                <button className="button" onClick={handleAddToFavorites} title="Add this tool to Favorites">
                                    <span className="icon">
                                        <Heart size={16} />
                                    </span>
                                    <span>Add to Fav</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Color Preview and Input Fields */}
                    <div className="columns">
                        <div className="column is-2">
                            <div
                                id="previewColor"
                                className="has-text-centered box"
                                style={{ backgroundColor: `rgb(${previewRgb.r}, ${previewRgb.g}, ${previewRgb.b})` }}
                            >
                                <code id="previewColorCode">
                                    hsv({hsv.h}, {hsv.s}%, {hsv.v}%)
                                </code>
                            </div>
                        </div>
                        <div className="column is-8 has-text-centered">
                            <div className="field">
                                <label className="label">CMYK</label>
                                <div className="control">
                                    <div className="columns">
                                        <div className="column">
                                            <input
                                                className="input"
                                                type="number"
                                                min="0"
                                                max="100"
                                                placeholder="Cyan"
                                                value={cmyk.c}
                                                onChange={(e) => handleCmykChange(e, 'c')}
                                            />
                                        </div>
                                        <div className="column">
                                            <input
                                                className="input"
                                                type="number"
                                                min="0"
                                                max="100"
                                                placeholder="Magenta"
                                                value={cmyk.m}
                                                onChange={(e) => handleCmykChange(e, 'm')}
                                            />
                                        </div>
                                        <div className="column">
                                            <input
                                                className="input"
                                                type="number"
                                                min="0"
                                                max="100"
                                                placeholder="Yellow"
                                                value={cmyk.y}
                                                onChange={(e) => handleCmykChange(e, 'y')}
                                            />
                                        </div>
                                        <div className="column">
                                            <input
                                                className="input"
                                                type="number"
                                                min="0"
                                                max="100"
                                                placeholder="Key"
                                                value={cmyk.k}
                                                onChange={(e) => handleCmykChange(e, 'k')}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column is-2 has-text-centered">
                            {/* Color Picker */}
                            <div className="pickr">
                                <button
                                    type="button"
                                    className="pcr-button"
                                    role="button"
                                    aria-label="toggle color picker dialog"
                                    style={{ backgroundColor: `rgb(${previewRgb.r}, ${previewRgb.g}, ${previewRgb.b})` }}
                                    onClick={() => setShowColorPicker(!showColorPicker)}
                                ></button>
                                {showColorPicker && (
                                    <div style={{ position: 'absolute', zIndex: 2 }}>
                                        <SketchPicker
                                            color={{ r: previewRgb.r, g: previewRgb.g, b: previewRgb.b }}
                                            onChangeComplete={handleColorChange}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Display HSV Code Below */}
                    <div className="columns is-centered">
                        <div className="column is-8 has-text-centered">
                            <div className="box">
                                <h2 className="subtitle">HSV Color</h2>
                                <p className="is-size-4" style={{ background: `rgb(${previewRgb.r}, ${previewRgb.g}, ${previewRgb.b})`, color: "white" }}>
                                    hsv({hsv.h}, {hsv.s}%, {hsv.v}%)
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Error Message */}
                    {errorMessage && (
                        <section id="errorMessage" className="container is-fluid has-text-centered">
                            <p className="is-size-3 has-text-danger">{errorMessage}</p>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CmykToHsv;