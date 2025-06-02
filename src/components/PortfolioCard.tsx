import React from "react";

interface PortfolioCardProps {
  title: string;
  description: string;
  // imageSrc: string;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  // imageSrc,
}) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    {/* <img src={imageSrc} alt={title} className="w-full h-48 object-cover" /> */}
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);
