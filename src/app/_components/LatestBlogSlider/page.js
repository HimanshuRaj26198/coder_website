import SliderButtons from "../SliderButtons/page";

const fetchBlogs = async () => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/posts/recently-posted`, { next: { revalidate: 60 } })
    let jsonData = await response.json();
    let blogs = jsonData.posts;
    return blogs;
}

export default async function Slider() {
    const slides = await fetchBlogs();

    return (
        <div className="relative w-full overflow-hidden"  >
            {/* Buttons */}
            <SliderButtons />

            {/* Slider */}
            <div
                id="slider-scroll"
                style={{ overflowX: "hidden" }}
                className="flex gap-4 overflow-x-auto scroll-smooth py-4 px-2"
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-64 md:w-80 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                    >
                        <a href={`/blogs/${slide.category_ref}/${slide.slug}`}>
                            <div className="relative w-full h-40 overflow-hidden rounded-t-lg">
                                <img
                                    src={slide.headerImg}
                                    alt={slide.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                {/* <span className="absolute bottom-2 right-2 px-2 py-1 text-xs font-semibold bg-black bg-opacity-50 text-white rounded">
                                    {slide.duration}
                                </span> */}

                            </div>
                        </a>
                        <div className="p-4">
                            <a
                                href={`/blogs/${slide.category_ref}/${slide.slug}`}
                                className="block font-semibold text-lg line-clamp-2"
                            >
                                {slide.title}
                            </a>
                            <p className="text-sm pt-1">
                                {/* By <a href="#" className="text-blue-600">{slide.author}</a> */}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
