const path = require('path')
const CleanPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfigCommon = require('@insum/config/webpack/webpack.config.common.js');



const isDevMode = process.env.NODE_ENV === 'development';

module.exports = function (helper) {

  let commonCFG = webpackConfigCommon(helper);

  commonCFG.plugins = [
    new CleanPlugin([helper.PATHS.build], {
      root: helper.PATHS.root,
      dry: false,
      verbose: true,
    }),
    // Copy directory contents to {output}/path/to/dist/directory/
    new CopyWebpackPlugin([
      {
        from: helper.PATHS.root + '/CNAME',
        to: path.join(helper.PATHS.build)
      },
      {
        from: helper.PATHS.src + '/public',
        to: path.join(helper.PATHS.build, helper.PATHS.outputPath),
        toType: 'dir'
      },
      {
        from: helper.PATHS.src + '/data',
        to: path.join(helper.PATHS.build, helper.PATHS.outputPath, '/data'),
        toType: 'dir'
      },
    ]),
    new HtmlWebpackPlugin({
      template: path.resolve(helper.PATHS.src, 'index.html'),
      chunks: ['app', 'polyfills', 'vendors'],
      hash: false,
      inject: true,
      favicon: false,
      minify: false,
      cache: true,
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: path.resolve(helper.PATHS.src, '404.html'),
      hash: false,
      inject: true,
      favicon: false,
      minify: false,
      cache: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ]

  commonCFG.entry = {
    'app': path.resolve(helper.PATHS.src, 'main.ts'),
    'vendor': path.resolve(helper.PATHS.src, 'vendor.ts'),
  };

  commonCFG.output = {
    path: helper.PATHS.build,
    publicPath: '/',
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].bundle.js',
  }

  commonCFG.resolve = {
    modules: [helper.PATHS.src, helper.PATHS.node_modules],
    extensions: ['.ts', '.js', '.json', '.svg']
  };

  commonCFG.module.rules[2] = {
    test: /\.(png|jpg|jpeg|gif|svg)(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file-loader',
    options: {
      name: '[folder]/[name].[ext]?[hash]'
    },
    exclude: [helper.PATHS.node_modules]
  };

  commonCFG.module.rules[6] = {
    test: /\.(svg)$/,
    loader: 'html-loader',
    exclude: [path.join(helper.PATHS.src, 'components'), path.join(helper.PATHS.src, 'data')]
  };

  commonCFG.module.rules.unshift(
    {
      test: /\.scss$/,
      use: [
        isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'sass-loader',
      ],
      exclude: [path.join(helper.PATHS.src, 'components')]
    }
  );

  return commonCFG;
};