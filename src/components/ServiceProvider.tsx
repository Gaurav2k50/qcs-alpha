import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [ 
  {
    icon: "💻",
    title: "Web App Development",
    desc: "Custom web applications that are scalable, secure, and tailored to your business goals.",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    desc: "Cross-platform mobile apps with intuitive UI and high performance for iOS and Android.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design & Branding",
    desc: "Crafting engaging user experiences and powerful brand visuals that make you stand out.",
  },
  {
    icon: "🛠️",
    title: "WordPress Development",
    desc: "Fast, SEO-friendly, and responsive WordPress websites that are easy to manage.",
  },
  {
    icon: "📈",
    title: "SEO & Performance Optimization",
    desc: "Boost your search rankings and site speed to attract and convert more users.",
  },
  {
    icon: "📢",
    title: "Digital Marketing Strategy",
    desc: "Data-driven marketing campaigns that increase visibility and deliver measurable ROI.",
  },
  {
    icon: "☁️",
    title: "Cloud Solutions",
    desc: "Migrate, scale, and secure your business infrastructure with modern cloud services.",
  },
  {
    icon: "🔐",
    title: "Cybersecurity & Compliance",
    desc: "Protect your digital assets with end-to-end security solutions and audit compliance.",
  },
];

export const ServiceProvider: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-[#f7f8fa] py-16 px-6 md:px-20">
      <h2
        className="text-4xl font-bold text-center text-[#0f172a] mb-12 leading-snug"
        data-aos="fade-up"
      >
        Our awesome services to <br /> give you success
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-gray-200 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="text-indigo-600 text-4xl mb-4">{service.icon}</div>
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
