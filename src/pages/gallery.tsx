import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Gallery from 'components/Gallery';

const GalleryPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Gallery" />
      <Gallery />
    </Layout>
  );
};

export default GalleryPage;
