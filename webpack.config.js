const path = require('path')
const merge = require('webpack-merge');

const webpackConfigMix = require('./webpack.mix.js');
const webpackConfigDev = require('@insum/config/webpack/webpack.config.dev.js');
const webpackConfigProd = require('@insum/config/webpack/webpack.config.prod.js');



let helper = {
  PATHS: {
    root: path.join(__dirname, './'),
    src: path.join(__dirname, './src'),
    node_modules: path.join(__dirname, './node_modules'),
    dist: path.join(__dirname, './dist'),
    publicPath: '',
    outputPath: '' //process.env.NODE_ENV === 'production' ? 'public/' : ''
  },
  TARGET: process.env.npm_lifecycle_event
};


if (process.env.NODE_ENV === 'production') {
  module.exports = [
    merge(
      webpackConfigMix(helper),
      webpackConfigProd(helper)
    )
  ];
} else {
  module.exports = [
    merge(
      webpackConfigMix(helper),
      webpackConfigDev(helper)
    )
  ];
}