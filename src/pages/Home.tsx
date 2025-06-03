import React, { useEffect } from "react";
import AOS from "aos";
// import { HeroSection } from "../components/HeroSection";
// import { Testimonials } from "../components/Testimonials";
import { Products } from "../components/Products";
// import RecentProjects from "../components/RecentProjects";
import { ImageSlider } from "../components/ImageSlider";
import steelImg from "../assets/images/Steelplant.jpg";
import petrochemicalImg from "../assets/images/Petrochemicals.jpg";
import fertilizerImg from "../assets/images/fertilizerPlant .jpg";
import waterImg from "../assets/images/WasteWaterplant.jpg";
import paperImg from "../assets/images/Paper&pulpindustry.jpg";
import chemicalImg from "../assets/images/Chemical plant.jpg";
import coalImg from "../assets/images/Coal&ore.jpg";
import cementImg from "../assets/images/CementIndustry.jpg";
import powerImg from "../assets/images/Powerplant.jpg";
import bannerImg from "../assets/images/Home Page Banner img.jpg";
import aboutImg from "../assets/images/About page img.jpg";
import productImg from "../assets/images/Product page img.jpg";
import supportImg from "../assets/images/Support page img.jpg";

import "aos/dist/aos.css";
import { TitleImageSlider } from "../components/TitleImageSlider";

export const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sliderImages = [
    { src: bannerImg, alt: "Home Banner" },
    { src: aboutImg, alt: "About Us" },
    { src: productImg, alt: "Our Products" },
    { src: supportImg, alt: "Support Services" },
  ];

  return (
    <>
      {/* <HeroSection /> */}
      {/* Image Slider Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div data-aos="fade-up">
          <div className="max-w-6xl mx-auto">
            <ImageSlider images={sliderImages} />
          </div>
        </div>
      </section>
      {/* Hero Section */}
      <Products />

      {/* Title + Image Slider Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <TitleImageSlider
            slides={[
              { src: powerImg, title: "Power Plant" },
              { src: petrochemicalImg, title: "Petrochemical" },
              { src: steelImg, title: "Steel Plant" },
              { src: fertilizerImg, title: "Fertilizer plant" },
              { src: waterImg, title: "Water & Waste Water" },
              { src: paperImg, title: "Paper & Pulp" },
              { src: chemicalImg, title: "Chemical plant" },
              { src: coalImg, title: "Coal & Ore Mine" },
              { src: cementImg, title: "Cement plant" },
            ]}
          />
        </div>
      </section>
      <section className="py-16 px-6 md:px-20 bg-white">
        <h1 className="flex items-center justify-center py-5 text-2xl font-semibold ">
          🌟Core Value
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center mb-16">
          <div data-aos="fade-up">
            <div className="mx-auto w-16 h-16 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl">
              🎯
            </div>
            <h3 className="text-lg font-bold mt-4">Precision</h3>
            <p className="text-gray-600 mt-2">
              precision redifined where accuracy meets excllence
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <div className="mx-auto w-16 h-16 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl">
              🛡️
            </div>
            <h3 className="text-lg font-bold mt-4">Integrty</h3>
            <p className="text-gray-600 mt-2">
              Integrity illuminated Guiding every decision which honestly
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <div className="mx-auto w-16 h-16 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl">
              😊
            </div>
            <h3 className="text-lg font-bold mt-4">Satisfaction</h3>
            <p className="text-gray-600 mt-2">
              precision redifined where accuracy meets excllence
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <div className="mx-auto w-16 h-16 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl">
              🔒
            </div>
            <h3 className="text-lg font-bold mt-4">Reliability</h3>
            <p className="text-gray-600 mt-2">
              precision redifined where accuracy meets excllence
            </p>
          </div>
        </div>

        {/* Lower Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <div className="relative w-full">
              {/* <img
                src={teamImage}
                alt="Team working"
                className="rounded-2xl w-full"
              />
              <img
                src={teamImage2}
                alt="Smiling team"
                className="absolute bottom-[-30px] right-[-30px] w-1/2 border-4 border-white rounded-2xl shadow-lg"
              /> */}
            </div>
          </div>

          {/* <div data-aos="fade-left">
            <h2 className="text-4xl font-bold text-gray-900">
              More than 25+ years we provide IT solutions
            </h2>
            <p className="mt-4 text-blue-600 font-semibold">
              During this time, we’ve built a reputation for excellent client
              satisfaction as evidenced by our...
            </p>
            <p className="mt-4 text-gray-600">
              Each demo built with Teba will look different. You can customize
              almost anything in the appearance of your website with only a few
              clicks. Each demo built with Teba will look different.
            </p>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
              More About Us
            </button>
          </div> */}
        </div>
      </section>
      {/* <RecentProjects /> */}
      {/* <Testimonials /> */}
    </>
  );
};
