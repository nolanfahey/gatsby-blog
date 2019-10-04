import React from 'react';
import PropTypes from 'prop-types';

// CSS Modules
import styles from './css/content.module.styl';

const Content = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
