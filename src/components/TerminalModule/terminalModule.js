import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import TerminalText from '../../lib/TerminalText/TerminalText';

export const TerminalModule = ({ startingText }) => {
  const textElement = React.createRef();
  const terminal = new TerminalText({
    keypresses: 'nolan fahey'.split(''),
    inputText: startingText || '',
  });

  useEffect(() => {
    terminal.setTargetElement(textElement.current);
  });

  return <span ref={textElement} onMouseOver={() => terminal.animate()}></span>;
};

TerminalModule.propTypes = {
  startingText: PropTypes.string,
};
