import React from "react";
import ContactForm from "../components/ContactForm";
import { PageBanner } from "../components/PageBanner";
import contactImg from "../assets/images/Contact-us-img.jpg";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";

export const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Our Location",
      details: "Shantiniketan Jamshedpur Jharkhand-832108",
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      title: "Email Us",
      details: "info@quanticcontrol.in",
      link: "mailto:info@quanticcontrol.in",
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: "Call Us",
      details: "+91-8084354194",
      link: "tel:+918084354194",
    },
    {
      icon: <FiClock className="w-6 h-6" />,
      title: "Business Hours",
      details: "Mon - Sat: 9:00 AM - 6:00 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner title="Contact Us" backgroundImage={contactImg} />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-blue-50 p-3 rounded-full mb-4 text-blue-600">
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
              {info.link ? (
                <a
                  href={info.link}
                  className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
                >
                  {info.details}
                </a>
              ) : (
                <p className="text-gray-600">{info.details}</p>
              )}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <p className="text-gray-600 mb-8">
              We'd love to hear from you! Whether you have a question about
              features, pricing, need a demo, or anything else, our team is
              ready to answer all your questions.
            </p>
            <ContactForm />
          </div>

          {/* Map Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Find Us On Map</h2>
            <div className="aspect-w-16 aspect-h-12">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14714.125370179213!2d86.14975!3d22.81475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e31989c7c563%3A0x5d3c680b322d2ac5!2sGamharia%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1623456789012!5m2!1sen!2sin"
                className="w-full h-[400px] rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
