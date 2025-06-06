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

import gasAnalyzersComponents1 from "../assets/images/gas-analyzrs-component/3-way-ball-Valve-QCS-1.png";
import gasAnalyzersComponents2 from "../assets/images/gas-analyzrs-component/Dual-Stage-Cylinder-Regulator-QCS-2.png";
import gasAnalyzersComponents3 from "../assets/images/gas-analyzrs-component/Line-Regulator-QCS-3.png";
import gasAnalyzersComponents4 from "../assets/images/gas-analyzrs-component/Male-Connector-QCS-4.png";
import gasAnalyzersComponents5 from "../assets/images/gas-analyzrs-component/Moistrue-Trapper-QCS-5.png";
import gasAnalyzersComponents6 from "../assets/images/gas-analyzrs-component/Needle-Valve-QCS-6.png";
import gasAnalyzersComponents7 from "../assets/images/gas-analyzrs-component/Tee-QCS-7.png";
import gasAnalyzersComponents8 from "../assets/images/gas-analyzrs-component/QCS-Flowmeter-Photoroom-8.png";

import probe1 from "../assets/images/probes&filters/Probe.png";
import probe2 from "../assets/images/probes&filters/Sample-Filter-Housing.png";
import probe3 from "../assets/images/probes&filters/Sample-Probe-For-In-Situ Zirconia Analyzer.png";

import other1 from "../assets/images/other-accessories/Temperature-Sensor.png";
import other2 from "../assets/images/other-accessories/Tabular-Furnace.jpeg";

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
    title: "Sample Handling System Process",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "Sample Handling System",
  },

  {
    image: gasAnalyzersComponents1,
    title: "3-Way Ball Valve",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "Gas Analysis Components",
  },
  {
    image: gasAnalyzersComponents2,
    title: "Dual Stage Cylinder Regulator",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "Gas Analysis Components",
  },
  {
    image: gasAnalyzersComponents3,
    title: "Line Regulator",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "Gas Analysis Components",
  },
  {
    image: gasAnalyzersComponents4,
    title: "Male Connector",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "Gas Analysis Components",
  },
  {
    image: gasAnalyzersComponents5,
    title: "Moisture Trapper",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "Gas Analysis Components",
  },
  {
    image: gasAnalyzersComponents6,
    title: "Needle Valve",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "Gas Analysis Components",
  },
  {
    image: gasAnalyzersComponents7,
    title: "Tee",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "Gas Analysis Components",
  },
  {
    image: gasAnalyzersComponents8,
    title: "Flowmeter",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "Gas Analysis Components",
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
    image: probe1,
    title: "Probe",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "Probes & Filters",
  },
  {
    image: probe2,
    title: "Sample Gas Filter Housing",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "Probes & Filters",
  },
  {
    image: probe3,
    title: "Sample Probe for In-situ Zirconia Analyzer",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
    category: "Probes & Filters",
  },
  {
    image: other1,
    title: "Temperature Sensor",
    desc: "Data-driven marketing campaigns that increase visibility and deliver measurable ROI.",
    category: "Other Accessories",
  },
  {
    image: other2,
    title: "Tabuler Furnace",
    desc: "Data-driven marketing campaigns that increase visibility and deliver measurable ROI.",
    category: "Other Accessories",
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

interface ProductsProps {
  limit?: number;
}

export const Products: React.FC<ProductsProps> = ({ limit }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  // Apply the limit only if it's provided
  const displayedProducts = limit
    ? filteredProducts.slice(0, limit)
    : filteredProducts;

  return (
    <section className="bg-[#f7f8fa] py-16 px-6 md:px-20">
      <h2
        className="text-4xl font-bold text-center text-[#0f172a] mb-12 leading-snug"
        data-aos="fade-up"
      >
        {limit ? "Featured Products" : "All Products"}
      </h2>

      {/* Category Filter - Only show if not limited */}
      {!limit && (
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
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedProducts.map((service, index) => (
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

      {/* View All Products button - Only show if limited */}
      {limit && displayedProducts.length > 0 && (
        <div className="text-center mt-12">
          <a
            href="/products"
            className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300"
          >
            View All Products
          </a>
        </div>
      )}
    </section>
  );
};
