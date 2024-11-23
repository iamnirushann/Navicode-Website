import Card from './JobCard';
import Heading from "@/components/Common/Heading";
import Content from '@/components/Common/Content';
import SubHeading from '@/components/Common/SubHeading';

const JobListingGrid = () => (
  
  <section className="JobListingGrid">
    <div className="flex flex-col items-center text-center m-8">
    <Heading title="Job Opportunities"/>
    <SubHeading title="Explore exciting career opportunities with our company"/>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-8 mx-8 lg:mx-16">
  <Card
    title="Software Developer"
    jobType="Full-Time"
    location="Remote"
    buttonText="Details"
    navigateTo="/Careers/SoftwareDeveloper"
  />
  <Card
    title="Web Developer"
    jobType="Full-Time/Part-Time"
    location="Remote"
    buttonText="Details"
    navigateTo="/Careers/WebDeveloper"
  />
  <Card
    title="UI/UX Designer"
    jobType="Full-Time"
    location="Remote"
    buttonText="Details"
    navigateTo="/Careers/UI-UX-Designer"
  />
  <Card
    title="Data Scientist"
    jobType="Full-Time"
    location="Remote"
    buttonText="Details"
    navigateTo="/Careers/DataScientist"
  />
</div>
 </section>
);

export default JobListingGrid;