const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = function () {
  return {
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          test: /\.js(\?.*)?$/i,
          exclude: /public/,
        }),
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        PRODUCTION: JSON.stringify(true),
        BROWSER_SUPPORTS_HTML5: true,
      }),
      // new webpack.LoaderOptionsPlugin({
      //   debug: true
      // }),
    ],
  };
};
