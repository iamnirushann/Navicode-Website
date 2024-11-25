import ProfessionalCard from "./ProfessionalCard"; // Import the ProfessionalCard component to display individual professionals
import Heading from "../Common/Heading"; // Import Heading component for the section title

const ProfessionalsSection = () => {
  // Sample data array containing professional information
  const professionals = [
    { id: 1, name: "Name", job: "Job", imageSrc: "./images/employee.png" },
    { id: 2, name: "Name", job: "Job", imageSrc: "./images/employee.png" },
    { id: 3, name: "Name", job: "Job", imageSrc: "./images/employee.png" },
    { id: 4, name: "Name", job: "Job", imageSrc: "./images/employee.png" },
    { id: 5, name: "Name", job: "Job", imageSrc: "./images/employee.png" },
    { id: 6, name: "Name", job: "Job", imageSrc: "./images/employee.png" },
    { id: 7, name: "Name", job: "Job", imageSrc: "./images/employee.png" },
    { id: 8, name: "Name", job: "Job", imageSrc: "./images/employee.png" },
  ];

  return (
    <section className="py-12 bg-background"> {/* Section with padding and background color */}
      <div className="container mx-auto px-4 text-center"> {/* Container with center alignment and responsive padding */}
        
        {/* Heading for the section */}
        <Heading title="Meet our professionals" />

        {/* Grid layout to display professional cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Iterate through the professionals array and render a ProfessionalCard for each */}
          {professionals.map((professional) => (
            <ProfessionalCard
              key={professional.id} // Unique key for each professional
              imageSrc={professional.imageSrc} // Passing image source as a prop
              name={professional.name} // Passing name as a prop
              job={professional.job} // Passing job title as a prop
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalsSection;
