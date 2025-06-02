import React, { useEffect } from "react";
import AOS from "aos";
import { HeroSection } from "../components/HeroSection";
import { Testimonials } from "../components/Testimonials";
import { ServiceProvider } from "../components/ServiceProvider";
import RecentProjects from "../components/RecentProjects";
import teamImage from "../assets/images/team.jpg";
import teamImage2 from "../assets/images/team-a.jpg";

import "aos/dist/aos.css";

export const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <HeroSection />

      {/* Hero Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-16">
          <div data-aos="fade-up">
            <div className="mx-auto w-16 h-16 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl">
              👨‍💻
            </div>
            <h3 className="text-lg font-bold mt-4">Highly Expert Team</h3>
            <p className="text-gray-600 mt-2">
              We provide the most responsive and functional IT design
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <div className="mx-auto w-16 h-16 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl">
              🎧
            </div>
            <h3 className="text-lg font-bold mt-4">24/7 Customer Service</h3>
            <p className="text-gray-600 mt-2">
              We provide the most responsive and functional IT design
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <div className="mx-auto w-16 h-16 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl">
              💰
            </div>
            <h3 className="text-lg font-bold mt-4">Competitive Pricing</h3>
            <p className="text-gray-600 mt-2">
              We provide the most responsive and functional IT design
            </p>
          </div>
        </div>

        {/* Lower Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <div className="relative w-full">
              <img
                src={teamImage}
                alt="Team working"
                className="rounded-2xl w-full"
              />
              <img
                src={teamImage2}
                alt="Smiling team"
                className="absolute bottom-[-30px] right-[-30px] w-1/2 border-4 border-white rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div data-aos="fade-left">
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
          </div>
        </div>
      </section>
      <ServiceProvider />
      <RecentProjects />
      <Testimonials />
    </>
  );
};
