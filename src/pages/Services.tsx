import React from "react";

import serviceImage from "../assets/images/serviceImage.png";
import web_development_2 from "../assets/images/web_development_2.png";

import { ServiceCard } from "../components/ServiceCard";
import FAQSection from "../components/FAQSection";

const Services: React.FC = () => {
  interface ReasonCard {
    text: string;
    bg: string;
  }

  const reasons: ReasonCard[] = [
    { text: "Expertise & Experience", bg: "bg-[#0066A1]" },
    { text: "Competitive Pricing", bg: "bg-[#FF7B6F]" },
    { text: "Quality Assurance", bg: "bg-[#FF7B6F]" },
    { text: "Timely Delivery", bg: "bg-[#0066A1]" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* 🖼️ Hero Image + Text Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 mb-20 gap-12">
        <div className="md:w-1/2 flex justify-center">
          <div className="relative transform hover:scale-105 transition-transform duration-300">
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-[#FF7B6F] z-0 rounded-lg"></div>
            <img
              src={serviceImage}
              alt="Service"
              className="relative z-10 rounded-lg max-w-[400px] shadow-xl"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 md:pl-8 space-y-6">
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            StackLoop specializes in providing responsive and compelling web
            development services that transform your digital presence.
          </p>
          <button className="mt-6 px-8 py-3 bg-[#FF7B6F] text-white rounded-full font-semibold shadow-lg hover:bg-[#ff4c4c] hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>

      <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-10 mb-16">
        {/* Left: Text Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-[27px] font-extrabold leading-[32px] text-[#1A2954]">
            Web Development Services
          </h2>
          <p className="text-sm text-[#1A2954] font-medium">
            Comprehensive Web Development Services by CodeTribe Solutions Pvt.
            Ltd.
          </p>
          <div className="w-12 h-[3px] bg-red-400 mx-auto md:mx-0 my-3"></div>
          <p className="text-gray-600 leading-relaxed">
            A strong and visually appealing website is crucial for businesses in
            the modern digital era. Our complete web development services at
            CodeTribe Solutions Pvt. Ltd. include beautifully crafted,
            user-friendly websites that generate real results. We use the latest
            platforms and frameworks because we are the greatest web designers.
          </p>
          <button className="mt-6 px-6 py-2 bg-[#FF6B6B] text-white rounded-full font-semibold shadow-md hover:bg-[#ff4c4c] transition">
            Explore Portfolio
          </button>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-black z-0 rounded-md"></div>
            <img
              src={web_development_2}
              alt="Service"
              className="relative z-10 rounded-md max-w-[320px] shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 px-4">
        <ServiceCard
          title="E-Commerce Website Development"
          description="We build optimized online stores using the latest platforms and frameworks to convert visitors into loyal customers."
          className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
        />
        <ServiceCard
          title="Web Application Development"
          description="Our interactive web applications enhance user engagement with feature-rich and user-centric designs."
          className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
        />
        <ServiceCard
          title="Enterprise Application Development"
          description="We develop scalable enterprise applications tailored to your business needs, ensuring efficiency and growth."
          className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
        />
      </div>

      {/* Web Development process */}
      <section className="flex flex-col md:flex-row items-start justify-between gap-12 px-8 md:px-16 mb-20 bg-gradient-to-br from-[#f7f7f7] to-white py-16 rounded-2xl shadow-lg">
        {/* Left: Text Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-[#0066A1] relative">
            Web Development Process
            <div className="w-20 h-1 bg-[#FF7B6F] mt-4"></div>
          </h2>

          <p className="text-[#1A1A1A] text-base leading-relaxed">
            Understanding your identity, work, and goals thoroughly is the first
            step in any web development project. The creation of smart web
            design solutions that deliver the desired messages and represent
            your unique brand identity is aided by this. Great design requires
            strong collaboration with the client because it doesn't just happen.
            It's a team effort that necessitates communication, wisdom, and
            endurance. We include our clients and take their opinions into
            account at every stage until the design is finished.
          </p>
        </div>

        {/* Right: Pill Buttons */}
        <div className="md:w-1/2 flex flex-col gap-6">
          {["Planning", "Designing", "Development", "Execution"].map(
            (step, index) => (
              <div
                key={step}
                className="group bg-white text-[#FF7B6F] font-semibold text-lg py-5 px-10 rounded-full shadow-[0_4px_16px_rgba(255,123,111,0.2)] hover:shadow-[0_4px_20px_rgba(255,123,111,0.4)] text-center transform hover:scale-105 transition-all duration-300 flex items-center"
              >
                <span className="w-8 h-8 rounded-full bg-[#FF7B6F] text-white flex items-center justify-center mr-4 group-hover:bg-[#0066A1] transition-colors">
                  {index + 1}
                </span>
                {step}
              </div>
            )
          )}
        </div>
      </section>

      {/* Reasons To Choose Us */}
      <section className="mb-20 px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1A2954] mb-4">
            Reasons To Choose Us
          </h2>
          <div className="w-20 h-1 bg-[#FF7B6F] mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.text}
              className={`${reason.bg} text-white font-semibold text-center py-8 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center min-h-[120px]`}
            >
              <div>
                <div className="text-3xl font-bold mb-2">
                  {(index + 1).toString().padStart(2, "0")}
                </div>
                {reason.text}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="mb-20 px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1A2954] mb-4">
            Technologies We Use
          </h2>
          <div className="w-20 h-1 bg-[#FF7B6F] mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-gradient-to-br from-[#001021] to-[#002042] text-white p-8 rounded-xl shadow-xl">
            <p className="text-base leading-relaxed">
              We leverage cutting-edge technologies to create robust and
              scalable solutions. Our tech stack includes modern frameworks and
              tools that enable us to build high-performance applications with
              exceptional user experiences.
            </p>
            <div className="mt-6 w-12 h-[2px] bg-[#FF7B6F]"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              "Next JS",
              "React JS",
              "MongoDB",
              "MySQL",
              "Node JS",
              "TypeScript",
            ].map((tech) => (
              <div
                key={tech}
                className="bg-white text-[#FF7B6F] text-center font-semibold py-4 px-4 rounded-lg shadow-lg hover:bg-[#FF7B6F] hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Development Services Highlight Section */}
      <section className="mb-20 px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 shadow-lg">
          <img
            src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg"
            alt="Web Development"
            className="rounded-lg shadow-xl mx-auto  transform hover:scale-105 transition-all duration-300"
          />
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#1A2954]">
              Web Development Excellence
            </h3>
            <div className="w-12 h-1 bg-[#FF7B6F]"></div>
            <p className="text-[#FF7B6F] text-lg italic font-medium">
              "Transforming your vision into digital reality with cutting-edge
              web development solutions."
            </p>
            <button className="mt-4 px-8 py-3 bg-[#FF7B6F] text-white rounded-full font-semibold shadow-lg hover:bg-[#ff4c4c] hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
          </div>
        </div>
      </section>
      <FAQSection />
    </div>
  );
};

export default Services;
