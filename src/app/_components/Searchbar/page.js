"use client";
import { useState, useEffect, useRef } from "react";
import "./searchbar.css";

const Searchbar = () => {
    const [query, setQuery] = useState("");
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false); // Controls dropdown visibility
    const dropdownRef = useRef(null); // Ref for detecting outside clicks

    const handleSearch = async (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.trim() === "") {
            setFilteredArticles([]);
            setShowDropdown(false);
            return;
        }

        try {
            const res = await fetch("/api/posts/search-posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ searchTerm: value }),
            });

            const { posts } = await res.json();
            setFilteredArticles(posts);
            setShowDropdown(posts.length > 0); // Show dropdown only if there are results
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };

    // Function to close dropdown when clicking outside
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowDropdown(false);
        }
    };

    // Show dropdown again when input is focused (if results exist)
    const handleFocus = () => {
        if (filteredArticles.length > 0) {
            setShowDropdown(true);
        }
    };

    // Attach and remove event listener for outside clicks
    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} className="relative w-full md:w-1/3">
            <input
                id="post_searchbar"
                type="text"
                value={query}
                onChange={handleSearch}
                onFocus={handleFocus} // Show dropdown when input is focused
                placeholder="Search a topic..."
                className="p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ boxShadow: "0px 0px 2px 1px rgba(0, 0, 0, 0.7)", height: 35 }}
            />

            {/* Dropdown Section */}
            {showDropdown && filteredArticles.length > 0 && (
                <div className="absolute left-0 right-0 mt-10 md:mt-1 bg-white border border-gray-300 rounded-md shadow-md max-h-48 overflow-y-auto z-10">
                    {filteredArticles.map((article, index) => (
                        <a href={`/blogs/${article.category_ref}/${article.slug}`} >
                            <div
                                key={index}
                                className="p-2 cursor-pointer hover:bg-gray-100"
                                onClick={() => {
                                    setQuery(article.title);
                                    setShowDropdown(false); // Hide dropdown on selection
                                }}
                            >
                                {article.title}
                            </div>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Searchbar;
