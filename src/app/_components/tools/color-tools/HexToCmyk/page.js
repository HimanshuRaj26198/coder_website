"use client";
import { useState, useEffect } from 'react';
import { Heart } from 'react-feather';
import { TinyColor } from '@ctrl/tinycolor';
import { SketchPicker } from 'react-color';
import '../style.css';

const HexToCmyk = () => {
    const [hex, setHex] = useState('#00C9D1'); // Default HEX value
    const [cmyk, setCmyk] = useState({ c: 0, m: 0, y: 0, k: 0 }); // Default CMYK values
    const [errorMessage, setErrorMessage] = useState('');
    const [showColorPicker, setShowColorPicker] = useState(true); // State to toggle color picker

    // Function to convert HEX to CMYK
    const hexToCmyk = (hex) => {
        const tinyColor = new TinyColor(hex);
        if (!tinyColor.isValid) {
            setErrorMessage('Invalid HEX value');
            return { c: 0, m: 0, y: 0, k: 0 };
        }
        setErrorMessage('');

        // Convert RGB to CMYK
        const { r, g, b } = tinyColor.toRgb();
        let c = 1 - r / 255;
        let m = 1 - g / 255;
        let y = 1 - b / 255;
        const k = Math.min(c, m, y);

        if (k === 1) {
            return { c: 0, m: 0, y: 0, k: 100 }; // Handle black
        }

        c = ((c - k) / (1 - k)) * 100;
        m = ((m - k) / (1 - k)) * 100;
        y = ((y - k) / (1 - k)) * 100;

        return {
            c: Math.round(c),
            m: Math.round(m),
            y: Math.round(y),
            k: Math.round(k * 100),
        };
    };

    // Update CMYK whenever HEX changes
    useEffect(() => {
        const cmyk = hexToCmyk(hex);
        setCmyk(cmyk);
    }, [hex]);

    // Handle HEX input change
    const handleHexChange = (e) => {
        const value = e.target.value;
        setHex(value);
    };

    // Handle color picker change
    const handleColorChange = (color) => {
        const { r, g, b } = color.rgb;
        const hex = new TinyColor({ r, g, b }).toHexString();
        setHex(hex);
    };

    // Handle "Add to Favorites" click
    const handleAddToFavorites = () => {
        alert('Added to Favorites!');
    };

    return (
        <div className="container section pt-5">
            <div className="columns is-centered">
                <div className="column is-12">
                    {/* Header and Add to Favorites button */}
                    <div className="columns">
                        <div className="column is-2 py-0"></div>
                        <div className="column">
                            {/* <h1 className="title has-text-centered">HEX to CMYK Converter</h1> */}
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
                                style={{ backgroundColor: hex }}
                            >
                                <code id="previewColorCode">{hex}</code>
                            </div>
                        </div>
                        <div className="column is-8 has-text-centered">
                            <div className="field">
                                <label className="label">HEX</label>
                                <div className="control">
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="HEX"
                                        value={hex}
                                        onChange={handleHexChange}
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
                                    style={{ backgroundColor: hex }}
                                    onClick={() => setShowColorPicker(!showColorPicker)}
                                ></button>
                                {showColorPicker && (
                                    <div style={{ position: 'absolute', zIndex: 2 }}>
                                        <SketchPicker
                                            color={new TinyColor(hex).toRgb()}
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
                                <p className="is-size-4" style={{ background: hex, color: "white" }}>
                                    {`cmyk(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)`}
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

export default HexToCmyk;