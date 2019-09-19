import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { Navbar } from './navbar';

import './header.css';

const Header = ({ siteTitle }) => (
  <header>
    <div class="header flexcontainer flexrow">
      <div class="name-link">
        <a href="#">{siteTitle}</a>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
