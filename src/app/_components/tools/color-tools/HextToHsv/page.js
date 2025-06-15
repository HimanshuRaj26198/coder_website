"use client";
// components/HexToHsv.js
import { useState } from 'react';
import { Heart } from 'react-feather';
import { TinyColor } from '@ctrl/tinycolor';
import { SketchPicker } from 'react-color'; // Import the color picker
import '../style.css';

const HexToHsv = () => {
    const [hexCode, setHexCode] = useState('#00C9D1'); // Default HEX value
    const [hsv, setHsv] = useState({ h: 0, s: 0, v: 0 }); // Default HSV values
    const [errorMessage, setErrorMessage] = useState('');
    const [showColorPicker, setShowColorPicker] = useState(true); // State to toggle color picker

    // Function to convert HEX to HSV
    const hexToHsv = (hex) => {
        const tinyColor = new TinyColor(hex);
        if (!tinyColor.isValid) {
            setErrorMessage('Invalid HEX code');
            return { h: 0, s: 0, v: 0 };
        }
        const { h, s, v } = tinyColor.toHsv();
        return { h: Math.round(h), s: Math.round(s * 100), v: Math.round(v * 100) };
    };

    // Handle HEX input change
    const handleHexChange = (e) => {
        const value = e.target.value.replace('#', '');
        setHexCode(`#${value}`);

        const newHsv = hexToHsv(`#${value}`);
        setHsv(newHsv);
    };

    // Handle color picker change
    const handleColorChange = (color) => {
        const hex = color.hex;
        setHexCode(hex);

        const newHsv = hexToHsv(hex);
        setHsv(newHsv);
    };

    // Handle "Add to Favorites" click
    const handleAddToFavorites = () => {
        alert('Added to Favorites!');
    };

    // Convert HEX to RGB for preview
    const previewRgb = new TinyColor(hexCode).toRgb();

    return (
        <div className="container section pt-5">
            <div className="columns is-centered">
                <div className="column is-12">
                    {/* Header and Add to Favorites button */}
                    <div className="columns">
                        <div className="column is-2 py-0"></div>
                        <div className="column">
                            {/* <h1 className="title has-text-centered">HEX to HSV Converter</h1> */}
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
                                <label className="label">HEX</label>
                                <div className="control">
                                    <input
                                        className="input is-large"
                                        type="text"
                                        maxLength={7}
                                        placeholder="00C9D1"
                                        value={hexCode.replace('#', '')}
                                        onChange={handleHexChange}
                                        style={{ width: '200px' }}
                                        autoFocus
                                    />
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

                    {/* Display HSV Code Below */}
                    <div className="columns is-centered">
                        <div className="column is-8 has-text-centered">
                            <div className="box">
                                <h2 className="subtitle">HSV Color</h2>
                                <p className="is-size-4" style={{ background: hexCode, color: "white" }}>
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

export default HexToHsv;