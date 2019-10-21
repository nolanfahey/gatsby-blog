import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import TerminalText from '../../lib/TerminalText/TerminalText';

export const TerminalModule = ({ startingText, keypresses }) => {
  const textElement = React.createRef();
  const cursor = React.createRef();

  const terminal = new TerminalText({
    keypresses: keypresses,
    inputText: startingText || '',
  });


  useEffect(() => {
    terminal.setTargetElement(textElement.current);
    terminal.animate();
  });

  return (
    <div>
      <span ref={textElement}></span>
      <div ref={cursor}></div>
    </div>
  );
};

TerminalModule.propTypes = {
  startingText: PropTypes.string,
};
