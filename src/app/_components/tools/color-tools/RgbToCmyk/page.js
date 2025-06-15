"use client";
// components/RgbToCmyk.js
import { useState } from 'react';
import { Heart } from 'react-feather';
import { TinyColor } from '@ctrl/tinycolor';
import { SketchPicker } from 'react-color'; // Import the color picker
import '../style.css';

const RgbToCmyk = () => {
    const [rgb, setRgb] = useState({ r: 0, g: 201, b: 209 }); // Default RGB values
    const [cmyk, setCmyk] = useState({ c: 100, m: 0, y: 0, k: 0 }); // Default CMYK values
    const [errorMessage, setErrorMessage] = useState('');
    const [showColorPicker, setShowColorPicker] = useState(true); // State to toggle color picker

    // Function to convert RGB to CMYK
    const rgbToCmyk = (r, g, b) => {
        const tinyColor = new TinyColor({ r, g, b });
        if (!tinyColor.isValid) {
            setErrorMessage('Invalid RGB values');
            return { c: 0, m: 0, y: 0, k: 0 };
        }
        const { c, m, y, k } = tinyColor.toCmyk();
        return { c, m, y, k };
    };

    // Handle RGB input change
    const handleRgbChange = (e, channel) => {
        const value = parseInt(e.target.value, 10);
        const newRgb = { ...rgb, [channel]: value };
        setRgb(newRgb);

        const newCmyk = rgbToCmyk(newRgb.r, newRgb.g, newRgb.b);
        setCmyk(newCmyk);
    };

    // Handle color picker change
    const handleColorChange = (color) => {
        const { r, g, b } = color.rgb;
        setRgb({ r, g, b });

        const newCmyk = rgbToCmyk(r, g, b);
        setCmyk(newCmyk);
    };

    // Handle "Add to Favorites" click
    const handleAddToFavorites = () => {
        alert('Added to Favorites!');
    };

    // Convert RGB to CMYK for preview
    const previewCmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);

    return (
        <div className="container section pt-5">
            <div className="columns is-centered">
                <div className="column is-12">
                    {/* Header and Add to Favorites button */}
                    <div className="columns">
                        <div className="column is-2 py-0"></div>
                        <div className="column">
                            {/* <h1 className="title has-text-centered">RGB to CMYK Converter</h1> */}
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
                                style={{ backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` }}
                            >
                                <code id="previewColorCode">
                                    cmyk({previewCmyk.c}, {previewCmyk.m}, {previewCmyk.y}, {previewCmyk.k})
                                </code>
                            </div>
                        </div>
                        <div className="column is-8 has-text-centered">
                            <div className="field">
                                <label className="label">RGB</label>
                                <div className="control">
                                    <div className="columns">
                                        <div className="column">
                                            <input
                                                className="input"
                                                type="number"
                                                min="0"
                                                max="255"
                                                placeholder="Red"
                                                value={rgb.r}
                                                onChange={(e) => handleRgbChange(e, 'r')}
                                            />
                                        </div>
                                        <div className="column">
                                            <input
                                                className="input"
                                                type="number"
                                                min="0"
                                                max="255"
                                                placeholder="Green"
                                                value={rgb.g}
                                                onChange={(e) => handleRgbChange(e, 'g')}
                                            />
                                        </div>
                                        <div className="column">
                                            <input
                                                className="input"
                                                type="number"
                                                min="0"
                                                max="255"
                                                placeholder="Blue"
                                                value={rgb.b}
                                                onChange={(e) => handleRgbChange(e, 'b')}
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
                                    style={{ backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` }}
                                    onClick={() => setShowColorPicker(!showColorPicker)}
                                ></button>
                                {showColorPicker && (
                                    <div style={{ position: 'absolute', zIndex: 2 }}>
                                        <SketchPicker
                                            color={{ r: rgb.r, g: rgb.g, b: rgb.b }}
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
                                <p className="is-size-4" style={{ background: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`, color: "white" }}>
                                    cmyk({previewCmyk.c}, {previewCmyk.m}, {previewCmyk.y}, {previewCmyk.k})
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

export default RgbToCmyk;