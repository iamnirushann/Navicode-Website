import Card from './JobCard'; // Import the Card component to display individual job listings
import Heading from "@/components/Common/Heading"; // Import Heading component for the main title
import Content from '@/components/Common/Content'; // Import Content component for any additional content (although not used here)
import SubHeading from '@/components/Common/SubHeading'; // Import SubHeading component for a subheading

// JobListingGrid component that renders job opportunities in a grid
const JobListingGrid = () => (
  <section className="JobListingGrid">
    {/* Section for the title and subheading */}
    <div className="flex flex-col items-center text-center m-8">
      {/* Main heading */}
      <Heading title="Job Opportunities" />
      {/* Subheading with a brief description */}
      <SubHeading title="Explore exciting career opportunities with our company" />
    </div>

    {/* Grid layout for job cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-8 mx-8 lg:mx-16">
      {/* Job Card components for different job listings */}
      <Card
        title="Software Developer"
        jobType="Full-Time"
        location="Remote"
        buttonText="Details"
        navigateTo="/Careers/SoftwareDeveloper" // Link to the details of the software developer position
      />
      <Card
        title="Web Developer"
        jobType="Full-Time/Part-Time"
        location="Remote"
        buttonText="Details"
        navigateTo="/Careers/WebDeveloper" // Link to the details of the web developer position
      />
      <Card
        title="UI/UX Designer"
        jobType="Full-Time"
        location="Remote"
        buttonText="Details"
        navigateTo="/Careers/UI-UX-Designer" // Link to the details of the UI/UX designer position
      />
      <Card
        title="Data Scientist"
        jobType="Full-Time"
        location="Remote"
        buttonText="Details"
        navigateTo="/Careers/DataScientist" // Link to the details of the data scientist position
      />
    </div>
  </section>
);

export default JobListingGrid;
