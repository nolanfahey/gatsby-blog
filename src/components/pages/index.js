import React from 'react';

import Layout from '../common/layout';
import SEO from '../common/seo';
import Content from '../common/content';
import Codeblock from '../common/codeblock';

const IndexPage = () => {
  const code = `
  const test = 1;
  const laser = 2;
  `;

  return (
    <Layout>
      <SEO title="Home" />
      <Content>
        <h1>Hi! I'm Nolan</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum
        </p>
        <Codeblock code={code} language="js" />
      </Content>
    </Layout>
  );
};

export default IndexPage;
