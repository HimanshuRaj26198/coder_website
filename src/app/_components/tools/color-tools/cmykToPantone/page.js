"use client";
// components/CmykToPantone.js
import { useState } from 'react';
import { Heart } from 'react-feather';
import { TinyColor } from '@ctrl/tinycolor';
import { SketchPicker } from 'react-color'; // Import the color picker
import '../style.css';

const CmykToPantone = () => {
    const [cmyk, setCmyk] = useState({ c: 100, m: 0, y: 0, k: 0 }); // Default CMYK values
    const [distance, setDistance] = useState(48);
    const [pantoneColors, setPantoneColors] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [showColorPicker, setShowColorPicker] = useState(true); // State to toggle color picker

    // Sample Pantone color data (replace with actual Pantone data)
    const pantoneData = [
        { name: '801 C', hex: '#009ACE' },
        { name: '2925 C', hex: '#009CDE' },
        { name: '299 C', hex: '#00A3E0' },
        { name: '2995 C', hex: '#00A9E0' },
        { name: '306 C', hex: '#00B5E2' },
        { name: '638 C', hex: '#00AFD7' },
        { name: '311 C', hex: '#05C3DE' },
        { name: '312 C', hex: '#00A9CE' },
        { name: '3115 C', hex: '#00C1D5' },
        { name: '3125 C', hex: '#00AEC7' },
        { name: '7710 C', hex: '#00A7B5' },
        { name: '319 C', hex: '#2DCCD3' },
        { name: '7466 C', hex: '#00B0B9' },
        { name: '326 C', hex: '#00B2A9' },
        { name: '3252 C', hex: '#2AD2C9' },
        { name: '3262 C', hex: '#00BFB3' },
        { name: '3255 C', hex: '#2CD5C4' },
        { name: '3265 C', hex: '#00C7B1' },
    ];

    // Function to calculate color distance
    const getColorDistance = (color1, color2) => {
        const rgb1 = new TinyColor(color1).toRgb();
        const rgb2 = new TinyColor(color2).toRgb();

        return Math.sqrt(
            Math.pow(rgb1.r - rgb2.r, 2) +
            Math.pow(rgb1.g - rgb2.g, 2) +
            Math.pow(rgb1.b - rgb2.b, 2)
        );
    };

    // Function to convert CMYK to RGB
    const cmykToRgb = (c, m, y, k) => {
        const r = Math.round(255 * (1 - c / 100) * (1 - k / 100));
        const g = Math.round(255 * (1 - m / 100) * (1 - k / 100));
        const b = Math.round(255 * (1 - y / 100) * (1 - k / 100));
        return { r, g, b };
    };

    // Function to find closest Pantone colors
    const findClosestPantoneColors = (cmyk, distance) => {
        const { r, g, b } = cmykToRgb(cmyk.c, cmyk.m, cmyk.y, cmyk.k);
        const hex = new TinyColor({ r, g, b }).toHex();
        const inputColor = new TinyColor(hex);
        if (!inputColor.isValid) {
            setErrorMessage('Invalid CMYK values');
            return;
        }

        const closestColors = pantoneData
            .map((color) => ({
                ...color,
                distance: getColorDistance(color.hex, hex),
            }))
            .filter((color) => color.distance <= distance)
            .sort((a, b) => a.distance - b.distance);

        if (closestColors.length === 0) {
            setErrorMessage('No Pantone colors available for this CMYK code.');
        } else {
            setErrorMessage('');
        }

        setPantoneColors(closestColors);
    };

    // Handle CMYK input change
    const handleCmykChange = (e, channel) => {
        const value = parseInt(e.target.value, 10);
        const newCmyk = { ...cmyk, [channel]: value };
        setCmyk(newCmyk);
        findClosestPantoneColors(newCmyk, distance);
    };

    // Handle color picker change
    const handleColorChange = (color) => {
        const { r, g, b } = color.rgb;
        const hex = new TinyColor({ r, g, b }).toHex();
        const newCmyk = new TinyColor(hex).toCmyk();
        setCmyk({ c: newCmyk.c, m: newCmyk.m, y: newCmyk.y, k: newCmyk.k });
        findClosestPantoneColors(newCmyk, distance);
    };

    // Handle distance change
    const handleDistanceChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setDistance(value);
        findClosestPantoneColors(cmyk, value);
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
                            {/* <h1 className="title has-text-centered">CMYK to Pantone Converter</h1> */}
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
                            <div className="field">
                                <label className="label">Distance</label>
                                <div className="control">
                                    <div className="select">
                                        <select id="dist" value={distance} onChange={handleDistanceChange}>
                                            <option value={16}>16</option>
                                            <option value={32}>32</option>
                                            <option value={48}>48</option>
                                            <option value={64}>64</option>
                                            <option value={80}>80</option>
                                            <option value={96}>96</option>
                                        </select>
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
                                            color={previewRgb}
                                            onChangeComplete={handleColorChange}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Error Message */}
                    {errorMessage && (
                        <section id="errorMessage" className="container is-fluid has-text-centered">
                            <p className="is-size-3 has-text-danger">{errorMessage}</p>
                        </section>
                    )}

                    {/* Pantone Colors Grid */}
                    <section className="container is-fluid">
                        <div id="colorDiv">
                            <div className="columns is-multiline">
                                {pantoneColors.map((color, index) => (
                                    <div
                                        key={index}
                                        className="column is-1"
                                        title={color.name}
                                        style={{ height: '150px' }}
                                    >
                                        <p>{color.name}</p>
                                        <div
                                            style={{
                                                height: '100px',
                                                backgroundColor: color.hex,
                                            }}
                                        >
                                            <div className="is-size-7 bottomHexCode">
                                                <code>&nbsp;{color.hex}</code>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CmykToPantone;