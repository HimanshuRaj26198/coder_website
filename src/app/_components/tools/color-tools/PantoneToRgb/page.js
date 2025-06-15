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
    "PANTONE 127": "#F3E287",
    "PANTONE 128": "#FFC72C",
    "PANTONE 129": "#FFB81C",
    "PANTONE 130": "#FAA61A",
    "PANTONE 131": "#DA8B00",
    "PANTONE 132": "#A07400",
    "PANTONE 133": "#705700",
    "PANTONE 134": "#FFD98E",
    "PANTONE 135": "#FFC72C",
    "PANTONE 136": "#FFB500",
    "PANTONE 137": "#FF8200",
    "PANTONE 138": "#E87722",
    "PANTONE 139": "#BE6A14",
    "PANTONE 140": "#8C531B",
    "PANTONE 141": "#F3C560",
    "PANTONE 142": "#FFA300",
    "PANTONE 143": "#FF8200",
    "PANTONE 144": "#E87722",
    "PANTONE 145": "#BE6A14",
    "PANTONE 146": "#8C531B",
    "PANTONE 147": "#736635",
    "PANTONE 148": "#FFD98E",
    "PANTONE 149": "#FFC72C",
    "PANTONE 150": "#FF8200",
    "PANTONE 151": "#E87722",
    "PANTONE 152": "#BE6A14",
    "PANTONE 153": "#8C531B",
    "PANTONE 154": "#603A17",
    "PANTONE 155": "#F2D6A2",
    "PANTONE 156": "#FFB970",
    "PANTONE 157": "#FFA300",
    "PANTONE 158": "#E87722",
    "PANTONE 159": "#BE6A14",
    "PANTONE 160": "#8C531B",
    "PANTONE 161": "#603A17",
    "PANTONE 162": "#FFB5A1",
    "PANTONE 163": "#FF9471",
    "PANTONE 164": "#FF6A39",
    "PANTONE 165": "#E35205",
    "PANTONE 166": "#C34107",
    "PANTONE 167": "#A4350D",
    "PANTONE 168": "#642817",
    "PANTONE 169": "#FFA3AA",
    "PANTONE 170": "#FF5C39",
    "PANTONE 171": "#E03C31",
    "PANTONE 172": "#C81D11",
    "PANTONE 173": "#9B2D14",
    "PANTONE 174": "#642817",
    "PANTONE 175": "#512417",
    "PANTONE 176": "#FFB3D0",
    "PANTONE 177": "#FF6F61",
    "PANTONE 178": "#E03E3E",
    "PANTONE 179": "#BE1E2D",
    "PANTONE 180": "#9B2D3B",
    "PANTONE 181": "#64242E",
    "PANTONE 182": "#FFB3E0",
    "PANTONE 183": "#FF80C0",
    "PANTONE 184": "#E64594",
    "PANTONE 185": "#C8102E",
    "PANTONE 186": "#A6192E",
    "PANTONE 187": "#7D1128",
    "PANTONE 188": "#64242E",
    "PANTONE 189": "#FF99C8",
    "PANTONE 190": "#FF5C94",
    "PANTONE 191": "#E40068",
    "PANTONE 192": "#BE1E68",
    "PANTONE 193": "#9B1E50",
    "PANTONE 194": "#7D113A",
    "PANTONE 195": "#5C1833"
};


const PantoneToRgb = () => {
    const [pantone, setPantone] = useState('PANTONE 100'); // Default Pantone value
    const [rgb, setRgb] = useState({ r: 0, g: 0, b: 0 }); // Default RGB values
    const [errorMessage, setErrorMessage] = useState('');
    const [showColorPicker, setShowColorPicker] = useState(true); // State to toggle color picker
    const [colorPickerColor, setColorPickerColor] = useState(new TinyColor(pantoneToHexMap['PANTONE 100']).toRgb()); // Color picker's current color

    // Function to convert HEX to RGB
    const hexToRgb = (hex) => {
        const { r, g, b } = new TinyColor(hex).toRgb();
        return { r, g, b };
    };

    // Update RGB when pantone changes
    useEffect(() => {
        const hex = pantoneToHexMap[pantone];
        if (!hex) {
            setErrorMessage('Invalid Pantone value');
            return;
        }
        setErrorMessage('');
        const newRgb = hexToRgb(hex);
        setRgb(newRgb);
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

        // Update the RGB value
        const newRgb = hexToRgb(hex);
        setRgb(newRgb);

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
                            {/* <h1 className="title has-text-centered">Pantone to RGB Converter</h1> */}
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
                                <code id="previewColorCode">{`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`}</code>
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

                    {/* Display RGB Code Below */}
                    <div className="columns is-centered">
                        <div className="column is-8 has-text-centered">
                            <div className="box">
                                <h2 className="subtitle">RGB Color</h2>
                                <p className="is-size-4" style={{ background: new TinyColor(pantoneToHexMap[pantone]).toHexString(), color: "white" }}>
                                    {`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`}
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

export default PantoneToRgb;