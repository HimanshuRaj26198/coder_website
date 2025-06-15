"use client";
// components/HsvToCmyk.js
import { useState } from 'react';
import { Heart } from 'react-feather';
import { TinyColor } from '@ctrl/tinycolor';
import { SketchPicker } from 'react-color'; // Import the color picker
import '../style.css';

const HsvToCmyk = () => {
    const [hsv, setHsv] = useState({ h: 0, s: 0, v: 0 }); // Default HSV values
    const [cmyk, setCmyk] = useState({ c: 100, m: 0, y: 0, k: 0 }); // Default CMYK value
    const [errorMessage, setErrorMessage] = useState('');
    const [showColorPicker, setShowColorPicker] = useState(true); // State to toggle color picker

    // Function to convert HSV to RGB
    const hsvToRgb = (h, s, v) => {
        const tinyColor = new TinyColor({ h, s: s / 100, v: v / 100 });
        const { r, g, b } = tinyColor.toRgb();
        return { r, g, b };
    };

    // Function to convert RGB to CMYK
    const rgbToCmyk = (r, g, b) => {
        const tinyColor = new TinyColor({ r, g, b });
        const { c, m, y, k } = tinyColor.toCmyk();
        return { c, m, y, k };
    };

    // Handle HSV input change
    const handleHsvChange = (e, channel) => {
        const value = parseInt(e.target.value, 10);
        const newHsv = { ...hsv, [channel]: value };
        setHsv(newHsv);

        const newRgb = hsvToRgb(newHsv.h, newHsv.s, newHsv.v);
        const newCmyk = rgbToCmyk(newRgb.r, newRgb.g, newRgb.b);
        setCmyk(newCmyk);
    };

    // Handle color picker change
    const handleColorChange = (color) => {
        const { r, g, b } = color.rgb;
        const hex = new TinyColor({ r, g, b }).toHex();
        const newHsv = new TinyColor(hex).toHsv();
        const newCmyk = rgbToCmyk(r, g, b);
        setHsv({ h: Math.round(newHsv.h), s: Math.round(newHsv.s * 100), v: Math.round(newHsv.v * 100) });
        setCmyk(newCmyk);
    };

    // Handle "Add to Favorites" click
    const handleAddToFavorites = () => {
        alert('Added to Favorites!');
    };

    // Convert HSV to RGB for preview
    const previewRgb = hsvToRgb(hsv.h, hsv.s, hsv.v);

    return (
        <div className="container section pt-5">
            <div className="columns is-centered">
                <div className="column is-12">
                    {/* Header and Add to Favorites button */}
                    <div className="columns">
                        <div className="column is-2 py-0"></div>
                        <div className="column">
                            {/* <h1 className="title has-text-centered">HSV to CMYK Converter</h1> */}
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
                                    cmyk({cmyk.c}, {cmyk.m}, {cmyk.y}, {cmyk.k})
                                </code>
                            </div>
                        </div>
                        <div className="column is-8 has-text-centered">
                            <div className="field">
                                <label className="label">HSV</label>
                                <div className="control">
                                    <div className="columns">
                                        <div className="column">
                                            <input
                                                className="input"
                                                type="number"
                                                min="0"
                                                max="360"
                                                placeholder="Hue"
                                                value={hsv.h}
                                                onChange={(e) => handleHsvChange(e, 'h')}
                                            />
                                        </div>
                                        <div className="column">
                                            <input
                                                className="input"
                                                type="number"
                                                min="0"
                                                max="100"
                                                placeholder="Saturation"
                                                value={hsv.s}
                                                onChange={(e) => handleHsvChange(e, 's')}
                                            />
                                        </div>
                                        <div className="column">
                                            <input
                                                className="input"
                                                type="number"
                                                min="0"
                                                max="100"
                                                placeholder="Value"
                                                value={hsv.v}
                                                onChange={(e) => handleHsvChange(e, 'v')}
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

                    {/* Display CMYK Code Below */}
                    <div className="columns is-centered">
                        <div className="column is-8 has-text-centered">
                            <div className="box">
                                <h2 className="subtitle">CMYK Color</h2>
                                <p className="is-size-4" style={{ background: `rgb(${previewRgb.r}, ${previewRgb.g}, ${previewRgb.b})`, color: "white" }}>
                                    cmyk({cmyk.c}, {cmyk.m}, {cmyk.y}, {cmyk.k})
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

export default HsvToCmyk;