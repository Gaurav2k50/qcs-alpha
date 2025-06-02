import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  className = "",
}) => (
  <div
    className={`relative bg-[#006BA1] text-white rounded-md p-6 pt-12 text-center shadow-lg max-w-md mx-auto ${className}`}
  >
    {/* Overlapping Top Pill */}
    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#FF7B6F] text-white font-bold text-sm px-4 py-4 rounded-full shadow-md">
      {title}
    </div>

    {/* Dashed Divider */}
    <div className="border-t border-dashed border-white my-4 w-3/3 mx-auto"></div>

    {/* Description */}
    <p className="text-sm leading-relaxed font-medium text-white ">
      {description}
    </p>
  </div>
);
