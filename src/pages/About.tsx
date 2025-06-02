import React, { useEffect } from "react";

import { TeamMemberCard } from "../components/TeamMemberCard";

import {
  FaLightbulb,
  FaUserFriends,
  FaPalette,
  FaBullseye,
  FaUsers,
  FaHandshake,
  FaQuoteLeft,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
export const About: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* About Us Section */}
      <section
        className="max-w-6xl mx-auto my-16 p-8 bg-gradient-to-tr from-white via-blue-50 to-white rounded-xl shadow-lg relative overflow-hidden"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-extrabold text-blue-700 mb-6 relative z-10">
          About Us
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed relative z-10">
          stackLoop Pvt Ltd is a startup IT company highly rated in India. We
          specialize in developing creative and innovative software solutions
          for various fields. Our professional team has a wealth of experience
          in creating cutting-edge software products that help our clients
          achieve their goals and grow their businesses.
          <br />
          <br />
          Our approach is customer-centric; we strive to understand the unique
          needs of our customers to provide customized solutions that truly meet
          their needs. We offer a variety of services including web development,
          mobile app, software development, UI/UX design, and digital marketing,
          serving diverse industries such as healthcare, education, gaming,
          social, and e-commerce.
          <br />
          <br />
          The stackLoop team consists of experienced and motivated professionals
          committed to creating added value for our clients by delivering
          advanced digital services. Keeping pace with the rapidly evolving IT
          market, we consistently provide reliable and impactful solutions. Join
          us in pushing the boundaries of technology and creativity to create a
          better digital future together.
        </p>
      </section>

      {/* Our Culture Section */}

      {/* Our Culture Section */}
      <section className="mb-20" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-6">Our Culture</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
          At stackLoop, our culture defines how we work, grow, and innovate.
          Each principle shapes the way we build technology and connect as a
          team.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: (
                <FaLightbulb className="text-yellow-400 w-10 h-10 mb-4 mx-auto" />
              ),
              title: "Innovation",
              desc: "We embrace bold ideas and fearless experimentation to stay ahead of the curve.",
              color: "hover:border-yellow-400",
            },
            {
              icon: (
                <FaUserFriends className="text-blue-500 w-10 h-10 mb-4 mx-auto" />
              ),
              title: "Customer Focus",
              desc: "Putting users first in everything we build and every decision we make.",
              color: "hover:border-blue-500",
            },
            {
              icon: (
                <FaPalette className="text-pink-500 w-10 h-10 mb-4 mx-auto" />
              ),
              title: "Creativity",
              desc: "Encouraging imagination, problem-solving, and the freedom to think beyond limits.",
              color: "hover:border-pink-500",
            },
            {
              icon: (
                <FaBullseye className="text-green-500 w-10 h-10 mb-4 mx-auto" />
              ),
              title: "Results-Driven",
              desc: "Delivering real, measurable outcomes with a high standard of excellence.",
              color: "hover:border-green-500",
            },
            {
              icon: (
                <FaUsers className="text-purple-600 w-10 h-10 mb-4 mx-auto" />
              ),
              title: "Diversity & Inclusion",
              desc: "We thrive on differences and cultivate a space where everyone feels seen and valued.",
              color: "hover:border-purple-600",
            },
            {
              icon: (
                <FaHandshake className="text-red-500 w-10 h-10 mb-4 mx-auto" />
              ),
              title: "Collaboration",
              desc: "Working as one—sharing knowledge, supporting teammates, and growing together.",
              color: "hover:border-red-500",
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
              <p className="text-gray-600 text-base text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Team Section */}

      <section className="py-16 bg-[#f7f8fa]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#0f172a] mb-12">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            <TeamMemberCard
              name="Gaurav Singh"
              position="CEO"
              imageSrc="https://randomuser.me/api/portraits/men/32.jpg"
            />
            <TeamMemberCard
              name="Shourav"
              position="CEO"
              imageSrc="https://randomuser.me/api/portraits/men/41.jpg"
            />
            <TeamMemberCard
              name="Ritika Sharma"
              position="Product Manager"
              imageSrc="https://randomuser.me/api/portraits/women/65.jpg"
            />
            <TeamMemberCard
              name="Ankit Verma"
              position="Lead Developer"
              imageSrc="https://randomuser.me/api/portraits/men/36.jpg"
            />
          </div>
        </div>
      </section>

      {/* Our Journey Section */}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#0f172a] mb-12">
            Our Journey
          </h2>

          <div className="relative border-l-4 border-blue-500 pl-6 space-y-10">
            <div data-aos="fade-up">
              <span className="absolute -left-3 top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-md"></span>
              <h3 className="text-xl font-semibold text-[#0f172a]">2025</h3>
              <p className="text-gray-600 mt-1">
                Founded with a focus on web and mobile app development services.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="100">
              <span className="absolute -left-3 top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-md"></span>
              <h3 className="text-xl font-semibold text-[#0f172a]">2025</h3>
              <p className="text-gray-600 mt-1">
                Expanded the team, completed international projects, and
                introduced new services including UI/UX design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Message from CEO Section */}

      <section className="bg-gradient-to-b from-white to-[#f7f8fa] py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl font-bold text-[#0f172a] mb-8"
            data-aos="fade-up"
          >
            Message from our CEO
          </h2>

          <p
            className="text-lg text-gray-700 mb-6 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            At{" "}
            <span className="font-semibold text-blue-600">
              StackLoop Pvt Ltd
            </span>
            , we pride ourselves on being a leading India-based IT company,
            committed to delivering innovative, tailor-made solutions. We
            believe in the power of technology to transform businesses and
            unlock their full potential.
          </p>

          <blockquote
            className="relative bg-white border-l-4 border-blue-500 p-6 shadow-md rounded-lg text-gray-800 italic"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FaQuoteLeft className="absolute -top-4 -left-4 text-4xl text-blue-200" />
            “Our mission is to create a positive impact on the world through
            cutting-edge technology solutions. We are dedicated to harnessing
            AI, machine learning, and data analytics to empower businesses and
            drive growth.”
          </blockquote>

          <div
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex items-center justify-center gap-4">
              <img
                src="/assets/images/clients/gaurav.jpg"
                alt="Gaurav Singh"
                className="w-14 h-14 rounded-full border-2 border-blue-500 object-cover"
              />
              <div className="text-left">
                <p className="font-semibold text-[#0f172a]">Gaurav Singh</p>
                <p className="text-sm text-gray-500">CEO, StackLoop</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <img
                src="/assets/images/clients/shourav.jpg"
                alt="Shourav Kumar"
                className="w-14 h-14 rounded-full border-2 border-blue-500 object-cover"
              />
              <div className="text-left">
                <p className="font-semibold text-[#0f172a]">Shourav Kumar</p>
                <p className="text-sm text-gray-500">CEO, StackLoop</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
