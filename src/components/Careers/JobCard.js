"use client";

import { useRouter } from "next/navigation"; // Import useRouter from next/navigation to enable navigation within the app

const Card = ({
  title,            // Job title or card title
  jobType,          // Job type (e.g., Full-time, Part-time)
  location,         // Job location
  buttonText,       // Text for the button (e.g., "Apply Now")
  navigateTo,       // Path to navigate when button is clicked
  footer,           // Additional footer content (e.g., small text at the bottom)
  className = "",   // Additional custom classes passed as props
}) => {
  const router = useRouter(); // Create a router instance for navigation

  // Handle navigation when the button is clicked
  const handleNavigation = () => {
    if (navigateTo) {
      router.push(navigateTo); // Navigate to the specified path
    }
  };

  return (
    <div
      className={`bg-white rounded-lg border border-gray-200 shadow-md p-6 flex flex-col justify-between transition-transform transform hover:-translate-y-2 hover:shadow-lg ${className}`}
    >
      {/* Render the title if provided */}
      {title && (
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      )}

      {/* Render job type and location if provided */}
      <div className="text-left">
        {jobType && <p className="text-sm text-gray-600 mb-2">Type: {jobType}</p>}
        {location && <p className="text-sm text-gray-600">Location: {location}</p>}
      </div>

      {/* Render footer content if provided */}
      {footer && <div className="text-center text-gray-500 text-sm mt-4">{footer}</div>}

      {/* Render the button if buttonText is provided */}
      {buttonText && (
        <button
          className="mt-4 self-end text-orange-500 px-4 py-2 rounded-md"
          onClick={handleNavigation}
        >
          {buttonText} {/* Button text, e.g., "Apply Now" */}
        </button>
      )}
    </div>
  );
};

export default Card;
