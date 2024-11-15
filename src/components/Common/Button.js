const Button = ({ children, onClick, type = "button", className = "" }) => (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 ${className}`}
    >
      {children}
    </button>
  );
  
  export default Button;
  