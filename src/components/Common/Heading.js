// Heading component for rendering a heading (h1) with customizable styles
const Heading = ({ title }) => (
  // Rendering an h1 element with dynamic content from the `title` prop
  <h1 className="text-headingcolor text-3xl lg:text-4xl font-semibold mb-2">
    {title}
  </h1>
);

export default Heading;
