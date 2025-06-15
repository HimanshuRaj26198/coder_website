"use client";

export default function SliderButtons() {
    const scrollContainer = () => document.getElementById("slider-scroll");

    const handlePrev = () => {
        scrollContainer()?.scrollBy({ left: -300, behavior: "smooth" });
    };

    const handleNext = () => {
        scrollContainer()?.scrollBy({ left: 300, behavior: "smooth" });
    };

    return (
        <>
            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-20 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                aria-label="Previous"
            >
                <ion-icon
                    name="chevron-back-outline"
                    className="text-3xl text-gray-800 dark:text-white"
                />
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center z-20 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                aria-label="Next"
            >
                <ion-icon
                    name="chevron-forward-outline"
                    className="text-3xl text-gray-800 dark:text-white"
                />
            </button>
        </>
    );
}
