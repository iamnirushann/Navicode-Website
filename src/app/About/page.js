import Layout from "@/components/Layout/Layout";
import React from "react";
import CompanyOverview from "@/components/About/CompanyOverview";
import TeamGrid from "@/components/About/TeamGrid";

const AboutPage = () => {
  return (
    <Layout>
        <CompanyOverview />
        <TeamGrid />
    </Layout>
    
  );
};

export default AboutPage;
