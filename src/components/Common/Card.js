const Card = ({ children, className = "" }) => (
    <div className={`bg-white rounded-lg border border-gray-200 shadow-md p-6 flex flex-col justify-between transition-transform transform hover:-translate-y-2 hover:shadow-lg  ${className}`}>
      {children}
    </div>
  );
  
  export default Card;
  