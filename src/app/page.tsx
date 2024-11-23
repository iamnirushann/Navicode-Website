import Layout from '../components/Layout/Layout';
import HeroSection from '../components/Home/HeroSection';
import ServicesOverview from '../components/Home/ServicesOverview';
import AboutSection from "@/components/Home/AboutSection";
import ContactInformation from "@/components/Home/ContactInformation";


const Home = () => (
  <Layout>
    <HeroSection />
    <AboutSection />
    <ServicesOverview />
    <ContactInformation />
  </Layout>
);

export default Home;
