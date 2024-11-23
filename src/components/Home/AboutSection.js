import React from "react";
import Heading from "../Common/Heading";
import SubHeading from "../Common/SubHeading";
import Content from '../Common/Content';

const WhyChooseUs = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-background py-24 px-6 lg:px-16 pb-12">
      {/* Left Image Section */}
      <div className="relative w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0 md:mr-8">
        {" "}
        {/* Added margin for medium screens */}
        <div className="w-80 h-80 lg:w-[540px] lg:h-[540px] overflow-hidden rounded-3xl shadow-2xl">
          <img
            src="./images/person-working-html-computer.png" // Ensure this path is correct
            alt="Team working on web development project"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Content Section */}
      <div className="w-full lg:w-1/2">
        <SubHeading title=" Why choose us?"></SubHeading>
        <Heading title="We give our best!" />
        <Content  title="We are dedicated to delivering outstanding results. With years of
          experience and expertise, we focus on meeting your needs and exceeding
          expectations."/>
        <Content  title="We believe in building lasting partnerships by fostering trust,
          understanding, and collaboration. Our methodical approach ensures
          timely delivery while maintaining the highest standards of quality."/>

        <ul className="text-textcolor mt-4 space-y-2 list-disc pl-5">
          <li>Expert team with years of experience</li>
          <li>Tailored solutions for your business</li>
          <li>Commitment to quality and excellence</li>
          <li>Transparent communication and collaboration</li>
          <li>Innovative approach to problem-solving</li>
        </ul>

        <a
          href="/About"
          className="inline-block mt-6 px-6 py-3 text-white bg-primarycolor hover:bg-hovercolor rounded-full shadow-lg transition "
          aria-label="Learn more about us"
        >
          Learn more! →
        </a>
      </div>
    </section>
  );
};

export default WhyChooseUs;
