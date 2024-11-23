"use client";

import { useState } from "react";
import Heading from "@/components/Common/Heading";
import Content from "@/components/Common/Content";

const ApplicationForm = ({ onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const fileInput = form.querySelector('input[type="file"]');
    const file = fileInput?.files[0];

    // Check if the file is a valid PDF
    if (file && file.type !== "application/pdf") {
      alert("Please upload a valid PDF file.");
      fileInput.value = ""; // Clear the file input
      return;
    }

    // Simulate successful submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000); // Hide the success message after 3 seconds
  };

  return (
    <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 space-y-6">
      <Heading title="Application Form" />

      <form onSubmit={handleSubmit}>
        <div>
          <Content title="Full name" />
          <input
            type="text"
            name="fullName"
            className="w-full border-2 border-gray-300 rounded-md shadow-sm p-2"
            placeholder="John Doe"
            required
          />
        </div>

        <div>
          <Content title="Email*" />
          <input
            type="email"
            name="email"
            className="w-full border-2 border-gray-300 rounded-md shadow-sm p-2"
            placeholder="your.email@example.com"
            required
          />
        </div>

        <div>
          <Content title="Your CV" />
          <input
            type="file"
            className="w-full p-0 pl-1 font-poppins-24 rounded-md"
            accept="application/pdf"
            required
          />
        </div>

        <div>
          <Content title="Experience / Other" />
          <textarea
            name="experience"
            rows="3"
            className="w-3/4 border-2 border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Tell us about your experience"
          ></textarea>
        </div>

        <div className="flex justify gap-2">
          <button
            onClick={onClose}
            type="button"
            className="mr-4 text-gray-500 hover:text-gray-700"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-6 py-2 rounded-full text-white bg-orange-600 hover:bg-orange-700"
          >
            Submit
          </button>
        </div>
      </form>

      {isSubmitted && (
        <div className="fixed top-20 center bg-orange-500 text-white px-4 py-2 rounded shadow-md">
          Successfully Submitted!
        </div>
      )}
    </div>
  );
};

export default ApplicationForm;
