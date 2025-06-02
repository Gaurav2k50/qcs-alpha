"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "CEO, TechnoCore",
    feedback:
      "Working with StackLoop was a game-changer. They delivered an amazing website on time with excellent support.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sara Malik",
    role: "Founder, ShopEasy",
    feedback:
      "Their team is highly professional and understood our vision perfectly. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rajiv Mehta",
    role: "CTO, FinWise",
    feedback:
      "From design to deployment, everything was smooth. Will definitely work with them again.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

export const Testimonials: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-[#f7f8fa] py-20 px-6 md:px-20">
      <h2
        className="text-4xl font-bold text-center text-[#0f172a] mb-12 leading-snug "
        data-aos="fade-up"
      >
        Don’t take our word, see what
        <br className="hidden md:block" /> our customers say
      </h2>

      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        pagination={{ clickable: true }}
        className="max-w-6xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div
              className="grid md:grid-cols-2 gap-8 px-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {[
                testimonial,
                testimonials[(index + 1) % testimonials.length],
              ].map((t, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition duration-300 mt-4"
                >
                  <FaQuoteLeft className="text-blue-600 text-3xl mb-4" />
                  <p className="text-gray-700 mb-6">“ {t.feedback} ”</p>
                  <div className="flex items-center space-x-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full border-2 border-blue-500 object-cover"
                    />
                    <div>
                      <div className="flex items-center text-yellow-500 text-sm mb-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                      <h4 className="font-semibold text-[#0f172a]">{t.name}</h4>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
