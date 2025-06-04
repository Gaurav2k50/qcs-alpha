import React from "react";
import fuji from "../assets/images/fUJI-ELECTRIC-INDIA.png";
import jindal from "../assets/images/JINDAL-STAINLESS-STEEL.jpg";
import ellenbarrie from "../assets/images/ELLENBARRIE.jpeg";
import linde from "../assets/images/LINDE-LOGO.jpeg";
import rsb from "../assets/images/RSB-LOGO.jpeg";
import tatasteel from "../assets/images/TATA-STEEL-LOGO.png";
import adhunik from "../assets/images/ADHUNIK.jpeg";
import eh from "../assets/images/E&H.png";
import sakambari from "../assets/images/SAKAMBARI-GROUP.png";
import cdspl from "../assets/images/CDSPL.png";

interface CustomerLogo {
  src: string;
  alt: string;
  width?: string;
}

export const EstemedCustomers: React.FC = () => {
  const customers: CustomerLogo[] = [
    { src: fuji, alt: "fUJI ELECTRIC INDIA" },
    { src: jindal, alt: "JINDAL STAINLESS STEEL" },
    { src: ellenbarrie, alt: "ELLENBARRIE" },
    { src: linde, alt: "LINDE" },
    { src: rsb, alt: "RSB" },
    { src: tatasteel, alt: "TATA STEEL" },
    { src: adhunik, alt: "ADHUNIK" },
    { src: eh, alt: "E&H" },
    { src: sakambari, alt: "SAKAMBARI GROUP" },
    { src: cdspl, alt: "CDSPL" },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Esteemed Customers
      </h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
          {customers.map((customer, index) => (
            <div
              key={index}
              className="w-full h-64 group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={customer.src}
                alt={customer.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold text-center px-4">
                  {customer.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
