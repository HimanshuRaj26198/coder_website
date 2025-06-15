"use client";
// components/HsvToHex.js
import { useState } from 'react';
import { Heart } from 'react-feather';
import { TinyColor } from '@ctrl/tinycolor';
import { SketchPicker } from 'react-color'; // Import the color picker
import '../style.css';

const HsvToHex = () => {
    const [hsv, setHsv] = useState({ h: 0, s: 0, v: 0 }); // Default HSV values
    const [hexCode, setHexCode] = useState('#00C9D1'); // Default HEX value
    const [errorMessage, setErrorMessage] = useState('');
    const [showColorPicker, setShowColorPicker] = useState(true); // State to toggle color picker

    // Function to convert HSV to HEX
    const hsvToHex = (h, s, v) => {
        const tinyColor = new TinyColor({ h, s: s / 100, v: v / 100 });
        return tinyColor.toHexString();
    };

    // Handle HSV input change
    const handleHsvChange = (e, channel) => {
        const value = parseInt(e.target.value, 10);
        const newHsv = { ...hsv, [channel]: value };
        setHsv(newHsv);

        const hex = hsvToHex(newHsv.h, newHsv.s, newHsv.v);
        setHexCode(hex);
    };

    // Handle color picker change
    const handleColorChange = (color) => {
        const { r, g, b } = color.rgb;
        const hex = new TinyColor({ r, g, b }).toHex();
        const newHsv = new TinyColor(hex).toHsv();
        setHsv({ h: Math.round(newHsv.h), s: Math.round(newHsv.s * 100), v: Math.round(newHsv.v * 100) });
        setHexCode(hex);
    };

    // Handle "Add to Favorites" click
    const handleAddToFavorites = () => {
        alert('Added to Favorites!');
    };

    // Convert HSV to RGB for preview
    const previewRgb = new TinyColor({ h: hsv.h, s: hsv.s / 100, v: hsv.v / 100 }).toRgb();

    return (
        <div className="container section pt-5">
            <div className="columns is-centered">
                <div className="column is-12">
                    {/* Header and Add to Favorites button */}
                    <div className="columns">
                        <div className="column is-2 py-0"></div>
                        <div className="column">
                            {/* <h1 className="title has-text-centered">HSV to HEX Converter</h1> */}
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
                                style={{ backgroundColor: hexCode }}
                            >
                                <code id="previewColorCode">{hexCode}</code>
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
                                    style={{ backgroundColor: hexCode }}
                                    onClick={() => setShowColorPicker(!showColorPicker)}
                                ></button>
                                {showColorPicker && (
                                    <div style={{ position: 'absolute', zIndex: 2 }}>
                                        <SketchPicker
                                            color={hexCode}
                                            onChangeComplete={handleColorChange}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Display HEX Code Below */}
                    <div className="columns is-centered">
                        <div className="column is-8 has-text-centered">
                            <div className="box">
                                <h2 className="subtitle">HEX Color</h2>
                                <p className="is-size-4" style={{ background: hexCode, color: "white" }}>
                                    {hexCode}
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

export default HsvToHex;