import React from "react";
import ServiceCard from "../Home/ServiceCard"; // Import the ServiceCard component to display each service
import Heading from "../Common/Heading"; // Import Heading component for section title
import Content from "../Common/Content"; // Import Content component for description

const Services = () => {
  // Services array holds all the service data to be displayed in the cards
  const services = [
    {
      id: 1,
      title: "UI/UX design",
      description: "Creative and user-centered designs.",
      imageSrc: "/images/ui-ux-design.gif", // Path to the UI/UX design image
    },
    {
      id: 2,
      title: "Web development",
      description: "Fast and modern web solutions.",
      imageSrc: "/images/web-development.gif", // Path to the web development image
    },
    {
      id: 3,
      title: "Mobile development",
      description: "High-performance mobile apps.",
      imageSrc: "/images/mobile-development.gif", // Path to the mobile development image
    },
    {
      id: 4,
      title: "Graphic design",
      description: "Visually compelling graphic designs.",
      imageSrc: "/images/graphic-design.gif", // Path to the graphic design image
    },
    {
      id: 5,
      title: "Custom coding",
      description: "Tailored solutions for your needs.",
      imageSrc: "/images/custom-coding.gif", // Path to the custom coding image
    },
    {
      id: 6,
      title: "AI modules development",
      description: "Designing advanced AI systems and models.",
      imageSrc: "/images/AI-modules.gif", // Path to the AI modules image
    },
  ];

  return (
    <div className="bg-background py-12 lg:px-28 px-12 lg:pb-16 lg:pt-12">
      {/* Section Heading */}
      <div className="text-center mb-10 xl:mx-40">
        <Heading title="Services we provide" />
        {/* Section Description */}
        <Content
          title="Discover a range of tailored services designed to bring your ideas to life. 
          Whether it's crafting user-centric designs, building robust web applications, or creating engaging mobile experiences, 
          we are here to transform your vision into reality."
        />
      </div>
      {/* Grid layout for displaying services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:w-[1200px] xl:ml-60">
        {/* Loop through the services array to render each service card */}
        {services.map((service) => (
          <ServiceCard
            key={service.id} // Unique key for each ServiceCard component
            title={service.title} // Pass the title to ServiceCard
            description={service.description} // Pass the description to ServiceCard
            imageSrc={service.imageSrc} // Pass the image path to ServiceCard
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
