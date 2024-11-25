"use client";

import { useState } from "react"; // Importing useState hook to manage form submission state
import Heading from "@/components/Common/Heading"; // Importing Heading component for the form title
import Content from "@/components/Common/Content"; // Importing Content component to display labels for form fields

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); // State to manage form submission success

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior (e.g., page reload)

    // Simulate successful form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000); // Hide success message after 3 seconds
  };

  return (
    <div className="max-h-screen flex flex-col lg:flex-row items-center justify-center bg-white-100 px-5 py-10">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 p-4 lg:p-10 bg-white shadow-lg max-w-lg space-y-6 rounded-lg">
        
        {/* Heading for the contact form */}
        <Heading title="Talk to our team" />

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Full Name input field */}
          <div>
            <Content title="Full name" />
            <input
              type="text"
              id="fullName"
              name="fullname"
              placeholder="John Doe"
              required
              className="w-full border-2 border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          {/* Email input field */}
          <div>
            <Content title="Email*" />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your.email@example.com"
              required
              className="w-full border-2 border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          {/* Phone Number input field */}
          <div>
            <Content title="Phone number" />
            <input
              type="tel"
              id="phonenumber"
              name="phonenumber"
              placeholder="+94761234567"
              required
              className="w-full sm:w-1/2 border-2 border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          {/* Message textarea */}
          <div>
            <Content title="Message" />
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              required
              rows="4"
              className="w-full sm:w-3/4 border-2 border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="px-6 py-2 rounded-full text-white bg-orange-600 hover:bg-orange-700"
          >
            Send
          </button>
        </form>

        {/* Success message that appears after form submission */}
        {isSubmitted && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-2 rounded shadow-md">
            Successfully Submitted!
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
