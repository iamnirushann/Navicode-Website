// Button component for reusable buttons with customizable styles and behavior
const Button = ({ children, onClick, type = "button", className = "" }) => (
  <button
    // Setting the type of the button (default is "button")
    type={type}
    // Executing the function passed as onClick when the button is clicked
    onClick={onClick}
    // Base button styling with padding, rounded corners, and color classes
    // `className` allows additional custom classes to be added
    className={`px-6 py-2 rounded-full text-white bg-primarycolor hover:bg-hovercolor ${className}`}
  >
    {/* Render any child content (text, icons, etc.) inside the button */}
    {children}
  </button>
);

export default Button;
