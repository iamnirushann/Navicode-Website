const Button = ({ children, onClick, type = "button", className = "" }) => (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 rounded-full text-white bg-primarycolor hover:bg-hovercolor ${className}`}
    >
      {children}
    </button>
  );
  
  export default Button;
  