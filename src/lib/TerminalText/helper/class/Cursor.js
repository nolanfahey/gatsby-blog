import isElement from '../func/IsElement';
import getTextDimensions from '../func/GetTextDimensions';

class Cursor {
  constructor(element) {
    this.element = isElement(element) ? element : document.createElement('div');

    this.getElement = () => {
      return this.element;
    };

    this.attach = parent => {
      parent.appendChild(this.element);
    };

    this.styleCursor = () => {
      this.element.style.width = '10px';
    };
  }
}

export default Cursor;
