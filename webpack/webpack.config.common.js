const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const isDevMode = process.env.NODE_ENV === 'development';


module.exports = function (helper) {
  return {
    entry: {
      // 'babel-polyfill': 'babel-polyfill',
      'app': path.resolve(helper.PATHS.src, 'main.ts'),
      'polyfills': path.resolve(helper.PATHS.src, 'polyfills.ts'),
      'vendor': path.resolve(helper.PATHS.src, 'vendor.ts'),
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
        },
        exclude: [helper.PATHS.node_modules]
      },
      // {
      //   test: /\.(png|jpg|gif|svg|ttf)(\?v=\d+\.\d+\.\d+)?$/,
      //   use: `file-loader?name=[folder]/[name].[ext]&publicPath=${publicPath}images/&outputPath=images/`,
      // },
      {
        test: /\.(eot|woff|woff2|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader?name=[folder]/[name].[ext]',
        exclude: [helper.PATHS.node_modules]
      },
      {
        test: /\.scss$/,

        use: [
          isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
        exclude: [path.join(helper.PATHS.src, 'components')]
      },
      {
        test: /\.scss$/,
        use: [
          'raw-loader',
          'postcss-loader',
          'sass-loader',
        ],
        include: [path.join(helper.PATHS.src, 'components')]
      },
      {
        test: /\.(html|htm|svg)$/,
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
      extensions: ['.ts', '.js', '.json', '.svg']
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          default: {
            enforce: true,
            priority: 1
          },
          polyfills: {
            name: 'polyfills',
            priority: 2
          },
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: 3,
            name: 'vendors',
            enforce: true,
            chunks: 'all'
          }
        }
      }
    },
    plugins: [
      new webpack.IgnorePlugin(/vertx/),
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
      // new HtmlWebpackPlugin({
      //   filename: 'index.html',
      //   chunks: ['app', 'polyfills', 'vendor'],
      //   template: path.resolve(helper.PATHS.src, 'index.html'),
      // }),
      // new HtmlWebpackPlugin({
      //   filename: '404.html',
      //   template: path.resolve(helper.PATHS.src, '404.html'),
      // })
    ]
  }
}


const chunksSortModeFn = (entryPoints) => function sort(left, right) {
  let leftIndex = entryPoints.indexOf(left.names[0]);
  let rightIndex = entryPoints.indexOf(right.names[0]);
  if (leftIndex > rightIndex) {
    return 1;
  } else if (leftIndex < rightIndex) {
    return -1;
  } else {
    return 0;
  }
};