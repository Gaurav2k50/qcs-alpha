import React from "react";

interface TeamMemberCardProps {
  name: string;
  position: string;
  imageSrc: string;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  position,
  imageSrc,
}) => (
  <div className="text-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
    <img
      src={imageSrc}
      alt={name}
      className="w-24 h-24 mx-auto rounded-full border-2 border-blue-500 object-cover mb-4"
    />
    <h3 className="text-xl font-semibold text-[#0f172a]">{name}</h3>
    <p className="text-gray-500">{position}</p>
  </div>
);
