// Card component for wrapping content in a styled container with hover effects
const Card = ({ children, className = "" }) => (
  <div
    // Applying styles for the card's container:
    // - `bg-white`: White background color
    // - `rounded-lg`: Rounded corners
    // - `border border-gray-200`: Light gray border
    // - `shadow-md`: Medium shadow for depth
    // - `p-6`: Padding inside the card
    // - `flex flex-col`: Use flexbox for column layout
    // - `justify-between`: Space between children components
    // - `transition-transform`: Smooth transition for transform properties
    // - `transform hover:-translate-y-2 hover:shadow-lg`: Apply transform and shadow on hover
    // - `${className}`: Allow additional classes to be passed in
    className={`bg-white rounded-lg border border-gray-200 shadow-md p-6 flex flex-col justify-between transition-transform transform hover:-translate-y-2 hover:shadow-lg ${className}`}
  >
    {/* Render children passed into the Card component */}
    {children}
  </div>
);

export default Card;
