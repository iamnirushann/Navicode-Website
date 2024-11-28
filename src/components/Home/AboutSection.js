import React from "react";
import Heading from "../Common/Heading";  // Import the Heading component
import SubHeading from "../Common/SubHeading"; // Import the SubHeading component
import Content from '../Common/Content';  // Import the Content component for displaying text
import Image from 'next/image';  // Import the Image component from Next.js

const WhyChooseUs = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-background py-24 px-6 lg:px-16 pb-12">
      {/* Left Image Section */}
      <div className="relative w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0 md:mr-8">
        {/* This div contains the image and provides some margin for medium screens */}
        <div className="w-80 h-80 lg:w-[540px] lg:h-[540px] overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src="/images/person-working-html-computer.png" // Image source path
            alt="Team working on web development project"
            className="w-full h-full object-cover" // Ensures the image covers the full area and is responsive
            width={540} // Set width for optimization
            height={540} // Set height for optimization
          />
        </div>
      </div>

      {/* Right Content Section */}
      <div className="w-full lg:w-1/2">
        {/* Subheading that introduces the section */}
        <SubHeading title="Why choose us?" />

        {/* Main heading for the section */}
        <Heading title="We give our best!" />

        {/* Content sections with descriptive text */}
        <Content 
          title="We are dedicated to delivering outstanding results. With years of
          experience and expertise, we focus on meeting your needs and exceeding
          expectations."
        />
        <Content 
          title="We believe in building lasting partnerships by fostering trust,
          understanding, and collaboration. Our methodical approach ensures
          timely delivery while maintaining the highest standards of quality."
        />

        {/* List of key reasons to choose the company */}
        <ul className="text-textcolor mt-4 space-y-2 list-disc pl-5">
          <li>Expert team with years of experience</li>
          <li>Tailored solutions for your business</li>
          <li>Commitment to quality and excellence</li>
          <li>Transparent communication and collaboration</li>
          <li>Innovative approach to problem-solving</li>
        </ul>

        {/* Call-to-action button linking to the About page */}
        <a
          href="/About" // Link to the About page
          className="inline-block mt-6 px-6 py-3 text-white bg-primarycolor hover:bg-hovercolor rounded-full shadow-lg transition"
          aria-label="Learn more about us" // Accessibility feature for screen readers
        >
          Learn more! →
        </a>
      </div>
    </section>
  );
};

export default WhyChooseUs;
