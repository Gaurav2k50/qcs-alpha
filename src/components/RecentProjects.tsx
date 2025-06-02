"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    image: "/src/assets/images/DigitalProductDesign.jpg",
    title: "Digital Product Design",
    subtitle: "Design, Graphics",
  },
  {
    image: "/src/assets/images/Cyber-Security-Analysis.jpg",
    title: "Cyber Security Analysis",
    subtitle: "Security, Technology",
  },
  {
    image: "/src/assets/images/Health-App-Development.jpg",
    title: "Health App Development",
    subtitle: "Development, Software",
  },
  {
    image: "/src/assets/images/Trading-Analytics-System.jpg",
    title: "Trading Analytics System",
    subtitle: "Finance, Data",
  },
  {
    image: "/src/assets/images/Marketing-Strategy-Planning.jpg",
    title: "Marketing Strategy Planning",
    subtitle: "Business, Strategy",
  },
  {
    image: "/src/assets/images/Team-Collaboration-Suite.jpg",
    title: "Team Collaboration Suite",
    subtitle: "SaaS, Productivity",
  },
  {
    image: "/src/assets/images/Logistics-Dashboard.jpg",
    title: "Logistics Dashboard",
    subtitle: "Transport, Analytics",
  },
  {
    image: "/src/assets/images/AI-Chat-Assistant.jpg",
    title: "AI Chat Assistant",
    subtitle: "Artificial Intelligence",
  },
  {
    image: "/src/assets/images/E-commerce-Redesign.jpg",
    title: "E-commerce Redesign",
    subtitle: "Retail, UX/UI",
  },
];

const RecentProjects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  const handleToggle = () => {
    setShowAll((prev) => !prev);
    setTimeout(() => AOS.refresh(), 100);
  };

  return (
    <section
      className="py-20 bg-[#f7f8fa] px-6 md:px-20"
      id="our-recent-project"
    >
      <h2
        className="text-4xl font-bold text-center text-[#0f172a] mb-12 leading-snug"
        data-aos="fade-up"
      >
        Explore our recent projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className="relative group rounded-2xl overflow-hidden h-[280px] md:h-[320px]"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#02042c] to-transparent opacity-90 group-hover:opacity-95 transition-all duration-300" />
            <div className="absolute bottom-5 left-5 text-white z-10">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.subtitle}</p>
            </div>
            <div className="absolute top-5 right-5 z-10 bg-white/20 backdrop-blur p-2 rounded-lg group-hover:bg-white/30 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 3h7v7m0 0L10 21l-7-7L21 3z"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      <div
        className="text-center mt-10"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <button
          onClick={handleToggle}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-blue-700 transition-all duration-300"
        >
          {showAll ? "View Less" : "View All Projects"}
        </button>
      </div>
    </section>
  );
};

export default RecentProjects;
