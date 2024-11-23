import React from "react";
import ServiceCard from "../Home/ServiceCard";
import Heading from "../Common/Heading";
import Content from "../Common/Content";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "UI/UX design",
      description: "Creative and user-centered designs.",
      imageSrc: "/images/ui-ux-design.gif",
    },
    {
      id: 2,
      title: "Web development",
      description: "Fast and modern web solutions.",
      imageSrc: "/images/web-development.gif", 
    },
    {
      id: 3,
      title: "Mobile development",
      description: "High-performance mobile apps.",
      imageSrc: "/images/mobile-development.gif", 
    },
    {
      id: 4,
      title: "Graphic design",
      description: "Visually compelling graphic designs.",
      imageSrc: "/images/graphic-design.gif", 
    },
    {
      id: 5,
      title: "Custom coding",
      description: "Tailored solutions for your needs.",
      imageSrc: "/images/custom-coding.gif", 
    },
    {
      id: 6,
      title: "AI modules development",
      description: "Designing advanced AI systems and models.",
      imageSrc: "/images/AI-modules.gif", 
    },
  ];

  return (
    <div className="bg-background py-12 lg:px-28 px-12 lg:pb-16 lg:pt-12 ">
      <div className="text-center mb-10 xl:mx-40">
        <Heading title="Services we provide" />
        <Content
          title="Discover a range of tailored services designed to bring your ideas to
          life. Whether it's crafting user-centric designs, building robust web
          applications, or creating engaging mobile experiences, we are here to
          transform your vision into reality."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  xl:w-[1200px] xl:ml-60">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            imageSrc={service.imageSrc}
            
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
