'use client';

import { useState } from 'react';
import imageCompression from 'browser-image-compression';

export default function ImageUploader() {
    const [file, setFile] = useState(null);
    const [compressedFile, setCompressedFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [compressionPercentage, setCompressionPercentage] = useState(50); // Default compression percentage
    const [outputFormat, setOutputFormat] = useState('jpeg'); // Default output format
    const [progress, setProgress] = useState(0); // Compression progress
    const [isDragging, setIsDragging] = useState(false); // Drag-and-drop state
    const [isDownloaded, setIsDownloaded] = useState(false); // Track if the image has been downloaded

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
        }
    };

    const handleCompress = async () => {
        if (!file) return;

        setIsLoading(true);
        setProgress(0);

        const options = {
            maxSizeMB: (file.size / 1024 / 1024) * (compressionPercentage / 100), // Adjust size based on percentage
            maxWidthOrHeight: 1024,
            useWebWorker: true,
            onProgress: (progress) => setProgress(progress), // Track progress
        };

        try {
            const compressed = await imageCompression(file, options);

            // Convert to the selected format
            const blob = await fetch(URL.createObjectURL(compressed))
                .then((res) => res.blob())
                .then((blob) => {
                    if (outputFormat === 'png') {
                        return new Blob([blob], { type: 'image/png' });
                    } else if (outputFormat === 'webp') {
                        return new Blob([blob], { type: 'image/webp' });
                    } else {
                        return new Blob([blob], { type: 'image/jpeg' });
                    }
                });

            setCompressedFile(new File([blob], `compressed-image.${outputFormat}`, { type: blob.type }));
        } catch (error) {
            console.error('Error compressing image:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDownload = () => {
        setIsDownloaded(true); // Set the download state to true
    };

    const resetUploader = () => {
        setFile(null);
        setCompressedFile(null);
        setIsDownloaded(false); // Reset the download state
    };

    // Calculate estimated output size
    const estimatedOutputSize = file
        ? ((file.size / 1024) * (compressionPercentage / 100)).toFixed(2)
        : 0;

    return (
        <div className="bg-gradient-to-br from-purple-50 to-blue-50">
            <div className="container mx-auto px-4">
                <div className="bg-white p-8 rounded-xl shadow-2xl">
                    {isDownloaded ? (
                        // Thank You Message and Reset Button
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Thank You!</h2>
                            <p className="text-gray-600 mb-6">
                                Your image has been compressed and downloaded successfully.
                            </p>
                            <button
                                onClick={resetUploader}
                                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all"
                            >
                                Want to compress another image? Click here.
                            </button>
                        </div>
                    ) : (
                        // Original Image Uploader Content
                        <>
                            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Compressor</h2>

                            {/* Drag-and-Drop File Upload */}
                            <div
                                className={`mb-6 p-8 border-2 border-dashed rounded-lg text-center transition-all ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50'
                                    }`}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                            >
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="hidden"
                                    id="fileInput"
                                />
                                <label
                                    htmlFor="fileInput"
                                    className="cursor-pointer flex flex-col items-center justify-center space-y-4"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-12 w-12 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                                        />
                                    </svg>
                                    <p className="text-gray-600">
                                        Drag and drop an image or{' '}
                                        <span className="text-blue-500 hover:text-blue-600">browse</span>
                                    </p>
                                    {file && (
                                        <p className="text-sm text-gray-500">
                                            Selected file: <span className="font-medium">{file.name}</span>
                                        </p>
                                    )}
                                </label>
                            </div>

                            {/* Compression Percentage Slider */}
                            <div className="mb-6">
                                <label className="block mb-2 text-gray-700">
                                    Compression Percentage: {compressionPercentage}%
                                </label>
                                <input
                                    type="range"
                                    min="1"
                                    max="100"
                                    value={compressionPercentage}
                                    onChange={(e) => setCompressionPercentage(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>

                            {/* Output Format Selection */}
                            <div className="mb-6">
                                <label className="block mb-2 text-gray-700">Output Format:</label>
                                <div className="flex space-x-4">
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            value="jpeg"
                                            checked={outputFormat === 'jpeg'}
                                            onChange={() => setOutputFormat('jpeg')}
                                            className="mr-2"
                                        />
                                        JPEG
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            value="png"
                                            checked={outputFormat === 'png'}
                                            onChange={() => setOutputFormat('png')}
                                            className="mr-2"
                                        />
                                        PNG
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            value="webp"
                                            checked={outputFormat === 'webp'}
                                            onChange={() => setOutputFormat('webp')}
                                            className="mr-2"
                                        />
                                        WebP
                                    </label>
                                </div>
                            </div>

                            {/* File Size Display */}
                            {file && (
                                <div className="mb-6 flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-700">
                                            Original Size: <span className="font-medium">{(file.size / 1024).toFixed(2)} KB</span>
                                        </p>
                                        <p className="text-gray-700">
                                            Estimated Output Size: <span className="font-medium">{estimatedOutputSize} KB</span>
                                        </p>
                                    </div>
                                    {/* Output Image Preview */}
                                    <div className="w-24 h-24 flex items-center justify-center border border-gray-300 rounded-lg overflow-hidden">
                                        {isLoading ? (
                                            <div className="animate-spin">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-blue-500"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                    />
                                                </svg>
                                            </div>
                                        ) : compressedFile ? (
                                            <img
                                                src={URL.createObjectURL(compressedFile)}
                                                alt="Output Preview"
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <span className="text-gray-400">Preview</span>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Progress Bar */}
                            {isLoading && (
                                <div className="mb-6">
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div
                                            className="bg-green-500 h-2.5 rounded-full transition-all"
                                            style={{ width: `${progress}%` }}
                                        ></div>
                                    </div>
                                    <p className="text-gray-700 mt-2">Compressing: {progress.toFixed(0)}%</p>
                                </div>
                            )}

                            {/* Compress Button */}
                            <button
                                onClick={handleCompress}
                                disabled={isLoading || !file}
                                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 disabled:opacity-50 transition-all"
                            >
                                {isLoading ? 'Compressing...' : 'Compress Image'}
                            </button>

                            {/* Download Link */}
                            {compressedFile && (
                                <div className="mt-6 text-center">
                                    <p className="text-gray-700">
                                        Compressed Size: <span className="font-medium">{(compressedFile.size / 1024).toFixed(2)} KB</span>
                                    </p>
                                    <a
                                        href={URL.createObjectURL(compressedFile)}
                                        download={`compressed-image.${outputFormat}`}
                                        onClick={handleDownload}
                                        className="inline-block mt-2 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-all"
                                    >
                                        Download Compressed Image
                                    </a>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}