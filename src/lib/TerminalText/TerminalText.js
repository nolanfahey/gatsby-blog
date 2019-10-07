const defaultSettings = {
  targetElement: null,
  inputText: '',
};

class TerminalText {
  constructor(options, callback) {
    if (!options || typeof options !== 'object') {
      throw new Error(`Invalid options: ${options}`);
    }
  }
}
