// Importing React icons for various technologies
import { FaJava, FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa"; 
import Heading from "../Common/Heading"; // Importing custom Heading component
import Content from "../Common/Content"; // Importing custom Content component
import Image from "next/image"; // Import Image from next/image

const ServicesSection = () => {
  // Array of technologies with corresponding icons
  const technologies = [
    { id: 1, name: "Java", icon: <FaJava className="text-orange-500 w-10 h-10" /> },
    { id: 2, name: "Python", icon: <FaPython className="text-blue-500 w-10 h-10" /> },
    { id: 3, name: "JavaScript", icon: <FaJs className="text-yellow-500 w-10 h-10" /> },
    { id: 4, name: "HTML", icon: <FaHtml5 className="text-red-500 w-10 h-10" /> },
    { id: 5, name: "CSS", icon: <FaCss3Alt className="text-blue-400 w-10 h-10" /> },
    { id: 6, name: "React", icon: <FaReact className="text-blue-500 w-10 h-10" /> },
  ];

  return (
    <section className="bg-gray-50">
      {/* Container for the section, flexbox to organize layout */}
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        
        {/* Left Image Section */}
        <div className="w-full md:w-1/2">
          {/* Use Next.js Image component for optimization */}
          <Image
            src="/images/services.png" // Path to the image
            alt="Services Illustration"
            width={500}  // Define width
            height={300} // Define height
            className="w-full h-auto" // Responsive image
          />
        </div>

        {/* Right content Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          {/* Heading */}
          <Heading title="Services" />
          
          {/* Description about services */}
          <Content title="Empower your online presence. We design engaging, responsive websites for lasting impact." />
          <Content title="Empower your online presence. We design engaging, responsive websites for lasting impact." />
          
          {/* Technologies Section */}
          <h3 className="text-lg font-bold mt-5">Technologies</h3>
          {/* Icons and technology names displayed in a flex container */}
          <div className="flex flex-wrap gap-4 justify-center mt-6 md:justify-start">
            {technologies.map((tech) => (
              <div
                key={tech.id}
                className="flex flex-col items-center gap-2"
                title={tech.name} // Title added for accessibility
              >
                {tech.icon} {/* Display technology icon */}
                <p className="text-sm font-medium">{tech.name}</p> {/* Technology name */}
              </div>
            ))}
          </div>

          {/* Button for contact or consultation */}
          <div className="mt-6">
            <a
              href="/Contact"
              className="inline-block bg-primarycolor text-white font-medium py-2 px-6 rounded-full shadow hover:bg-hovercolor transition mt-5 mb-3"
            >
              Free consultation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
