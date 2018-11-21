var path = require('path');
var webpack = require('webpack');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = function (helper) {
  return {
    devtool: '#source-map',
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      // new UglifyJSPlugin(),
      // new webpack.optimize.UglifyJsPlugin({
      //   sourceMap: true,
      //   compress: {
      //     warnings: true
      //   }
      // }),
      new webpack.LoaderOptionsPlugin({
        minimize: true
      })
    ]
  }
}