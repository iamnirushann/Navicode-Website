import Layout from "@/components/Layout/Layout";
import { FaJava, FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa"; // Importing technology icons
import Heading from "@/components/Common/Heading"; // Heading component for titles
import Content from "@/components/Common/Content"; // Content component for text
import Image from 'next/image'; // Import Image from next/image

const AIModulesDevelopmentPage = () => {
  // Array containing technology information to be displayed
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
      <section className="bg-background">
        <div className="container mx-auto flex flex-col xl:flex-row items-center gap-8 px-4">
          
          {/* Left Section: Image */}
          <div className="w-full md:w-1/2">
            {/* Replacing <img> with next/image */}
            <Image
              src="/images/Services.png" // Image source
              alt="Services Illustration"
              className="w-full h-auto"
              layout="responsive" // Makes the image responsive
              width={800} // Width of the image
              height={600} // Height of the image
            />
          </div>

          {/* Right Section: Content */}
          <div className="w-full xl:w-1/2 text-left md:text-left md:px-8 xl:px-0">
            {/* Main Heading */}
            <div className="xl:text-left md:text-center">
              <Heading title="AI Modules Development" />
            </div>
            
            {/* Description Content */}
            <Content title="We help businesses integrate cutting-edge artificial intelligence modules into their products, improving automation and decision-making." />
            <Content title="Empower your online presence. We design engaging, responsive websites for lasting impact." />

            {/* Technologies Section */}
            <div className="xl:text-left md:text-center">
              <h3 className="text-lg font-bold mt-5">Technologies</h3>
              <div className="flex flex-wrap gap-4 justify-center mt-6 xl:justify-start">
                {/* Loop through technologies and display each with its icon */}
                {technologies.map((tech) => (
                  <div key={tech.id} className="flex flex-col items-center gap-2" title={tech.name}>
                    {tech.icon} {/* Display technology icon */}
                    <p className="text-sm font-medium">{tech.name}</p> {/* Technology name */}
                  </div>
                ))}
              </div>

              {/* Call to Action Button */}
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
