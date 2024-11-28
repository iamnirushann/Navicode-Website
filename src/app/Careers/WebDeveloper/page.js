"use client";
import { useState } from "react";
import Image from "next/image"; // Import Image from next/image
import Layout from "@/components/Layout/Layout"; // Layout component to wrap content
import Heading from "@/components/Common/Heading"; // Custom Heading component
import SubHeading from "@/components/Common/SubHeading"; // Custom SubHeading component
import ApplicationForm from "@/components/Careers/ApplicatonForm"; // ApplicationForm component for submission

const Webdeveloper = () => {
  // State to manage visibility of the application form overlay
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Function to show the application form when "Apply Now" is clicked
  const handleApplyClick = () => {
    setIsFormVisible(true); // Set visibility to true to show the form overlay
  };

  // Function to hide the application form overlay when closed
  const handleCloseForm = () => {
    setIsFormVisible(false); // Set visibility to false to hide the form overlay
  };

  return (
    <Layout>
      <section className="careerdetails">
        <div className="flex flex-col xl:flex-row justify-between px-5 py-5 md:px-10 md:py-10 m-5 md:m-10">
          {/* Left Section (Image representing the hiring process) */}
          <div className="w-full xl:w-1/2 mb-5 xl:mb-0">
            <div className="relative inline-block w-full">
              {/* Replacing <img> with Image from next/image */}
              <Image
                src="/images/hiring.jpg" // Image source
                alt="Hiring"
                className="w-full h-auto mx-auto md:mx-7 xl:mx-0 rounded-md"
                layout="responsive" // Makes the image responsive
                width={800} // Width of the image
                height={600} // Height of the image
              />
              <div className="absolute top-6 left-8 bg-white p-1 rounded-full shadow-lg"></div> {/* Placeholder element */}
            </div>
          </div>

          {/* Right Section (Job Details including qualifications and skills) */}
          <div className="w-full xl:w-2/5 xl:px-8">
            <Heading title="Web Developer" />

            {/* Qualifications Section */}
            <SubHeading title="Qualifications" />
            <ul className="list-disc pl-5 text-sm md:text-base">
              <li>Proficiency in Programming Languages (e.g., JavaScript, HTML, CSS).</li>
              <li>Understanding of Software Development Methodologies (e.g., Agile, Waterfall).</li>
              <li>Strong Problem-Solving Skills and Analytical Thinking.</li>
              <li>Strong Communication Skills for Team Collaboration.</li>
              <li>Continual Learning and Staying Updated with Industry Trends.</li>
            </ul>

            {/* Additional Skills Section */}
            <SubHeading title="Other Desirable Skills" />
            <ul className="list-disc pl-5 text-sm md:text-base">
              {/* Placeholder content; Replace with actual skills required */}
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>

            {/* Apply Button */}
            <div className="mt-5">
              <button
                onClick={handleApplyClick} // Trigger to show application form
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
            {/* The ApplicationForm component */}
            <ApplicationForm onClose={handleCloseForm} />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Webdeveloper;
