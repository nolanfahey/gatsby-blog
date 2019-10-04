import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

// React component imports
import { Navbar } from './navbar';

// CSS modules
import styles from './header.module.styl';

const Header = () => (
  <>
    <header>
      <div className={styles.header}>
        <Navbar></Navbar>
      </div>
    </header>
    <div className={styles.bandGradient} />
  </>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
