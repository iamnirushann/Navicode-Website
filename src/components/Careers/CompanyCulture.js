import Heading from "@/components/Common/Heading"; // Import Heading component for the section title
import Content from "@/components/Common/Content"; // Import Content component for handling content with lists

const CompanyCulture = () => (
  <div className="flex flex-col lg:flex-row justify-between p-5 md:p-10 m-5 md:m-10"> 
    {/* Main container with responsive layout for different screen sizes */}
    
    {/* Image Section */}
    <div className="w-full lg:w-1/2 mb-5 lg:mb-0"> 
      {/* This section will take full width on smaller screens and 50% on larger screens */}
      <div className="relative inline-block">
        <img
          src="/images/company-culture.jpg" // Image representing the company culture
          alt="Company Culture" // Alt text for accessibility
          className="w-full my-6 mx-0 md:mx-6 rounded-md shadow-md" 
          // Styling for the image: full width, margin, rounded corners, and shadow for effect
        />
        <div className="absolute top-6 left-8 bg-white p-1 rounded-full"></div>
        {/* This div creates a white circle on top of the image. It's for visual design */}
      </div>
    </div>

    {/* Content Section */}
    <div className="w-full lg:w-2/5"> 
      {/* This section will take full width on smaller screens and 40% on larger screens */}
      
      <Heading title="Company culture" /> 
      {/* Heading component that displays the section title */}

      <ul className="list-disc list-inside">
        {/* Each list item represents an aspect of the company culture */}
        <li className="text-base md:text-lg">
          Our IT company embraces flexibility through remote work.
        </li>
        <li className="text-base md:text-lg">
          Collaboration thrives with seamless virtual communication tools.
        </li>
        <li className="text-base md:text-lg">
          Employees value work-life balance while working from home.
        </li>
        <li className="text-base md:text-lg">
          Trust and accountability are key to our remote work culture.
        </li>
        <li className="text-base md:text-lg">
          Regular virtual team meetings keep everyone aligned.
        </li>
        <li className="text-base md:text-lg">
          We celebrate achievements online to maintain team spirit.
        </li>
        <li className="text-base md:text-lg">
          New hires feel welcomed with remote onboarding programs.
        </li>
        <li className="text-base md:text-lg">
          We prioritize mental health with virtual wellness initiatives.
        </li>
        <li className="text-base md:text-lg">
          Continuous learning is encouraged through online training sessions.
        </li>
      </ul>
    </div>
  </div>
);

export default CompanyCulture;
