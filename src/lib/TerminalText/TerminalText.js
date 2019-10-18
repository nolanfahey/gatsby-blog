import compileOptions from './helper/func/CompileOptions';
import isElement from './helper/func/IsElement';

import animationStatus from './helper/enum/AnimationStatus';
import commands from './helper/enum/Commands';

import Queue from './helper/class/Queue';
import Cursor from './helper/class/Cursor';

// Default configuration
const defaultSettings = {
  targetElement: null,
  cursorElement: null,
  keypresses: [],
  interactionEnabled: false,
  inputText: '', // starting text
  typingInterval: 120, // milliseconds
  blinkInterval: 500, // milliseconds
  pluginCallback: () => {},
};

const validateConfig = settings => {
  if (!settings || typeof settings !== 'object') {
    throw new Error(`Invalid argument ${settings}`);
  }

  if (settings.targetElement && !isElement(settings.targetElement)) {
    throw new Error(`Invalid required argument targetElement: ${settings.targetElement}`);
  }

  // Check presence/type of required settings
  if (settings.inputText && typeof settings.inputText !== 'string') {
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

const createKeypress = keyOrCode => {
  if (Number.isInteger(keyOrCode)) {
    return { key: '', keyCode: keyOrCode };
  }

  return { key: keyOrCode, keyCode: -1 };
};

const createInstruction = keypress => {
  const ARROW_LEFT = 37;
  const ARROW_RIGHT = 39;
  const BACKSPACE = 8;
  const DELETE = 46;

  switch (keypress.keyCode) {
    case ARROW_LEFT:
      return { command: commands.LEFT };
    case ARROW_RIGHT:
      return { command: commands.RIGHT };
    case BACKSPACE:
      return { command: commands.BACKSPACE };
    case DELETE:
      return { command: commands.DELETE };
    default:
      break;
  }

  if (keypress.key.length !== 1) {
    return null;
  }

  return { command: commands.CHARACTER, character: keypress.key };
};

class TerminalText {
  constructor(options) {
    this.settings = validateConfig(compileOptions(defaultSettings, options));
    this.targetElement = this.settings.targetElement;
    this.elementIsSet = Boolean(this.targetElement);

    this.status = animationStatus.STOPPED;
    this.instructionQueue = new Queue();
    this.string = `${this.settings.inputText} `;
    this.position = this.string.length - 1;
    this.cursor = new Cursor(this.settings.cursorElement);

    if (this.settings.interactionEnabled && this.elementIsSet) {
      this.attachCursor();
      this.targetElement.addEventListener('keydown', createInstruction);
    }

    for (let i = 0; i < this.settings.keypresses.length; i += 1) {
      this.instructionQueue.enqueue(createInstruction(createKeypress(this.settings.keypresses[i])));
    }
  }

  moveCursor(command) {
    switch (command) {
      case commands.LEFT:
        if (!this.position === 0) {
          this.position -= 1;
        }
        break;
      case commands.RIGHT:
        if (!(this.postion + 1 < this.string.length - 2)) {
          this.position += 1;
        }
        break;
      default:
    }
  }

  insert(character) {
    this.string =
      this.string.slice(0, this.position) + character + this.string.slice(this.position);
    this.position += 1;
  }

  delete() {
    if (this.position > this.string.length - 2) {
      return;
    }

    this.string = this.string.slice(0, this.position) + this.string.slice(this.position + 1);
  }

  backspace() {
    if (this.position > this.string.length - 2 || !this.position) {
      return;
    }

    this.string = this.string.slice(0, this.position - 1) + this.string.slice(this.position - 1);
  }

  setTargetElement(element) {
    this.targetElement = element;
    this.elementIsSet = true;
    this.attachCursor();
    this.updateElement();
  }

  setCursor(cursor) {
    this.cursor = cursor;
    this.attachCursor();
  }

  attachCursor() {
    this.targetElement.parentElement.appendChild(this.cursor.getElement());
  }

  updateElement() {
    this.targetElement.textContent = this.string;
  }

  processInstruction(instruction) {
    switch (instruction.command) {
      case commands.CHARACTER:
        this.insert(instruction.character);
        this.updateElement();
        break;
      case commands.LEFT:
      case commands.RIGHT:
        this.moveCursor(instruction.command);
        break;
      case commands.DELETE:
        this.delete();
        this.updateElement();
        break;
      case commands.BACKSPACE:
        this.backspace();
        this.updateElement();
        break;
      default:
    }
  }

  animate() {
    if (!this.elementIsSet || this.status === animationStatus.COMPLETED) {
      return;
    }

    if (this.instructionQueue.isEmpty()) {
      this.status = animationStatus.STOPPED;
      return;
    }

    this.status = animationStatus.ANIMATING;
    this.processInstruction(this.instructionQueue.dequeue());
    setTimeout(this.animate.bind(this), this.settings.typingInterval);
  }

  complete() {
    this.status = animationStatus.COMPLETED;
  }
}

export default TerminalText;
