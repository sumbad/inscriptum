const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const webpackConfigCommon = require('@insum/config/webpack/webpack.config.common.js');


const isDevMode = process.env.NODE_ENV === 'development';

module.exports = function (helper) {

  let commonCFG = webpackConfigCommon(helper);

  commonCFG.plugins = [
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
    'app': path.resolve(helper.PATHS.src, 'app/notepad/notepad.ts'),
    'vendor': path.resolve(helper.PATHS.src, 'vendor.ts'),
    'note': path.resolve(helper.PATHS.src, 'app/note/note.ts'),
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
        {loader:  MiniCssExtractPlugin.loader,},
        'css-loader',
        'postcss-loader',
        'sass-loader',
      ],
      include: [path.join(helper.PATHS.src, 'modules/note')]
    }
  );

  commonCFG.module.rules[5] = {
    ...commonCFG.module.rules[5],
    exclude: [path.join(helper.PATHS.src, 'modules/note')]
  };

  commonCFG.module.rules.unshift(
    {
      test: /\.less$/,
      use: [
        'raw-loader',
        'postcss-loader',
        'less-loader',
      ],
      // include: [path.join(helper.PATHS.src, 'components')]
    }
  );

  commonCFG.optimization = {
    minimize: !isDevMode,
    minimizer: [new TerserPlugin()],
    sideEffects: false,
    splitChunks: {
      cacheGroups: {
        vendors: {
          enforce: true
        }
      }
    }
  };

  return commonCFG;
};