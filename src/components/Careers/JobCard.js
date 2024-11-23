"use client";

import { useRouter } from "next/navigation"; // For App Router

const Card = ({ title, jobType, location, buttonText, navigateTo, footer, className = "" }) => {
  const router = useRouter(); // Must be called within the function body

  const handleNavigation = () => {
    if (navigateTo) {
      router.push(navigateTo); // Navigate to the given path
    }
  };

  return (
    <div
      className={`bg-white rounded-lg border border-gray-200 shadow-md p-6 flex flex-col justify-between transition-transform transform hover:-translate-y-2 hover:shadow-lg ${className}`}
    >
      {title && <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>}
      <div className="text-left">
        {jobType && <p className="text-sm text-gray-600 mb-2">Type: {jobType}</p>}
        {location && <p className="text-sm text-gray-600">Location: {location}</p>}
      </div>
      {footer && <div className="text-center text-gray-500 text-sm mt-4">{footer}</div>}
      {buttonText && (
        <button
          className="mt-4 self-end text-orange-500  px-4 py-2 rounded-md "
        
          onClick={handleNavigation}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default Card;