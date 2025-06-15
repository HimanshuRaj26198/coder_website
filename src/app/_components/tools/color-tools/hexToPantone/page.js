"use client";
// components/HexToPantone.js
import { useState } from 'react';
import { Heart } from 'react-feather';
import { TinyColor } from '@ctrl/tinycolor';
import { SketchPicker } from 'react-color'; // Import the color picker
import '../style.css';

const HexToPantone = () => {
    const [hexCode, setHexCode] = useState('00C9D1');
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
        { name: '327 C', hex: '#008675' },
        { name: '3272 C', hex: '#00857D' },
        { name: '328 C', hex: '#007A6E' },
        { name: '3282 C', hex: '#00826E' },
        { name: '329 C', hex: '#006F62' },
        { name: '3292 C', hex: '#006A52' },
        { name: '330 C', hex: '#005F56' },
        { name: '3302 C', hex: '#00594F' },
        { name: '331 C', hex: '#B2E4DC' },
        { name: '332 C', hex: '#99E1CC' },
        { name: '333 C', hex: '#66DFC1' },
        { name: 'Green C', hex: '#00A650' },
        { name: '334 C', hex: '#009A44' },
        { name: '335 C', hex: '#00843D' },
        { name: '336 C', hex: '#007A33' },
        { name: '337 C', hex: '#71C6C1' },
        { name: '3375 C', hex: '#52C1AD' },
        { name: '338 C', hex: '#47BFA5' },
        { name: '3385 C', hex: '#00A499' },
        { name: '339 C', hex: '#009775' },
        { name: '3395 C', hex: '#00965E' },
        { name: '340 C', hex: '#008D49' },
        { name: '3405 C', hex: '#009A44' },
        { name: '341 C', hex: '#007A33' },
        { name: '3415 C', hex: '#006B3F' },
        { name: '342 C', hex: '#006341' },
        { name: '3425 C', hex: '#005F39' },
        { name: '343 C', hex: '#154734' },
        { name: '3435 C', hex: '#154734' },
        { name: '344 C', hex: '#A7E6D7' },
        { name: '345 C', hex: '#8DD8C8' },
        { name: '346 C', hex: '#5BC6B0' },
        { name: '347 C', hex: '#00843D' },
        { name: '348 C', hex: '#007A33' },
        { name: '349 C', hex: '#046A38' },
        { name: '350 C', hex: '#2D482E' },
        { name: '351 C', hex: '#D0EBE9' },
        { name: '352 C', hex: '#A9E6DA' },
        { name: '353 C', hex: '#89E4D0' },
        { name: '354 C', hex: '#009A44' },
        { name: '355 C', hex: '#007A33' },
        { name: '356 C', hex: '#046A38' },
        { name: '357 C', hex: '#1C3F32' },
        { name: '358 C', hex: '#B7DD79' },
        { name: '359 C', hex: '#A0D491' },
        { name: '360 C', hex: '#78BE20' },
        { name: '361 C', hex: '#43B02A' },
        { name: '362 C', hex: '#509E2F' },
        { name: '363 C', hex: '#4F8A10' },
        { name: '364 C', hex: '#59772A' },
        { name: '365 C', hex: '#D4EB8E' },
        { name: '366 C', hex: '#C1E263' },
        { name: '367 C', hex: '#A7D62E' },
        { name: '368 C', hex: '#78BE20' },
        { name: '369 C', hex: '#64A70B' },
        { name: '370 C', hex: '#4A7729' },
        { name: '371 C', hex: '#3A5E00' },
        { name: '372 C', hex: '#D4EB8E' },
        { name: '373 C', hex: '#C1E263' },
        { name: '374 C', hex: '#A7D62E' },
        { name: '375 C', hex: '#78BE20' },
        { name: '376 C', hex: '#64A70B' },
        { name: '377 C', hex: '#4A7729' },
        { name: '378 C', hex: '#3A5E00' }
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

    // Function to find closest Pantone colors
    const findClosestPantoneColors = (hex, distance) => {
        const inputColor = new TinyColor(hex);
        if (!inputColor.isValid) {
            setErrorMessage('Invalid HEX code');
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
            setErrorMessage('No Pantone colors available for this HEX code.');
        } else {
            setErrorMessage('');
        }

        setPantoneColors(closestColors);
    };

    // Handle HEX input change
    const handleHexChange = (e) => {
        const value = e.target.value.replace('#', '');
        setHexCode(value);
        findClosestPantoneColors(value, distance);
    };

    // Handle color picker change
    const handleColorChange = (color) => {
        const hex = color.hex.replace('#', '');
        setHexCode(hex);
        findClosestPantoneColors(hex, distance);
    };

    // Handle distance change
    const handleDistanceChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setDistance(value);
        findClosestPantoneColors(hexCode, value);
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
                            {/* <h1 className="title has-text-centered">HEX to Pantone Converter</h1> */}
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
                                style={{ backgroundColor: `#${hexCode}` }}
                            >
                                <code id="previewColorCode">#{hexCode}</code>
                            </div>
                        </div>
                        <div className="column is-8 has-text-centered">
                            <div className="field">
                                <label className="label">Hex</label>
                                <div className="control">
                                    <input
                                        id="h"
                                        className="input is-large"
                                        type="text"
                                        maxLength={6}
                                        placeholder="00C9D1"
                                        value={hexCode}
                                        onChange={handleHexChange}
                                        style={{ width: '200px' }}
                                        autoFocus
                                    />
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
                                    style={{ backgroundColor: `#${hexCode}` }}
                                    onClick={() => setShowColorPicker(!showColorPicker)}
                                ></button>
                                {showColorPicker && (
                                    <div style={{ position: 'absolute', zIndex: 2 }}>
                                        <SketchPicker
                                            color={`#${hexCode}`}
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

export default HexToPantone;