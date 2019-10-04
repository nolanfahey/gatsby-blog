import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

// React component imports
import { Navbar } from './navbar';

// CSS modules
import styles from './css/header.module.styl';

const Header = () => (
  <>
    <header>
      <div className={styles.header}>
        <Navbar />
      </div>
    </header>
    <div className={styles.border} />
  </>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
