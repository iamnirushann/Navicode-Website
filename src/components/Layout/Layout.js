// Import Header and Footer components to use them in the layout
import Header from './Header';
import Footer from './Footer';

// Layout component that wraps around the page content
const Layout = ({ children }) => (
  <>
    {/* Render the Header component at the top of the page */}
    <Header />

    {/* Main content of the page */}
    <main>{children}</main>

    {/* Render the Footer component at the bottom of the page */}
    <Footer />
  </>
);

export default Layout;
