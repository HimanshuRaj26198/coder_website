"use client";
// components/RgbToPantone.js
import { useState } from 'react';
import { Heart } from 'react-feather';
import { TinyColor } from '@ctrl/tinycolor';
import { SketchPicker } from 'react-color'; // Import the color picker
import '../style.css';

const RgbToPantone = () => {
    const [rgb, setRgb] = useState({ r: 0, g: 201, b: 209 }); // Default RGB values
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
        { name: '328 C', hex: '#008E7D' },
        { name: '329 C', hex: '#007A5E' },
        { name: '330 C', hex: '#006F44' },
        { name: '339 C', hex: '#00A499' },
        { name: '340 C', hex: '#009A44' },
        { name: '341 C', hex: '#00843D' },
        { name: '342 C', hex: '#006747' },
        { name: '343 C', hex: '#154734' },
        { name: '347 C', hex: '#00843D' },
        { name: '348 C', hex: '#007A33' },
        { name: '349 C', hex: '#046A38' },
        { name: '350 C', hex: '#2C5234' },
        { name: '351 C', hex: '#A7E6D7' },
        { name: '352 C', hex: '#8DE1D1' },
        { name: '353 C', hex: '#B5E3E0' },
        { name: '354 C', hex: '#00A650' },
        { name: '355 C', hex: '#009A44' },
        { name: '356 C', hex: '#007A33' },
        { name: '357 C', hex: '#215732' },
        { name: '358 C', hex: '#A1D884' },
        { name: '359 C', hex: '#A7E6B6' },
        { name: '360 C', hex: '#43B02A' },
        { name: '361 C', hex: '#47A400' },
        { name: '362 C', hex: '#509E2F' },
        { name: '363 C', hex: '#4F8C2E' },
        { name: '364 C', hex: '#3F721D' },
        { name: '365 C', hex: '#C4DF9B' },
        { name: '366 C', hex: '#B7DD79' },
        { name: '367 C', hex: '#A3D65C' },
        { name: '368 C', hex: '#78BE20' },
        { name: '369 C', hex: '#64A70B' },
        { name: '370 C', hex: '#568E1F' },
        { name: '371 C', hex: '#4A7729' },
        { name: '372 C', hex: '#D4EB8E' },
        { name: '373 C', hex: '#D0DE90' },
        { name: '374 C', hex: '#C6DC7E' },
        { name: '375 C', hex: '#A7C947' },
        { name: '376 C', hex: '#8A9A5B' },
        { name: '377 C', hex: '#758C41' },
        { name: '378 C', hex: '#5E6A2E' },
        { name: '379 C', hex: '#E2E868' },
        { name: '380 C', hex: '#D2D755' },
        { name: '381 C', hex: '#C4C730' },
        { name: '382 C', hex: '#BFD730' },
        { name: '383 C', hex: '#A2AD00' },
        { name: '384 C', hex: '#A7A400' },
        { name: '385 C', hex: '#8A7B2E' },
        { name: '386 C', hex: '#E2E868' },
        { name: '387 C', hex: '#D2D755' },
        { name: '388 C', hex: '#C4C730' },
        { name: '389 C', hex: '#BFD730' },
        { name: '390 C', hex: '#A2AD00' },
        { name: '391 C', hex: '#A7A400' },
        { name: '392 C', hex: '#8A7B2E' },
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
    const findClosestPantoneColors = (rgb, distance) => {
        const hex = new TinyColor(rgb).toHex();
        const inputColor = new TinyColor(hex);
        if (!inputColor.isValid) {
            setErrorMessage('Invalid RGB values');
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
            setErrorMessage('No Pantone colors available for this RGB code.');
        } else {
            setErrorMessage('');
        }

        setPantoneColors(closestColors);
    };

    // Handle RGB input change
    const handleRgbChange = (e, channel) => {
        const value = parseInt(e.target.value, 10);
        const newRgb = { ...rgb, [channel]: value };
        setRgb(newRgb);
        findClosestPantoneColors(newRgb, distance);
    };

    // Handle color picker change
    const handleColorChange = (color) => {
        const { r, g, b } = color.rgb;
        const newRgb = { r, g, b };
        setRgb(newRgb);
        findClosestPantoneColors(newRgb, distance);
    };

    // Handle distance change
    const handleDistanceChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setDistance(value);
        findClosestPantoneColors(rgb, value);
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
                            {/* <h1 className="title has-text-centered">RGB to Pantone Converter</h1> */}
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
                                    rgb({rgb.r}, {rgb.g}, {rgb.b})
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
                                    style={{ backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` }}
                                    onClick={() => setShowColorPicker(!showColorPicker)}
                                ></button>
                                {showColorPicker && (
                                    <div style={{ position: 'absolute', zIndex: 2 }}>
                                        <SketchPicker
                                            color={rgb}
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

export default RgbToPantone;