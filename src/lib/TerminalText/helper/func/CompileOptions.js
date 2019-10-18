// compile options from defaults and options (where options overide defaults)
const compileOptions = (defaults, options) => {
  const result = { ...defaults };
  const settings = Object.getOwnPropertyNames(options);
  settings.forEach(settingKey => {
    result[settingKey] = options[settingKey];
  });

  return result;
};

export default compileOptions;
