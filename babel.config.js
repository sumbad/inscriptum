const babelConfigFunc = require('@insum/config/babel.config.js');



module.exports = function (api) {
  const babelConfig = babelConfigFunc(api)
  
  // babelConfig.presets[0][1].debug = true;

  // babelConfig.presets = undefined

  return babelConfig;
};