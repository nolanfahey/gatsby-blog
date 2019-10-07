const compileOptions = require('../CompileOptions.js');

const defaults = {
  color: 'red',
  size: 'big',
  shape: 'triangular bipyramid',
};

test('Inserting empty options outputs defaults', () => {
  expect(compileOptions.compileOptions(defaults, {})).toStrictEqual(defaults);
});

const options = {
  color: 'blue',
  size: 'small',
  shape: 'square',
};

test('Default options are correctly overwritten', () => {
  expect(compileOptions.compileOptions(defaults, options)).toStrictEqual(options);
});

const green = {
  color: 'green',
};

test('Default options preserved when not overwritten', () => {
  expect(compileOptions.compileOptions(defaults, green)).toStrictEqual({
    color: 'green',
    size: 'big',
    shape: 'triangular bipyramid',
  });
});
