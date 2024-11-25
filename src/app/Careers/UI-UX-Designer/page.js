"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Router is imported but currently unused

import Layout from "@/components/Layout/Layout"; // Layout component to wrap content
import Heading from "@/components/Common/Heading"; // Custom Heading component
import SubHeading from "@/components/Common/SubHeading"; // Custom SubHeading component
import ApplicationForm from "@/components/Careers/ApplicatonForm"; // ApplicationForm for submitting applications

const Uiuxdesigner = () => {
  // State to manage visibility of the application form overlay
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Function to show the application form when "Apply Now" is clicked
  const handleApplyClick = () => {
    setIsFormVisible(true); // Display the form overlay
  };

  // Function to close the application form overlay
  const handleCloseForm = () => {
    setIsFormVisible(false); // Hide the form overlay
  };

  return (
    <Layout>
      <section className="careerdetails">
        <div className="flex flex-col xl:flex-row justify-between px-5 py-5 md:px-10 md:py-10 m-5 md:m-10">
          {/* Left Section (Image representing the hiring process) */}
          <div className="w-full xl:w-1/2 mb-5 xl:mb-0">
            <div className="relative inline-block w-full">
              <img
                src="/images/hiring.jpg" // Image for the hiring process
                alt="Hiring"
                className="w-full h-auto mx-auto md:mx-7 xl:mx-0 rounded-md"
              />
            </div>
          </div>

          {/* Right Section (Job Details including qualifications and skills) */}
          <div className="w-full xl:w-2/5 xl:px-8">
            <Heading title="UI/UX Designer" />

            {/* Qualifications Section */}
            <SubHeading title="Qualifications" />
            <ul className="list-disc pl-5 text-sm md:text-base">
              <li>Proficiency in design tools (Sketch, Figma, Adobe XD, etc.).</li>
              <li>Understanding of design principles and user-centered design methodology.</li>
              <li>Experience with prototyping and wireframing tools.</li>
              <li>Strong attention to detail and ability to iterate based on feedback.</li>
              <li>Good communication and collaboration skills with cross-functional teams.</li>
            </ul>

            {/* Additional Skills Section */}
            <SubHeading title="Other Desirable Skills" />
            <ul className="list-disc pl-5 text-sm md:text-base">
              <li>Experience in front-end development (HTML, CSS, JavaScript) is a plus.</li>
              <li>Knowledge of accessibility and responsive design principles.</li>
              <li>Experience with user testing and gathering user feedback.</li>
              <li>Familiarity with design systems and version control tools like Git.</li>
              <li>Continual learning and passion for design trends.</li>
            </ul>

            {/* Apply Button */}
            <div className="mt-5">
              <button
                onClick={handleApplyClick} // Triggers form visibility
                className="px-6 py-2 rounded-full text-white bg-orange-600 hover:bg-orange-700 transition duration-200"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Overlay */}
      {isFormVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-0 w-full max-w-md sm:max-w-lg relative">
            {/* The ApplicationForm component renders here when isFormVisible is true */}
            <ApplicationForm onClose={handleCloseForm} />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Uiuxdesigner;
