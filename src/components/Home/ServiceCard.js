import React from "react";
import Image from "next/image"; // Import the Image component from Next.js

// ServiceCard component: Used to display individual service cards with an image, title, and description.
const ServiceCard = ({ imageSrc, title, description }) => {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300">
      {/* Image for the service */}
      <Image
        src={imageSrc} // Source of the service image
        alt={title} // Alt text for the image (useful for accessibility)
        width={80} // Set a width for the image
        height={80} // Set a height for the image
        className="mb-4 object-contain" // Image styling
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
