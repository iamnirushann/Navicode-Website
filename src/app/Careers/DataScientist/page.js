"use client";
import { useState } from "react";
import Image from "next/image";  // Importing Image component
import Layout from "@/components/Layout/Layout"; // Importing Layout component
import Heading from "@/components/Common/Heading"; // Importing custom Heading component
import SubHeading from "@/components/Common/SubHeading"; // Importing custom SubHeading component
import ApplicationForm from "@/components/Careers/ApplicatonForm"; // Importing ApplicationForm component

const Datascientist = () => {
  // State to handle the visibility of the application form overlay
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Function to display the application form overlay
  const handleApplyClick = () => {
    setIsFormVisible(true); // Show the application form
  };

  // Function to close the application form overlay
  const handleCloseForm = () => {
    setIsFormVisible(false); // Hide the application form
  };

  return (
    <Layout>
      <section className="careerdetails">
        {/* Main Section: Flex container for the layout */}
        <div className="flex flex-col xl:flex-row justify-between px-5 py-5 md:px-10 md:py-10 m-5 md:m-10">
          
          {/* Left Section: Image representing the hiring process */}
          <div className="w-full xl:w-1/2 mb-5 xl:mb-0">
            <div className="relative inline-block w-full">
              <Image
                src="/images/hiring.jpg" // Image for the Data Scientist position
                alt="Hiring"
                className="w-full h-auto mx-auto md:mx-7 xl:mx-0 rounded-md"
                layout="responsive"  // Responsive layout for image
                width={800}  // Width of the image
                height={600} // Height of the image
              />
              <div className="absolute top-6 left-8 bg-white p-1 rounded-full shadow-lg"></div>
            </div>
          </div>

          {/* Right Section: Job details and qualifications */}
          <div className="w-full xl:w-2/5 xl:px-8">
            {/* Job Title */}
            <Heading title="Data Scientist" />

            {/* Qualifications Section */}
            <SubHeading title="Qualifications" />
            <ul className="list-disc pl-5 text-sm md:text-base">
              <li>Proficiency in Programming Languages (Python, R, SQL, etc.).</li>
              <li>Understanding of Machine Learning Algorithms and Frameworks.</li>
              <li>Problem-Solving and Analytical Skills.</li>
              <li>Strong Communication Skills.</li>
              <li>Continual Learning and Adaptability.</li>
            </ul>

            {/* Additional Skills Section */}
            <SubHeading title="Other Desirable Skills" />
            <ul className="list-disc pl-5 text-sm md:text-base">
              <li>Experience with Data Visualization Tools (e.g., Tableau, PowerBI).</li>
              <li>Familiarity with Big Data Technologies (e.g., Hadoop, Spark).</li>
              <li>Experience in Cloud Computing Platforms (e.g., AWS, GCP, Azure).</li>
              <li>Knowledge of Data Cleaning and Data Wrangling Techniques.</li>
              <li>Ability to work with Cross-functional Teams.</li>
            </ul>

            {/* Apply Button */}
            <div className="mt-5">
              <button
                onClick={handleApplyClick} // Trigger the display of the form overlay
                className="px-6 py-2 rounded-full text-white bg-orange-600 hover:bg-orange-700 transition duration-200"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>

        {/* Application Form Overlay: Visible when the state is true */}
        {isFormVisible && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-0 w-full max-w-md sm:max-w-lg relative">
              {/* Application Form Component */}
              <ApplicationForm onClose={handleCloseForm} />
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Datascientist;
