import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderImage {
  src: string;
  alt: string;
}

interface ImageSliderProps {
  images: SliderImage[];
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
    className: "w-screen overflow-hidden",
  };

  return (
    <div className="w-screen overflow-hidden -ml-[50vw] left-1/2 relative -mt-[65px]">
      <div className="w-screen">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="outline-none">
              <img
                src={image.src}
                alt={image.alt}
                className="w-screen h-screen object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
