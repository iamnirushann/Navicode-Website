import React from "react";
import Card from "../Common/Card";
import Heading from "../Common/Heading";
import Content from "../Common/Content";

// The CompanyOverview component represents the section showing the company's details.
const CompanyOverview = () => {
  return (
    <section className="p-5 bg-background"> {/* Section with padding and background */}
      <div className="flex flex-col items-center max-w-[1200px] mx-auto p-4 xl:max-w-[1800px]">
        {/* Main container holding content centered on the page */}
        <div className="flex flex-col justify-between max-w-[1200px] w-full xl:max-w-[1520px]">
          {/* Image Section */}
          <div className="flex justify-center items-center mb-4">
            {/* The company image */}
            <img
              src="/images/smilywomen.jpg"
              alt="A smiling woman representing our company"
              className="w-full max-w-[600px] h-auto rounded-lg"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-end w-full p-4 items-center lg:pl-8 xl:pr-10">
            {/* Heading and content about the company */}
            <Heading title="Company Overview" />
            <Content 
              title="We are committed to pushing the boundaries of what’s possible, staying at the forefront of technological advancements and market trends. Our diverse and talented team collaborates across all levels, bringing together expertise, creativity, and a shared vision for success. We focus on customer satisfaction, ensuring that every product and service we offer meets the highest standards of quality and reliability."
            />
          </div>
        </div>
      </div>

      {/* Mission and Vision Section */}
      <div className="flex flex-col md:flex-row flex-wrap gap-5 mt-10 justify-center">
        {/* Mission Card */}
        <div className="flex-1 max-w-full md:max-w-[40%] p-4 rounded-lg">
          <Card>
            <h2 className="text-xl font-bold mb-4 text-center">Mission</h2>
            <p className="text-sm text-gray-600 leading-6">
              Our mission is to provide sustainable solutions and create lasting impact by focusing on the needs of our customers and communities.
            </p>
          </Card>
        </div>

        {/* Vision Card */}
        <div className="flex-1 max-w-full md:max-w-[40%] p-4 rounded-lg">
          <Card>
            <h2 className="text-xl font-bold mb-4 text-center">Vision</h2>
            <p className="text-sm text-gray-600 leading-6">
              Our vision is to be the world’s most trusted and innovative company, transforming industries and improving lives.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
