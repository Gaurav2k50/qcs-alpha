import React from "react";
import { PortfolioCard } from "../components/PortfolioCard";
import gasstationImage from "../assets/images/gasstationImage.png";

const portfolioItems = [
  {
    title: "Gas Station",
    description: "Find nearby gas stations and check fuel or petrol services.",
    imageSrc: gasstationImage,
  },
];

export const Portfolio: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Our Recent Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {portfolioItems.map((item, index) => (
          <PortfolioCard
            key={index}
            title={item.title}
            description={item.description}
            imageSrc={item.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};
