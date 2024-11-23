import ProfessionalCard from "./ProfessionalCard";
import Heading from "../Common/Heading";

const ProfessionalsSection = () => {
  // Sample data
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
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4  text-center">
        <Heading title="Meet our professionals" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {professionals.map((professional) => (
            <ProfessionalCard
              key={professional.id}
              imageSrc={professional.imageSrc}
              name={professional.name}
              job={professional.job}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalsSection;