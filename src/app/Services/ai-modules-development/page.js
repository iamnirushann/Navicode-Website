import Layout from "@/components/Layout/Layout";
import { FaJava, FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa"; // Import  icons
import Heading from "@/components/Common/Heading";
import Content from "@/components/Common/Content";
import Image from 'next/image';


const AIModulesDevelopmentPage = () => {
  
  const technologies = [
    { id: 1, name: "Java", icon: <FaJava className="text-orange-500 w-10 h-10" /> },
    { id: 2, name: "Python", icon: <FaPython className="text-blue-500 w-10 h-10" /> },
    { id: 3, name: "JavaScript", icon: <FaJs className="text-yellow-500 w-10 h-10" /> },
    { id: 4, name: "HTML", icon: <FaHtml5 className="text-red-500 w-10 h-10" /> },
    { id: 5, name: "CSS", icon: <FaCss3Alt className="text-blue-400 w-10 h-10" /> },
    { id: 6, name: "React", icon: <FaReact className="text-blue-500 w-10 h-10" /> },
  ];
  return (
    <Layout>
    <section className=" bg-background">
      <div className="container mx-auto flex flex-col xl:flex-row items-center gap-8 px-4">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/Services.png"
            alt="Services Illustration"
            className="w-full h-auto"
          />
        </div>

        {/* Right content Section */}
        <div className="w-80% xl:w-1/2 text-justify md:text-left md:px-8 xl:px-0">
        <div className="xl:text-left md:text-center"><Heading title="AI modules development"/></div>
          <Content title="We help businesses integrate cutting-edge artificial intelligence
          modules into their products, improving automation and decision-making."/>
          <Content title="Empower your online presence. We design engaging, responsive websites for lasting impact."/>

          {/* Technologies Section */}
          <div className="xl:text-left md:text-center">
          <h3 className="text-lg font-bold mt-5">Technologies</h3>
          <div className="flex flex-wrap gap-4 justify-center mt-6 xl:justify-start">
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
          <div className="mt-6 text-center xl:text-left">
            <a
              href="/Contact"
              className="inline-block bg-primarycolor text-white font-medium py-2 px-6 rounded-full shadow hover:bg-hovercolor transition mt-5 mb-3"
            >
              Free consultation →
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
    </Layout>
  );
};

export default AIModulesDevelopmentPage;


