import React from 'react';
import { Link } from 'gatsby';

import Layout from '../common/layout';
import Image from '../common/image';
import SEO from '../common/seo';
import Content from '../common/content';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Content>
      <h2>Hello,</h2>
      <h1></h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </p>
    </Content>
  </Layout>
);

export default IndexPage;
