const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const sassCssLoader = require('@insum/webpack.config/loaders/sass-css');

module.exports = function(helper) {
  return {
    module: {
      rules: [
        require('@insum/webpack.config/loaders/js'),
        require('@insum/webpack.config/loaders/ts'),
        require('@insum/webpack.config/loaders/file-img'),
        require('@insum/webpack.config/loaders/css'),
        require('@insum/webpack.config/loaders/less-raw'),
        {
          ...sassCssLoader,
          use: [{ loader: MiniCssExtractPlugin.loader }, ...sassCssLoader.use],
          include: [path.join(helper.PATHS.src, 'app/note')]
        },
        {
          ...require('@insum/webpack.config/loaders/sass'),
          exclude: [path.join(helper.PATHS.src, 'app/note')]
        }
      ]
    },
    plugins: [
      // Copy directory contents to {output}/path/to/dist/directory/
      new CopyWebpackPlugin([
        {
          from: helper.PATHS.root + '/CNAME',
          to: path.join(helper.PATHS.dist)
        },
        {
          from: helper.PATHS.src + '/public',
          to: path.join(helper.PATHS.dist, helper.PATHS.outputPath),
          toType: 'dir'
        },
        {
          from: helper.PATHS.src + '/data',
          to: path.join(helper.PATHS.dist, helper.PATHS.outputPath, '/data'),
          toType: 'dir'
        }
      ]),
      new HtmlWebpackPlugin({
        template: path.resolve(helper.PATHS.src, 'index.html'),
        chunks: ['notepad', 'polyfills'],
        hash: false,
        inject: true,
        favicon: false,
        minify: false,
        cache: true
      }),
      new HtmlWebpackPlugin({
        filename: '404.html',
        template: path.resolve(helper.PATHS.src, '404.html'),
        hash: false,
        inject: true,
        favicon: false,
        minify: false,
        cache: true
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css'
      }),
      new Dotenv({
        safe: true,
      })
    ]
  };
};
