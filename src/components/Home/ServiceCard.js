import React from "react";

const ServiceCard = ({ imageSrc, title, description }) => {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300">
      <img src={imageSrc} alt={title} className="mb-4 h-20 w-20 object-contain" />
      <h3 className="text-lg font-bold text-textcolor mb-2">{title}</h3>
      <p className="text-textcolor text-sm text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;
