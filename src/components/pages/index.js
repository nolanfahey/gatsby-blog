import React from 'react';
import { Link } from 'gatsby';

import Layout from '../common/layout';
import Image from '../common/image';
import SEO from '../common/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
      A B C Č Ć D Đ E F G H I J K L M N O P Q R S Š T U V W X Y Z Ž a b c č ć d đ e f g h i j k l m
      n o p q r s š t u v w x y z ž А Б В Г Ґ Д Ђ Е Ё Є
    </h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
    </p>
  </Layout>
);

export default IndexPage;
