import Card from '../Common/Card';
import SectionTitle from '../Common/SectionTitle';

const ServicesOverview = () => (
  <section className="py-10">
    <SectionTitle title="Our Services" />
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>Service 1 Description</Card>
      <Card>Service 2 Description</Card>
      <Card>Service 3 Description</Card>
    </div>
  </section>
);

export default ServicesOverview;
