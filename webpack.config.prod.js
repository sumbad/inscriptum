/** @typedef {import('./types').Helper} Helper */

const webpack = require('webpack');

module.exports = function() {
  return {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        PRODUCTION: JSON.stringify(true),
        BROWSER_SUPPORTS_HTML5: true,
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
      }),
    ],
  };
};
