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
    "PANTONE 127": "#FCE300",
    "PANTONE 128": "#FFD100",
    "PANTONE 129": "#FFC72C",
    "PANTONE 130": "#FAA61A",
    "PANTONE 131": "#DAAA00",
    "PANTONE 132": "#A98C00",
    "PANTONE 133": "#736600",
    "PANTONE 134": "#FFC72C",
    "PANTONE 135": "#FFB500",
    "PANTONE 136": "#FFA300",
    "PANTONE 137": "#FF8200",
    "PANTONE 138": "#E87722",
    "PANTONE 139": "#BE6A14",
    "PANTONE 140": "#8C5A28",
    "PANTONE 141": "#EAAA00",
    "PANTONE 142": "#E87722",
    "PANTONE 143": "#FF8200",
    "PANTONE 144": "#E87722",
    "PANTONE 145": "#BE6A14",
    "PANTONE 146": "#8C5A28",
    "PANTONE 147": "#736600",
    "PANTONE 148": "#FCE300",
    "PANTONE 149": "#FFD100",
    "PANTONE 150": "#FFC72C",
    "PANTONE 151": "#FF8200",
    "PANTONE 152": "#E87722",
    "PANTONE 153": "#BE6A14",
    "PANTONE 154": "#8C5A28",
    "PANTONE 155": "#F8E08E",
    "PANTONE 156": "#FFD965",
    "PANTONE 157": "#FFA300",
    "PANTONE 158": "#FF8200",
    "PANTONE 159": "#E87722",
    "PANTONE 160": "#BE6A14",
    "PANTONE 161": "#8C5A28",
    "PANTONE 162": "#FFB500",
    "PANTONE 163": "#FFA300",
    "PANTONE 164": "#FF8200",
    "PANTONE 165": "#E87722",
    "PANTONE 166": "#BE6A14",
    "PANTONE 167": "#8C5A28",
    "PANTONE 168": "#5A3825",
    "PANTONE 169": "#F4A6C0",
    "PANTONE 170": "#EF5B4E",
    "PANTONE 171": "#EC1C24",
    "PANTONE 172": "#E4002B",
    "PANTONE 173": "#BE1E2D",
    "PANTONE 174": "#9D2235",
    "PANTONE 175": "#782F40",
    "PANTONE 176": "#F4A6C0",
    "PANTONE 177": "#EF5B4E",
    "PANTONE 178": "#EC1C24",
    "PANTONE 179": "#BE1E2D",
    "PANTONE 180": "#9D2235",
    "PANTONE 181": "#782F40",
    "PANTONE 182": "#F4A6C0",
    "PANTONE 183": "#EF5B4E",
    "PANTONE 184": "#EC1C24",
    "PANTONE 185": "#E4002B",
    "PANTONE 186": "#C8102E",
    "PANTONE 187": "#A6192E",
    "PANTONE 188": "#7D2027",
    "PANTONE 189": "#F4A6C0",
    "PANTONE 190": "#EF5B4E",
    "PANTONE 191": "#EC1C24",
    "PANTONE 192": "#E4002B",
    "PANTONE 193": "#C8102E",
    "PANTONE 194": "#A6192E",
    "PANTONE 195": "#7D2027",
    "PANTONE 196": "#F4A6C0",
    "PANTONE 197": "#EF5B4E",
    "PANTONE 198": "#EC1C24",
    "PANTONE 199": "#E4002B",
    "PANTONE 200": "#C8102E",
    "PANTONE 201": "#A6192E",
    "PANTONE 202": "#7D2027",
    "PANTONE 203": "#F4A6C0",
    "PANTONE 204": "#EF5B4E",
    "PANTONE 205": "#EC1C24",
    "PANTONE 206": "#E4002B",
    "PANTONE 207": "#C8102E",
    "PANTONE 208": "#A6192E",
    "PANTONE 209": "#7D2027",
    "PANTONE 210": "#F4A6C0",
    "PANTONE 211": "#EF5B4E",
    "PANTONE 212": "#EC1C24",
    "PANTONE 213": "#E4002B",
    "PANTONE 214": "#C8102E",
    "PANTONE 215": "#A6192E",
    "PANTONE 216": "#7D2027",
    "PANTONE 217": "#F4A6C0",
    "PANTONE 218": "#EF5B4E",
    "PANTONE 219": "#EC1C24",
    "PANTONE 220": "#E4002B",
    "PANTONE 221": "#C8102E",
    "PANTONE 222": "#A6192E",
};



const PantoneToCmyk = () => {
    const [pantone, setPantone] = useState('PANTONE 100'); // Default Pantone value
    const [cmyk, setCmyk] = useState({ c: 0, m: 0, y: 0, k: 0 }); // Default CMYK values
    const [errorMessage, setErrorMessage] = useState('');
    const [showColorPicker, setShowColorPicker] = useState(true); // State to toggle color picker
    const [colorPickerColor, setColorPickerColor] = useState(new TinyColor(pantoneToHexMap['PANTONE 100']).toRgb()); // Color picker's current color
    const [currentHex, setCurrentHex] = useState(pantoneToHexMap['PANTONE 100']); // Current HEX color

    // Function to convert HEX to CMYK
    const hexToCmyk = (hex) => {
        const { r, g, b } = new TinyColor(hex).toRgb();

        // Convert RGB to CMYK
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

    // Update CMYK and error message when currentHex changes
    useEffect(() => {
        const newCmyk = hexToCmyk(currentHex);
        setCmyk(newCmyk);

        // Find the matching Pantone color
        const matchingPantone = Object.keys(pantoneToHexMap).find((key) => pantoneToHexMap[key] === currentHex) || 'Custom Color';
        setPantone(matchingPantone);
    }, [currentHex]);

    // Handle Pantone input change
    const handlePantoneChange = (e) => {
        const value = e.target.value;
        setPantone(value);

        // Update currentHex if the input matches a predefined Pantone color
        const hex = pantoneToHexMap[value];
        if (hex) {
            setCurrentHex(hex);
            setColorPickerColor(new TinyColor(hex).toRgb());
        }
    };

    // Handle color picker change
    const handleColorChange = (color) => {
        const { r, g, b } = color.rgb;
        const hex = new TinyColor({ r, g, b }).toHexString();

        // Update the current HEX color
        setCurrentHex(hex);

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
                            {/* <h1 className="title has-text-centered">Pantone to CMYK Converter</h1> */}
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
                                style={{ backgroundColor: currentHex }}
                            >
                                <code id="previewColorCode">{`${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%`}</code>
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
                                    style={{ backgroundColor: currentHex }}
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

                    {/* Display CMYK Code Below */}
                    <div className="columns is-centered">
                        <div className="column is-8 has-text-centered">
                            <div className="box">
                                <h2 className="subtitle">CMYK Color</h2>
                                <p className="is-size-4" style={{ background: currentHex, color: "white" }}>
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

export default PantoneToCmyk;