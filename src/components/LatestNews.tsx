import React from "react";

interface NewsCardProps {
  title: string;
  date: string;
  // imageSrc: string;
  link: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  title,
  date,
  // imageSrc,
  link,
}) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    {/* <img src={imageSrc} alt={title} className="w-full h-48 object-cover" /> */}
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{date}</p>
      <a href={link} className="text-blue-500 hover:underline">
        Read More
      </a>
    </div>
  </div>
);
