import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import TerminalText from '../../lib/TerminalText/TerminalText';

export const TerminalModule = ({ startingText }) => {
  const textElement = React.createRef();

  useEffect(() => {
    const terminal = TerminalText({
      targetElement: textElement.current,
      keypresses: 'nolan fahey'.split(''),
      inputText: startingText || '',
    });

    terminal.animate();
  });

  return <span ref={textElement}></span>;
};

TerminalModule.propTypes = {
  startingText: PropTypes.string,
};
