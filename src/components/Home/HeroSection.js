import Button from '../Common/Button';

const HeroSection = () => (
  <section className="bg-hero-bg bg-cover bg-center text-center text-white py-20">
    <div className="container mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold">Welcome to MySite</h1>
      <p className="mt-4 text-lg md:text-xl">We create amazing solutions for your business.</p>
      <Button className="mt-6">Get Started</Button>
    </div>
  </section>
);

export default HeroSection;
