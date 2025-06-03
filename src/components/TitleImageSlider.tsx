import React from "react";

interface Slide {
  src: string;
  title: string;
}

interface TitleImageSliderProps {
  slides: Slide[];
}

export const TitleImageSlider: React.FC<TitleImageSliderProps> = ({
  slides,
}) => {
  return (
    <div className="overflow-hidden">
      <div className="flex animate-slide whitespace-nowrap">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full md:w-96 flex-shrink-0 mx-4 bg-white shadow-lg rounded-lg p-4 text-center"
          >
            <img
              src={slide.src}
              alt={slide.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">{slide.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
