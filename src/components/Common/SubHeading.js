// SubHeading component for rendering a secondary heading (h2) with customizable styles
const SubHeading = ({ title }) => (
  // Rendering an h2 element with dynamic content from the `title` prop
  <h2 className="text-subheadingcolor text-2xl lg:text-3xl font-semibold mb-2">
    {title}
  </h2>
);

export default SubHeading;
