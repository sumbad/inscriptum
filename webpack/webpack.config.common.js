const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "css/[name].css",
  disable: process.env.NODE_ENV === "development"
});



module.exports = function (helper) {
  return {
    entry: {
      'app': path.resolve(helper.PATHS.src, 'main.ts')
    },
    output: {
      path: helper.PATHS.build,
      publicPath: '/',
      filename: 'js/[name].js'
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'ts-loader',
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader',
          options: {
            name: '[folder]/[name].[ext]?[hash]'
          }
        },
        // {
        //   test: /\.(png|jpg|gif|svg|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        //   use: `file-loader?name=[folder]/[name].[ext]&publicPath=${publicPath}images/&outputPath=images/`,
        // },
        {
          test: /\.(eot|woff|woff2|ttf)(\?v=\d+\.\d+\.\d+)?$/,
          use: 'file-loader?name=[folder]/[name].[ext]',
        },
        {
          test: /\.scss$/,
          use: extractSass.extract({
            use: [{
              loader: "css-loader"
            }, {
              loader: "sass-loader"
            }],
            // use style-loader in development
            fallback: "style-loader"
          })
        },
        {
          test: /\.(html|htm)$/,
          loader: 'html-loader',
          exclude: [path.join(helper.PATHS.src, 'components'), path.join(helper.PATHS.src, 'data')]
        },
        {
          test: /\.(html|htm)$/,
          use: [
              {
                  loader: 'babel-loader'
              },
              {
                  loader: 'template-literals-loader'
              },
          ],
          include: [path.join(helper.PATHS.src, 'components'), path.join(helper.PATHS.src, 'data')]
      },
      ]
    },
    resolve: {
      modules: [helper.PATHS.src, helper.PATHS.node_modules],
      extensions: ['.ts', '.js', '.json']
    },
    plugins: [
      extractSass
    ]
  }
}