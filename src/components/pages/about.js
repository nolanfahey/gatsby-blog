import React from 'react';

import Layout from '../common/layout';
import SEO from '../common/seo';
import Content from '../common/content';

import SkillMap from '../SkillMap/skillMap';

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Content>
      <SkillMap />
    </Content>
  </Layout>
);

export default AboutPage;
