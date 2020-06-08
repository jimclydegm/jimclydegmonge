import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import HeroBanner from 'components/HeroBanner';
import Services from 'components/Services';
import Testimonials from 'components/Testimonials';
import Experience from 'components/Experience';
import Education from 'components/Education';
import Skills from 'components/Skills';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="About Me" />
      <HeroBanner />
      <Services />
      {/* <Testimonials /> */}
      <Experience />
      <hr />
      <Education />
      <hr />
      <Skills />
    </Layout>
  );
};

export default IndexPage;
