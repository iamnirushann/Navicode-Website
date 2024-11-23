import { FaJava, FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa"; // Import  icons
import Heading from "../Common/Heading";
import Content from "../Common/Content";


const ServicesSection = () => {
  const technologies = [
    { id: 1, name: "Java", icon: <FaJava className="text-orange-500 w-10 h-10" /> },
    { id: 2, name: "Python", icon: <FaPython className="text-blue-500 w-10 h-10" /> },
    { id: 3, name: "JavaScript", icon: <FaJs className="text-yellow-500 w-10 h-10" /> },
    { id: 4, name: "HTML", icon: <FaHtml5 className="text-red-500 w-10 h-10" /> },
    { id: 5, name: "CSS", icon: <FaCss3Alt className="text-blue-400 w-10 h-10" /> },
    { id: 6, name: "React", icon: <FaReact className="text-blue-500 w-10 h-10" /> },
  ];

  return (
    <section className=" bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="./images/services.png" 
            alt="Services Illustration"
            className="w-full h-auto"
          />
        </div>

        {/* Right content Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <Heading title="Services"/>
          <Content title="Empower your online presence. We design engaging, responsive websites for lasting impact."/>
          <Content title="Empower your online presence. We design engaging, responsive websites for lasting impact."/>

          {/* Technologies Section */}
          <h3 className="text-lg font-bold mt-5">Technologies</h3>
          <div className="flex flex-wrap gap-4 justify-center mt-6 md:justify-start">
            {technologies.map((tech) => (
              <div
                key={tech.id}
                className="flex flex-col items-center gap-2"
                title={tech.name}
              >
                {tech.icon}
                <p className="text-sm font-medium">{tech.name}</p>
              </div>
            ))}
          </div>

          {/* Button */}
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