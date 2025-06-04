import React, { useEffect } from "react";

import // MdPower,
// FaLightbulb,
// FaUserFriends,
// FaPalette,
// FaBullseye,
// FaUsers,
// FaHandshake,
"react-icons/fa";
import { MdPower } from "react-icons/md";
import { GiMineWagon } from "react-icons/gi";
import { FaIndustry } from "react-icons/fa";
import { RiFilePaper2Line } from "react-icons/ri";
import { GiOilDrum } from "react-icons/gi";
import { FaSeedling } from "react-icons/fa";
import { FaFlask } from "react-icons/fa";
import { GiBrickWall } from "react-icons/gi";
import { GiWaterRecycling } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";
import { PageBanner } from "../components/PageBanner";
import aboutImg from "../assets/images/About page img.jpg";
export const About: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <PageBanner
        title="About Us"
        description="Quantic at a Glance"
        backgroundImage={aboutImg}
      />
      {/* About Us Section */}
      <section
        className="max-w-6xl mx-auto my-16 p-8 bg-gradient-to-tr from-white via-blue-50 to-white rounded-xl shadow-lg relative overflow-hidden"
        data-aos="fade-up"
      >
        {/* <h2 className="text-4xl font-extrabold text-blue-700 mb-6 relative z-10">
          About Us
        </h2> */}
        {/* <h4 className="flex justify-center text-2xl font-bold text-blue-700 mb-6 relative z-10">
          Quantic at a Glance
        </h4> */}

        <p className="text-gray-700 text-lg leading-relaxed relative z-10">
          M/S Quantic Control System is an ISO 9001:2015 certified company as
          well as MSME organization based at Jamshedpur was the outcome of
          conscious effort of an experienced and well-balanced team of
          engineers. Since then, the aim has been to provide reliable and
          quality service to industrial users of process gas and liquid analyzer
          in India we have a strong dedicated and closely knit with technical
          knowledge in field such as application engineering, Design and after
          sales support having a dynamic utlook with sharp focus on
          customer-oriented services we are committed towards high quality,
          safety and good engineering practices which leads to customer
          satisfaction. Ne are the manufacturer of arious process gas analyzer
          continuous emissior monitoring system (CEMS), Sample probe, Sample
          Handling system and its component, lifferential pressure, flow
          transmitter, liquid analyzers & SPM/Opacity Analyzer, Autc shut off
          valve, Back pressure regulator, Dual cation column, steam and water
          analysis system (SWAS) and its component, multiparameter controller,
          Continuous Density meter and many more. Dur team relies on its
          experience of more than 100-man years our involvement starts a project
          conceptualization and goes much beyond design and selection of
          component, manufacturing commissioning and post-sales support. our
          execution team is trained to provide not only the post sales activity
          but also provide valuable feedback to our design and proposed team for
          continuous improvement of products The reliability of performance of
          any gas /liquid analyzer is directly related to the engineering and
          the design of sampling system. Here is where quantic control system
          scores highly right from simple application uch as customized design
          of R&D. Air Separation, steel plant, power generation plant & chemical
          plant.
        </p>
      </section>
      {/* Industry Served Section */}
      <section className="mb-20" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-6">Industry Served</h2>
        {/* <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
          At stackLoop, our culture defines how we work, grow, and innovate.
          Each principle shapes the way we build technology and connect as a
          team.
        </p> */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: (
                <MdPower className="text-yellow-500 w-10 h-10 mb-4 mx-auto" />
              ),
              title: "Power Plant",
              // desc: "We embrace bold ideas and fearless experimentation to stay ahead of the curve.",
              color: "hover:border-yellow-500",
            },
            {
              icon: (
                <GiMineWagon className="text-gray-700 w-10 h-10 mb-4 mx-auto" />
              ),
              title: "Coal & Ore Mine",
              // desc: "Putting users first in everything we build and every decision we make.",
              color: "hover:border-gray-700",
            },
            {
              icon: (
                <FaIndustry className="text-rose-500 w-10 h-10 mb-4 mx-auto" />
              ),
              title: "Steel Plant",
              // desc: "Encouraging imagination, problem-solving, and the freedom to think beyond limits.",
              color: "hover:border-rose-500",
            },
            {
              icon: (
                <RiFilePaper2Line className="text-emerald-500 w-10 h-10 mb-4 mx-auto" />
              ),
              title: "Paper & Pulp",
              // desc: "Delivering real, measurable outcomes with a high standard of excellence.",
              color: "hover:border-emerald-500",
            },
            {
              icon: (
                <GiOilDrum className="text-indigo-600 w-10 h-10 mb-4 mx-auto" />
              ),
              title: "Petrochemical",
              // desc: "We thrive on differences and cultivate a space where everyone feels seen and valued.",
              color: "hover:border-indigo-600",
            },
            {
              icon: (
                <FaSeedling className="text-green-600 w-10 h-10 mb-4 mx-auto" />
              ),
              title: "Fertilizer plant",
              // desc: "Working as one—sharing knowledge, supporting teammates, and growing together.",
              color: "hover:border-green-600",
            },
            {
              icon: (
                <FaFlask className="text-purple-600 w-10 h-10 mb-4 mx-auto" />
              ),
              title: "Chemical plant",
              // desc: "Working as one—sharing knowledge, supporting teammates, and growing together.",
              color: "hover:border-purple-600",
            },
            {
              icon: (
                <GiBrickWall className="text-yellow-700 w-10 h-10 mb-4 mx-auto" />
              ),
              title: "Cement plant",
              // desc: "Working as one—sharing knowledge, supporting teammates, and growing together.",
              color: "hover:border-yellow-700",
            },
            {
              icon: (
                <GiWaterRecycling className="text-blue-600 w-10 h-10 mb-4 mx-auto" />
              ),
              title: "Water & Waste Water",
              // desc: "Working as one—sharing knowledge, supporting teammates, and growing together.",
              color: "hover:border-blue-500",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`bg-white p-6 border-2 border-transparent rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer ${item.color}`}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <div>{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {item.title}
              </h3>
              {/* <p className="text-gray-600 text-base text-center">{item.desc}</p> */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
