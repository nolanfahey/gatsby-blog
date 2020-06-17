import PropTypes from 'prop-types';
import React from 'react';

const Codeblock = ({ code, language }) => {
  return (
    <>
      <code className={'language-'.concat(language)}>
        var rows = prompt("How many rows for your multiplication table?"); var cols = prompt("How
        many columns for your multiplication table?"); if(rows == "" || rows == null) rows = 10;
        if(cols== "" || cols== null) cols = 10; createTable(rows, cols);
      </code>
    </>
  );
};

Codeblock.propTypes = { code: PropTypes.string.isRequired, language: PropTypes.string };

export default Codeblock;
