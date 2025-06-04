import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import productImg1 from "../assets/images/H2ArHeGasanalyzerimg.jpg";
import productImg2 from "../assets/images/CEMS2.png";
import productImg3 from "../assets/images/Moisture meter img1.jpeg";
import productImg4 from "../assets/images/Multi components analyser1.jpg";
import productImg5 from "../assets/images/Oxygen analyzer img 2 in-situ type.jpeg";
import productImg6 from "../assets/images/pHmeter.jpeg";
// import { PageBanner } from "./PageBanner";

const services = [
  {
    image: productImg1,
    title: "Ar,He,H2 Analyzer",
    desc: "Custom web applications that are scalable, secure, and tailored to your business goals.",
  },
  {
    image: productImg2,
    title: "Continuous Emission Monitoring System (CEMS)",
    desc: "Cross-platform mobile apps with intuitive UI and high performance for iOS and Android.",
  },
  {
    image: productImg3,
    title: "Moistutre meter",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
  },
  {
    image: productImg4,
    title: "Multicomponent Gas Analyzer",
    desc: "Fast, SEO-friendly, and responsive WordPress websites that are easy to manage.",
  },
  {
    image: productImg5,
    title: "Oxygen Analyzer",
    desc: "Boost your search rankings and site speed to attract and convert more users.",
  },
  {
    image: productImg6,
    title: "pH meter and pH sensor",
    desc: "Data-driven marketing campaigns that increase visibility and deliver measurable ROI.",
  },
];

export const Products: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
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
