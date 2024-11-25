import React from "react";

// ServiceCard component: Used to display individual service cards with an image, title, and description.
const ServiceCard = ({ imageSrc, title, description }) => {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300">
      {/* Image for the service */}
      <img
        src={imageSrc} // Source of the service image
        alt={title} // Alt text for the image (useful for accessibility)
        className="mb-4 h-20 w-20 object-contain" // Image styling
      />

      {/* Service title */}
      <h3 className="text-lg font-bold text-textcolor mb-2">
        {title} {/* Title of the service */}
      </h3>

      {/* Service description */}
      <p className="text-textcolor text-sm text-center">
        {description} {/* Description of the service */}
      </p>
    </div>
  );
};

export default ServiceCard;
