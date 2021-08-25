const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = function (helper) {
  return {
    module: {
      noParse: /public\/note\/.*\.html/,
      rules: [
        {
          test: /\.m?js(x?)$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.ts(x?)$/,
          use: [
            {
              loader: 'babel-loader',
              // options: require('./babel.config')
            },
            {
              loader: 'ts-loader',
              options: {
                configFile: path.join(__dirname, 'tsconfig.json'),
              },
            },
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)(\?v=\d+\.\d+\.\d+)?$/,
          type: 'asset/resource',
          generator: {
            filename: '[folder]/[name].[ext]?[hash]',
          },
        },
        // {
        //   test: /\.(eot|woff|woff2|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        //   type: 'asset/resource',
        // },
        {
          test: /\.css$/,
          type: 'asset/source',
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                url: false,
              },
            },
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
          include: /app\/note\/.*/,
        },
        {
          test: /\.(sa|sc|c)ss$/,
          type: 'asset/source',
          use: [
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
          exclude: [/app\/note\/.*/, /\.inject\.(sa|sc|c)ss$/],
        },
        {
          test: /\.inject\.(sa|sc|c)ss$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                url: false,
              },
            },
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
      ],
    },
    plugins: [
      // Copy directory contents to {output}/path/to/dist/directory/
      new CopyWebpackPlugin({
        patterns: [
          {
            from: helper.PATHS.src + '/public',
            to: path.join(helper.PATHS.dist, helper.PATHS.outputPath),
            toType: 'dir',
          },
          {
            from: helper.PATHS.src + '/data',
            to: path.join(helper.PATHS.dist, helper.PATHS.outputPath, '/data'),
            toType: 'dir',
          },
          {
            from: helper.PATHS.root + '/CNAME',
            to: path.join(helper.PATHS.dist),
          },
          {
            from: path.resolve(helper.PATHS.src, '404.html'),
            to: path.join(helper.PATHS.dist),
          },
        ],
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(helper.PATHS.src, 'index.html'),
        chunks: ['notepad', 'polyfills'],
        hash: false,
        inject: true,
        favicon: false,
        minify: false,
        cache: true,
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
      }),
      new Dotenv({
        safe: true,
        allowEmptyValues: true,
        path: helper.ENV.isDevMode ? './.env' : './.env.production',
      }),
    ],
  };
};
