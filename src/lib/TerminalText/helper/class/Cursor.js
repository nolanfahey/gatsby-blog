import isElement from '../func/IsElement';
import injectStylesheet from '../func/InjectStylesheet';
import createStylesheet from '../func/CreateStylesheet';

class Cursor {
  constructor(element) {
    this.element = isElement(element) ? element : document.createElement('div');

    const stylesheet = createStylesheet('../../css/cursor.css');
    injectStylesheet(stylesheet);

    this.getElement = () => {
      return this.element;
    };

    this.attach = parent => {
      parent.appendChild(this.element);
    };
  }
}

export default Cursor;
