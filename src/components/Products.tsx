import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import gasAnalyzer1 from "../assets/images/gas-analyzers/H2,Ar,He-Gas-analyzer-1.jpg";
import gasAnalyzer2 from "../assets/images/gas-analyzers/CEMS-2.jpg";
import gasAnalyzer3 from "../assets/images/gas-analyzers/Moisture-meter-3.jpeg";
import gasAnalyzer4 from "../assets/images/gas-analyzers/Multi-components-analyser-4.jpg";
import gasAnalyzer5 from "../assets/images/gas-analyzers/oxygen-analyzer-5.jpg";
import gasAnalyzer6 from "../assets/images/gas-analyzers/Oxygen-analyzer-6.jpeg";
import gasAnalyzer7 from "../assets/images/gas-analyzers/trace-7.png";

import liquidAnalyzer1 from "../assets/images/liquid-analyzers/conductivity-meter-1.png";
import liquidAnalyzer2 from "../assets/images/liquid-analyzers/ph-meter-2.png";

import sampleHandlingSystem1 from "../assets/images/sample-handling-system/SHS-hydrogen-1.jpeg";
import sampleHandlingSystem2 from "../assets/images/sample-handling-system/SHS-air-seperation-2.jpeg";
import sampleHandlingSystem3 from "../assets/images/sample-handling-system/SHS-process-3.jpeg";
import sampleHandlingSystem4 from "../assets/images/sample-handling-system/SHS-process-3.jpeg";

import swas1 from "../assets/images/SWAS & it's Components/SWAS-Panel-1.png";
import swas2 from "../assets/images/SWAS & it's Components/QCS-Sample-cooler2.jpg";
import swas3 from "../assets/images/SWAS & it's Components/QCS-Dual-Cation-Column-3.jpeg";

import productImg4 from "../assets/images/Multi components analyser1.jpg";
import productImg5 from "../assets/images/Oxygen analyzer img 2 in-situ type.jpeg";
import productImg6 from "../assets/images/pHmeter.jpeg";

const services = [
  {
    image: gasAnalyzer1,
    title: "Ar,He,H2 TCD-Analyzer",
    desc: "Custom web applications that are scalable, secure, and tailored to your business goals.",
    category: "Gas Analyzers",
  },
  {
    image: gasAnalyzer2,
    title: "CEMS Analyzer",
    desc: "Custom web applications that are scalable, secure, and tailored to your business goals.",
    category: "Gas Analyzers",
  },
  {
    image: gasAnalyzer3,
    title: "Moisture Meter",
    desc: "Custom web applications that are scalable, secure, and tailored to your business goals.",
    category: "Gas Analyzers",
  },
  {
    image: gasAnalyzer4,
    title: "Multi-component Gas Analyzer",
    desc: "Custom web applications that are scalable, secure, and tailored to your business goals.",
    category: "Gas Analyzers",
  },
  {
    image: gasAnalyzer5,
    title: "Oxygen Analyzer",
    desc: "Custom web applications that are scalable, secure, and tailored to your business goals.",
    category: "Gas Analyzers",
  },
  {
    image: gasAnalyzer6,
    title: "In-situ Oxygen Analyzer",
    desc: "Custom web applications that are scalable, secure, and tailored to your business goals.",
    category: "Gas Analyzers",
  },
  {
    image: gasAnalyzer7,
    title: "Trace Nitrogen Analyzer",
    desc: "Custom web applications that are scalable, secure, and tailored to your business goals.",
    category: "Gas Analyzers",
  },
  {
    image: liquidAnalyzer1,
    title: "Conductivity Meter",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "Liquid Analyzers",
  },
  {
    image: liquidAnalyzer2,
    title: "pH Meter",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "Liquid Analyzers",
  },
  {
    image: sampleHandlingSystem1,
    title: "Sample Handling System hydrogen",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "Sample Handling System",
  },
  {
    image: sampleHandlingSystem2,
    title: "Sample Handling System Air Separation",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "Sample Handling System",
  },
  {
    image: sampleHandlingSystem3,
    title: "Sample Handling System Process",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "Sample Handling System",
  },
  {
    image: sampleHandlingSystem4,
    title: "Sample Handling System Process Auto Purging And Calibration",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "Sample Handling System",
  },

  {
    image: swas1,
    title: "SWAS Panel Dry & Wet",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "SWAS & It's Components",
  },
  {
    image: swas2,
    title: "Sample Cooler",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "SWAS & It's Components",
  },
  {
    image: swas3,
    title: "Dual Cation Column",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "SWAS & It's Components",
  },
  {
    image: productImg4,
    title: "Multicomponent Gas Analyzer",
    desc: "Fast, SEO-friendly, and responsive WordPress websites that are easy to manage.",
    category: "Analyzers",
  },

  {
    image: productImg5,
    title: "Oxygen Analyzer",
    desc: "Boost your search rankings and site speed to attract and convert more users.",
    category: "Analyzers",
  },
  {
    image: productImg6,
    title: "pH meter and pH sensor",
    desc: "Data-driven marketing campaigns that increase visibility and deliver measurable ROI.",
    category: "Meters",
  },
];

const categories = [
  "All",
  "Gas Analyzers",
  "Liquid Analyzers",
  "Sample Handling System",
  "Gas Analysis Components",
  "SWAS & It's Components",
  "Probes & Filters",
  "Other Accessories",
];

export const Products: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  return (
    <section className="bg-[#f7f8fa] py-16 px-6 md:px-20">
      {/* <PageBanner
        title="About Us"
        description="Quantic at a Glance"
        backgroundImage={productImg6}
      /> */}
      <h2
        className="text-4xl font-bold text-center text-[#0f172a] mb-12 leading-snug"
        data-aos="fade-up"
      >
        All Products
      </h2>

      {/* Category Filter */}
      <div
        className="flex justify-center gap-4 mb-8 flex-wrap"
        data-aos="fade-up"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              selectedCategory === category
                ? "bg-indigo-600 text-white"
                : "bg-white text-indigo-600 hover:bg-indigo-50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-gray-200 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h3 className="text-lg font-semibold text-[#0f172a] mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
            <a
              href="#"
              className="text-indigo-600 font-medium text-sm hover:underline flex items-center gap-1"
            >
              Learn More <span>→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
