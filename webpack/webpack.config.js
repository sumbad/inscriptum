const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge');
const CleanPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const webpackConfigCommon = require('./webpack.config.common.js');
const webpackConfigDev = require('./webpack.config.dev.js');
const webpackConfigProd = require('./webpack.config.prod.js');



let helper = {
  PATHS: {
    root: path.join(__dirname, '../'),
    src: path.join(__dirname, '../src'),
    node_modules: path.join(__dirname, '../node_modules'),
    build: path.join(__dirname, '../build'),
    publicPath: '',
    outputPath: ''//process.env.NODE_ENV === 'production' ? 'public/' : ''
  },
  TARGET: process.env.npm_lifecycle_event
}


let PREBUILD_CFG = {
  plugins: [
    new CleanPlugin([helper.PATHS.build], {
      root: helper.PATHS.root,
      dry: false,
      verbose: true,
    }),
    // Copy directory contents to {output}/path/to/build/directory/
    new CopyWebpackPlugin([
      {
        from: helper.PATHS.src + '/index.html',
        to: path.join(helper.PATHS.build)
      },
      {
        from: helper.PATHS.root + '/CNAME',
        to: path.join(helper.PATHS.build)
      },
      {
        from: helper.PATHS.src + '/404.html',
        to: path.join(helper.PATHS.build)
      },
      {
        from: helper.PATHS.src + '/public',
        to: path.join(helper.PATHS.build, helper.PATHS.outputPath),
        toType: 'dir'
      },
    ]),
  ]
}


if (process.env.NODE_ENV === 'production') {
  module.exports = [merge(PREBUILD_CFG, webpackConfigCommon(helper), webpackConfigProd(helper))];
} else {
  module.exports = [merge(PREBUILD_CFG, webpackConfigCommon(helper), webpackConfigDev(helper))];
}
