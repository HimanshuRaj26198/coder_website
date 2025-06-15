"use client"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomSlider = ({ array }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return <>
        <div className="logo-slider w-full p-4">
            {/* <h2 className="text-center text-lg font-bold mb-4">Our Partners</h2> */}
            <Slider {...settings}>
                {array.map((item, index) => (
                    <div key={index} className="px-2">
                        <img
                            src={item.logoUrl}
                            alt={item.imgAlt}
                            className="mx-auto h-16 object-contain"
                        />
                    </div>
                ))}
            </Slider>
        </div></>
}

export default CustomSlider;