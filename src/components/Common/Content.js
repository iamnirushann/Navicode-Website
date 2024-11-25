// Content component for rendering a paragraph with optional title text
const Content = ({ title }) => (
  // Rendering the paragraph element with dynamic content from the `title` prop
  <p className="text-textcolor mt-4 leading-relaxed">
    {title}
  </p>
);

export default Content;
