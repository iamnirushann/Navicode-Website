const ProfessionalCard = ({ imageSrc, name, job }) => {
  return (
    <div className="flex flex-col items-center">
      {/* Profile Image */}
      <img
        src={imageSrc}
        alt={`${name}'s profile`}
        className="w-28 h-28 rounded-3xl object-cover mb-3 mt-3"
        style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25% )',}}
      />
      {/* Name and Job Details */}
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500">{job}</p>
    </div>
  );
};

export default ProfessionalCard;