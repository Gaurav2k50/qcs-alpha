import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section
      className="relative w-full h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1
          className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
          data-aos="fade-up"
        >
          Empowering Innovation.
          <br />
          Engineering the Future.
        </h1>

        <p
          className="mt-6 text-lg md:text-2xl text-gray-200"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          At <span className="text-blue-500 font-semibold">StackLoop</span>, we deliver
          enterprise-grade digital solutions that drive transformation, efficiency, and
          long-term value. Partner with us to scale smarter and build a future-ready business.
        </p>

        <a
          href="/contact"
          className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-lg shadow-md"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          Schedule a Consultation
        </a>
      </div>
    </section>
  );
};
