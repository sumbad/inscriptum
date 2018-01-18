const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "css/[name].css",
  disable: process.env.NODE_ENV === "development"
});



module.exports = function(helper) {
  return {
    entry: {
      // 'babel-polyfill': 'babel-polyfill',
      'app': path.resolve(helper.PATHS.src, 'main.ts')
    },
    output: {
      path: helper.PATHS.build,
      publicPath: '/',
      filename: 'js/[name].js',
      chunkFilename: 'js/[name].bundle.js',
    },
    module: {
      rules: [{
          test: /\.ts$/,
          // loader: 'ts-loader',
          use: [{
            loader: "babel-loader"
          }, {
            loader: "ts-loader"
          }],
          exclude: /node_modules/
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          // include: [
          //   path.resolve(helper.PATHS.src),
          //   path.resolve(helper.PATHS.node_modules, '@webcomponents/webcomponentsjs/custom-elements-es5-adapter')
          // ]
          // exclude: [path.resolve(helper.PATHS.node_modules, '@webcomponents/webcomponentsjs/custom-elements-es5-adapter')]
          exclude: [helper.PATHS.node_modules]
          // exclude: /node_modules/
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
              },
              {
                loader: 'postcss-loader',
              },
              {
                loader: "sass-loader"
              }
            ],
            // use style-loader in development
            fallback: "style-loader"
          }),
          exclude: [path.join(helper.PATHS.src, 'components')]
        },
        {
          test: /\.scss$/,
          use: [{
              loader: "raw-loader"
            },
            // {
            //   loader: "css-loader"
            // },
            {
              loader: 'postcss-loader',
            },
            {
              loader: "sass-loader"
            }
          ],
          include: [path.join(helper.PATHS.src, 'components')]
        },
        {
          test: /\.(html|htm)$/,
          loader: 'html-loader',
          exclude: [path.join(helper.PATHS.src, 'components'), path.join(helper.PATHS.src, 'data')]
        },
        {
          test: /\.(html|htm)$/,
          // loader: "template-literals-loader",
          // loader: "raw-loader",
          use: [
            {
              loader: 'babel-loader'
            },
            {
              loader: 'template-literals-loader'
            },
          ],
          include: [path.join(helper.PATHS.src, 'components')]
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'raw-loader'
            },
          ],
          include: [path.join(helper.PATHS.src, 'components')]
        },
      ]
    },
    resolve: {
      modules: [helper.PATHS.src, helper.PATHS.node_modules],
      extensions: ['.ts', '.js', '.json']
    },
    plugins: [
      extractSass,
      new webpack.IgnorePlugin(/vertx/)
    ]
  }
}