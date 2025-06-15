'use client';
import { useState, useRef, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';
import { useDropzone } from 'react-dropzone';

export default function GhibliConverter() {
    const [originalImage, setOriginalImage] = useState(null);
    const [ghibliImage, setGhibliImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const canvasRef = useRef(null);

    // Initialize TensorFlow.js with WebGL backend
    useEffect(() => {
        async function initTF() {
            try {
                await tf.setBackend('webgl');
                await tf.ready();
                console.log('TensorFlow.js is ready with WebGL backend');
            } catch (err) {
                console.error('Failed to initialize TensorFlow.js:', err);
                setError('Failed to initialize image processor. Please try again later.');
            }
        }
        initTF();
    }, []);

    // Handle image upload
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': ['.jpeg', '.jpg', '.png']
        },
        maxFiles: 1,
        onDrop: acceptedFiles => {
            if (acceptedFiles.length > 0) {
                const file = acceptedFiles[0];
                const reader = new FileReader();
                reader.onload = () => {
                    setOriginalImage(reader.result);
                };
                reader.readAsDataURL(file);
            }
        }
    });

    // Apply Ghibli-style effects (simulated since we don't have a real model)
    const applyGhibliEffects = async (imageData) => {
        try {
            const img = new Image();
            img.src = imageData;
            await new Promise((resolve) => img.onload = resolve);

            // Load image as tensor
            let tensor = tf.browser.fromPixels(img)
                .toFloat()
                .div(tf.scalar(255))
                .expandDims();

            // **Step 1: Enhance Ghibli Colors (Boost Vibrancy & Adjust Tones)**
            let enhanced = tensor.mul(tf.tensor([1.15, 1.1, 0.9])) // Boost reds/greens, soften blues
                .pow(tf.scalar(1.05)) // Brighten highlights for soft lighting
                .clipByValue(0, 1);

            // **Step 2: Add Soft Shading Effect**
            let contrastAdjusted = tf.tidy(() => {
                let grayscale = enhanced.mean(3).expandDims(3); // Convert to grayscale
                return enhanced.mul(0.8).add(grayscale.mul(0.2)) // Blend grayscale for soft shading
                    .clipByValue(0, 1);
            });

            // **Step 3: Posterization Effect (Reduce Color Bands)**
            let posterized = contrastAdjusted.mul(255).floor().div(255) // Reduce color depth for hand-drawn effect
                .clipByValue(0, 1);

            // **Step 4: Subtle Blur & Glow Effect**
            let blurred = tf.tidy(() => {
                return posterized
                    .add(posterized.mean(3).expandDims(3).mul(0.1)) // Slight blur
                    .clipByValue(0, 1);
            });

            // Convert back to image
            const canvas = canvasRef.current;
            canvas.width = img.width;
            canvas.height = img.height;
            await tf.browser.toPixels(blurred.squeeze(), canvas);

            // Clean up
            tensor.dispose();
            enhanced.dispose();
            contrastAdjusted.dispose();
            posterized.dispose();
            blurred.dispose();

            return canvas.toDataURL('image/jpeg');
        } catch (err) {
            console.error('Error processing image:', err);
            throw err;
        }
    };



    const convertToGhibli = async () => {
        if (!originalImage) return;

        try {
            setIsLoading(true);
            setError(null);

            const result = await applyGhibliEffects(originalImage);
            setGhibliImage(result);
        } catch (err) {
            setError('Failed to convert image. Please try again.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    const downloadImage = () => {
        if (!ghibliImage) return;
        const link = document.createElement('a');
        link.href = ghibliImage;
        link.download = 'ghibli-style-image.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Image to Ghibli Style Converter</h1>
                    <p className="text-lg text-gray-600">
                        Transform your photos into beautiful Studio Ghibli-style artwork
                    </p>
                </div>

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        {error}
                    </div>
                )}

                <div className="bg-white shadow rounded-lg p-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Original Image */}
                        <div>
                            <h2 className="text-xl font-semibold mb-4 text-center">Original Image</h2>
                            <div
                                {...getRootProps()}
                                className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition"
                            >
                                <input {...getInputProps()} />
                                {originalImage ? (
                                    <img
                                        src={originalImage}
                                        alt="Original"
                                        className="max-h-64 mx-auto mb-4"
                                    />
                                ) : (
                                    <div>
                                        <p className="text-gray-500">
                                            Drag & drop an image here, or click to select
                                        </p>
                                        <p className="text-sm text-gray-400 mt-2">
                                            Supports JPG, PNG (Max 5MB)
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Ghibli Style Image */}
                        <div>
                            <h2 className="text-xl font-semibold mb-4 text-center">Ghibli Style</h2>
                            <div className="border-2 border-gray-300 rounded-lg p-6 min-h-64 flex items-center justify-center bg-gray-50">
                                {ghibliImage ? (
                                    <img
                                        src={ghibliImage}
                                        alt="Ghibli Style"
                                        className="max-h-64 mx-auto"
                                    />
                                ) : (
                                    <p className="text-gray-500 text-center">
                                        Your Ghibli-style image will appear here
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-center space-x-4">
                        <button
                            onClick={convertToGhibli}
                            disabled={!originalImage || isLoading}
                            className={`px-6 py-3 rounded-md font-medium text-white ${!originalImage || isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} transition`}
                        >
                            {isLoading ? 'Processing...' : 'Convert to Ghibli Style'}
                        </button>

                        {ghibliImage && (
                            <button
                                onClick={downloadImage}
                                className="px-6 py-3 rounded-md font-medium text-white bg-green-600 hover:bg-green-700 transition"
                            >
                                Download Image
                            </button>
                        )}
                    </div>
                </div>

                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">How It Works</h2>
                    <div className="space-y-4">
                        <p>
                            This tool applies Ghibli-style visual effects to your photos.
                        </p>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Upload any photo (portraits work best)</li>
                            <li>Click "Convert to Ghibli Style"</li>
                            <li>Download your transformed artwork</li>
                        </ol>
                        <p className="text-sm text-gray-500">
                            Note: For a true Ghibli style transfer, a dedicated neural network model would be needed.
                        </p>
                    </div>
                </div>
            </div>

            {/* Hidden canvas for processing */}
            <canvas ref={canvasRef} style={{ display: 'none' }} />
        </div>
    );
}