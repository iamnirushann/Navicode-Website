const ProfessionalCard = ({ imageSrc, name, job }) => {
  return (
    <div className="flex flex-col items-center"> {/* Container with flexbox for vertical alignment */}

      {/* Profile Image */}
      <img
        src={imageSrc} // The image URL passed as a prop
        alt={`${name}'s profile`} // Alt text for accessibility, showing the name
        className="w-28 h-28 rounded-3xl object-cover mb-3 mt-3" // Size, rounded corners, and object-cover for image cropping
        style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', // Hexagonal shape using clipPath
        }}
      />
      
      {/* Name and Job Title */}
      <h3 className="text-lg font-semibold">{name}</h3> {/* Name in larger text, bolded */}
      <p className="text-gray-500">{job}</p> {/* Job title in a gray color, subtler than the name */}
      
    </div>
  );
};

export default ProfessionalCard;
