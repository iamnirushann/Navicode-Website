"use client"; // Client-side rendering (important for Next.js or React components)

import { useState } from "react"; // Import useState hook for managing component state
import Heading from "@/components/Common/Heading"; // Import Heading component to display form title
import Content from "@/components/Common/Content"; // Import Content component for labels

const ApplicationForm = ({ onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track if the form is submitted

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const fileInput = form.querySelector('input[type="file"]'); // Get file input element
    const file = fileInput?.files[0]; // Get the uploaded file

    // Check if the file is a valid PDF
    if (file && file.type !== "application/pdf") {
      alert("Please upload a valid PDF file."); // Alert if the file is not a PDF
      fileInput.value = ""; // Clear the file input field
      return;
    }

    // Simulate successful form submission (e.g., sending data to an API)
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000); // Hide the success message after 3 seconds
  };

  return (
    <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 space-y-6">
      {/* Heading component to show form title */}
      <Heading title="Application Form" />

      <form onSubmit={handleSubmit}>
        {/* Full Name Input */}
        <div>
          <Content title="Full name" /> {/* Label for full name */}
          <input
            type="text"
            name="fullName"
            className="w-full border-2 border-gray-300 rounded-md shadow-sm p-2"
            placeholder="John Doe"
            required
          />
        </div>

        {/* Email Input */}
        <div>
          <Content title="Email*" /> {/* Label for email */}
          <input
            type="email"
            name="email"
            className="w-full border-2 border-gray-300 rounded-md shadow-sm p-2"
            placeholder="your.email@example.com"
            required
          />
        </div>

        {/* File Upload (CV) Input */}
        <div>
          <Content title="Your CV" /> {/* Label for CV upload */}
          <input
            type="file"
            className="w-full p-0 pl-1 font-poppins-24 rounded-md"
            accept="application/pdf" // Only allow PDF files
            required
          />
        </div>

        {/* Experience/Other Textarea */}
        <div>
          <Content title="Experience / Other" /> {/* Label for experience */}
          <textarea
            name="experience"
            rows="3"
            className="w-3/4 border-2 border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Tell us about your experience"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify gap-2">
          {/* Cancel Button */}
          <button
            onClick={onClose} // Trigger the onClose function passed as a prop (likely to close the form)
            type="button"
            className="mr-4 text-gray-500 hover:text-gray-700"
          >
            Cancel
          </button>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 py-2 rounded-full text-white bg-orange-600 hover:bg-orange-700"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Success Message */}
      {isSubmitted && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-2 rounded shadow-md">
          Successfully Submitted!
        </div>
      )}
    </div>
  );
};

export default ApplicationForm;
