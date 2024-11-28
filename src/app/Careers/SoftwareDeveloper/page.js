"use client";
import { useState } from "react";
import Image from 'next/image'; // Import Image component from next/image
import Layout from "@/components/Layout/Layout"; // Import Layout component
import Heading from "@/components/Common/Heading"; // Import custom Heading component
import SubHeading from "@/components/Common/SubHeading"; // Import custom SubHeading component
import ApplicationForm from "@/components/Careers/ApplicatonForm"; // Import ApplicationForm for job application

const SoftwareDeveloper = () => {
  // State to manage visibility of the application form overlay
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Function to show the application form when "Apply Now" is clicked
  const handleApplyClick = () => {
    setIsFormVisible(true); // Display application form overlay
  };

  // Function to close the application form overlay
  const handleCloseForm = () => {
    setIsFormVisible(false); // Hide application form overlay
  };

  return (
    <Layout>
      <section className="careerdetails">
        <div className="flex flex-col xl:flex-row justify-between px-5 py-5 md:px-10 md:py-10 m-5 md:m-10">
          {/* Left Section (Image representing the hiring process) */}
          <div className="w-full xl:w-1/2 mb-5 xl:mb-0">
            <div className="relative inline-block w-full">
              {/* Replacing <img> with Image component for better performance */}
              <Image
                src="/images/hiring.jpg" // Image to represent hiring process
                alt="Hiring"
                className="w-full h-auto mx-auto md:mx-7 xl:mx-0 rounded-md"
                layout="responsive"  // Responsive layout for image
                width={800}  // Width of the image
                height={600} // Height of the image
              />
            </div>
          </div>

          {/* Right Section (Job details including qualifications and skills) */}
          <div className="w-full xl:w-2/5 xl:px-8">
            <Heading title="Software Developer" />

            {/* Qualifications Section */}
            <SubHeading title="Qualifications" />
            <ul className="list-disc pl-5 text-base md:text-lg">
              <li>Proficiency in Programming Languages (e.g., JavaScript, Python, Java).</li>
              <li>Understanding of Software Development Methodologies (Agile, Waterfall, etc.).</li>
              <li>Strong Problem-Solving Skills and analytical thinking.</li>
              <li>Good communication skills for cross-functional collaboration.</li>
              <li>Continual Learning and staying updated with industry trends.</li>
            </ul>

            {/* Additional Skills Section */}
            <SubHeading title="Additional Skills" />
            <ul className="list-disc pl-5 text-base md:text-lg">
              <li>Experience with version control tools like Git.</li>
              <li>Familiarity with cloud platforms (AWS, Azure, etc.).</li>
              <li>Understanding of software testing principles and practices.</li>
              <li>Experience with RESTful APIs and microservices architecture.</li>
              <li>Ability to work in a fast-paced, collaborative environment.</li>
            </ul>

            {/* Apply Button */}
            <div className="mt-5">
              <button
                onClick={handleApplyClick} // Triggers the display of the form overlay
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
            {/* ApplicationForm component is rendered when the form visibility state is true */}
            <ApplicationForm onClose={handleCloseForm} />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default SoftwareDeveloper;
