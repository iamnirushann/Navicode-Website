"use client";

import { useState } from "react";
import Heading from "@/components/Common/Heading";
import Content from "@/components/Common/Content";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulate successful submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000); // Hide the popup after 3 seconds
  };

  return (
    <div className="max-h-screen flex flex-col lg:flex-row items-center justify-center bg-white-100 px-5 py-10">

  
      <div className="w-full lg:w-1/2 p-4 lg:p-10 bg-white shadow-lg max-w-lg space-y-6 rounded-lg">
        <Heading title="Talk to our team" />

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Content title="Full name" />
            <input
              type="text"
              id="fullName"
              name="fullname"
              placeholder="Jhon doe"
              required
              className="w-full border-2 border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

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

          <div>
            <Content title="Message" />
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required
              rows="4"
              className="w-full sm:w-3/4 border-2 border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-2 rounded-full text-white bg-orange-600 hover:bg-orange-700"
          >
            Send
          </button>
        </form>

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