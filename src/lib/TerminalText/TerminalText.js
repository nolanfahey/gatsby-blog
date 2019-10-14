import { compileOptions } from './helper/CompileOptions';
import { animationStatus } from './helper/AnimationStatus';
import { isElement } from './helper/IsElement';

// Default configuration
const defaultSettings = {
  targetElement: null,
  inputText: '', // starting text
  typingInterval: 150, // milliseconds
  blinkInterval: 500, // milliseconds
  pluginCallback: () => {},
};

// TODO: inherit cursor size, color from parent element size (text span? )
const validateConfig = settings => {
  if (!settings || typeof settings !== 'object') {
    throw new Error(`Invalid argument ${settings}`);
  }

  if (!settings.targetElement || !isElement(settings.targetElement)) {
    throw new Error(`Invalid required argument targetElement: ${settings.targetElement}`);
  }

  // Check presence/type of required settings
  if (!settings.inputText) {
    throw new Error('Missing required argument: inputText');
  }

  if (typeof settings.inputText !== 'string') {
    throw new Error(`Invalid argument type: ${settings.inputText} is not a string`);
  }

  if (typeof settings.typingInterval !== 'number') {
    throw new Error(`Invalid argument type: ${settings.typingInterval} is not a number`);
  }

  if (typeof settings.blinkInterval !== 'number') {
    throw new Error(`Invalid argument type: ${settings.blinkInterval} is not a number`);
  }

  if (typeof settings.pluginCallback !== 'function') {
    throw new Error(`Invalid argument type: ${settings.pluginCallback} is not a function`);
  }

  return settings;
};
const TerminalText = (options, callback) => {
  this.settings = validateConfig(compileOptions(defaultSettings, options));
  this.status = animationStatus.STOPPED;
  this.instructionQueue = [];
  this.string = this.settings.inputText;
  this.position = this.string.length - 1;

  this.animate = () => {
    while (this.instructionQueue.length > 0) {}
  };
};

module.exports = {
  TerminalText,
};
