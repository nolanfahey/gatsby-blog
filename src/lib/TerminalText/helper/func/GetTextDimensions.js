function getTextDimensions(text, font) {
  const canvas =
    getTextDimensions.canvas || (getTextDimensions.canvas = document.createElement('canvas'));
  const context = canvas.getContext('2d');
  context.font = font;
  const metrics = context.measureText(text);
  return [metrics.width, metrics.height];
}

export default getTextDimensions;
