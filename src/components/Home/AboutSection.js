import SectionTitle from '../Common/SectionTitle';

const CompanyOverview = () => (
  <section className="py-10">
    <SectionTitle title="Our Company" />
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <p className="text-lg">We are a company dedicated to excellence...</p>
      <p className="text-lg">Our mission is to provide top-tier solutions...</p>
    </div>
  </section>
);

export default CompanyOverview;
