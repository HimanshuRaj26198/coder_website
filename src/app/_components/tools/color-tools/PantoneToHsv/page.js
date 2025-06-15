"use client";
import { useState, useEffect } from 'react';
import { Heart } from 'react-feather';
import { TinyColor } from '@ctrl/tinycolor';
import { SketchPicker } from 'react-color'; // Import the color picker
import '../style.css';

// Predefined Pantone to HEX mapping
const pantoneToHexMap = {
    "PANTONE 100": "#F4ED7C",
    "PANTONE 101": "#F4ED47",
    "PANTONE 102": "#F7EA39",
    "PANTONE 103": "#B7A21A",
    "PANTONE 104": "#9C8C1C",
    "PANTONE 105": "#75691F",
    "PANTONE 106": "#FCE300",
    "PANTONE 107": "#FFD100",
    "PANTONE 108": "#FFC72C",
    "PANTONE 109": "#FFB500",
    "PANTONE 110": "#FAA61A",
    "PANTONE 111": "#DAAA00",
    "PANTONE 112": "#A98C00",
    "PANTONE 113": "#F2E900",
    "PANTONE 114": "#FCE300",
    "PANTONE 115": "#FFDD00",
    "PANTONE 116": "#FFC72C",
    "PANTONE 117": "#DAAA00",
    "PANTONE 118": "#A98C00",
    "PANTONE 119": "#736600",
    "PANTONE 120": "#F8E08E",
    "PANTONE 121": "#FFD965",
    "PANTONE 122": "#FFBC42",
    "PANTONE 123": "#FFA300",
    "PANTONE 124": "#FF8200",
    "PANTONE 125": "#E87722",
    "PANTONE 126": "#BE6A14",
    // Add more Pantone colors as needed
};

const PantoneToHsv = () => {
    const [pantone, setPantone] = useState('PANTONE 100'); // Default Pantone value
    const [hsv, setHsv] = useState({ h: 0, s: 0, v: 0 }); // Default HSV values
    const [errorMessage, setErrorMessage] = useState('');
    const [showColorPicker, setShowColorPicker] = useState(true); // State to toggle color picker
    const [colorPickerColor, setColorPickerColor] = useState(new TinyColor(pantoneToHexMap['PANTONE 100']).toRgb()); // Color picker's current color

    // Function to convert HEX to HSV
    const hexToHsv = (hex) => {
        const { h, s, v } = new TinyColor(hex).toHsv();
        return {
            h: Math.round(h),
            s: Math.round(s * 100),
            v: Math.round(v * 100),
        };
    };

    // Update HSV when pantone changes
    useEffect(() => {
        const hex = pantoneToHexMap[pantone];
        if (!hex) {
            setErrorMessage('Invalid Pantone value');
            return;
        }
        setErrorMessage('');
        const newHsv = hexToHsv(hex);
        setHsv(newHsv);
        setColorPickerColor(new TinyColor(hex).toRgb());
    }, [pantone]);

    // Handle Pantone input change
    const handlePantoneChange = (e) => {
        const value = e.target.value;
        setPantone(value);
    };

    // Handle color picker change
    const handleColorChange = (color) => {
        const { r, g, b } = color.rgb;
        const hex = new TinyColor({ r, g, b }).toHexString();

        // Find the matching Pantone color
        const matchingPantone = Object.keys(pantoneToHexMap).find((key) => pantoneToHexMap[key] === hex) || 'Custom Color';
        setPantone(matchingPantone);

        // Update the HSV value
        const newHsv = hexToHsv(hex);
        setHsv(newHsv);

        // Update the color picker's color
        setColorPickerColor({ r, g, b });
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
                            {/* <h1 className="title has-text-centered">Pantone to HSV Converter</h1> */}
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
                                style={{ backgroundColor: new TinyColor(pantoneToHexMap[pantone]).toHexString() }}
                            >
                                <code id="previewColorCode">{`hsv(${hsv.h}, ${hsv.s}%, ${hsv.v}%)`}</code>
                            </div>
                        </div>
                        <div className="column is-8 has-text-centered">
                            <div className="field">
                                <label className="label">Pantone</label>
                                <div className="control">
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="Pantone"
                                        value={pantone}
                                        onChange={handlePantoneChange}
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
                                    style={{ backgroundColor: new TinyColor(pantoneToHexMap[pantone]).toHexString() }}
                                    onClick={() => setShowColorPicker(!showColorPicker)}
                                ></button>
                                {showColorPicker && (
                                    <div style={{ position: 'absolute', zIndex: 2 }}>
                                        <SketchPicker
                                            color={colorPickerColor}
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
                                <p className="is-size-4" style={{ background: new TinyColor(pantoneToHexMap[pantone]).toHexString(), color: "white" }}>
                                    {`hsv(${hsv.h}, ${hsv.s}%, ${hsv.v}%)`}
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

export default PantoneToHsv;