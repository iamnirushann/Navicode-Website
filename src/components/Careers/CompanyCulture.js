import Heading from "@/components/Common/Heading";
import Content from "@/components/Common/Content";

const CompanyCulture = () => (
  <div className="flex flex-col lg:flex-row justify-between p-5 md:p-10 m-5 md:m-10">
    {/* Image Section */}
    <div className="w-full lg:w-1/2 mb-5 lg:mb-0">
      <div className="relative inline-block">
        <img
          src="/images/company-culture.jpg"
          alt="Company Culture"
          className="w-full my-6 mx-0 md:mx-6 rounded-md shadow-md"
        />
        <div className="absolute top-6 left-8 bg-white p-1 rounded-full"></div>
      </div>
    </div>

    {/* Content Section */}
    <div className="w-full lg:w-2/5">
      <Heading title="Company culture" />
      <Content ul />
        
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
     </div>
  </div>
);

export default CompanyCulture;