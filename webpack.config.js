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
    build: path.join(__dirname, './build'),
    publicPath: '',
    outputPath: '' //process.env.NODE_ENV === 'production' ? 'public/' : ''
  },
  TARGET: process.env.npm_lifecycle_event
};


if (process.env.NODE_ENV === 'production') {
  const conf = [
    merge(
      webpackConfigMix(helper),
      // webpackConfigProd(helper),
      {
        mode: 'production',
        stats: {
          // Examine all modules
          maxModules: Infinity,
          // Display bailout reasons
          // optimizationBailout: true,

          colors: false,
          hash: true,
          timings: true,
          assets: true,
          chunks: true,
          chunkModules: true,
          modules: true,
          children: true,
        },
      }
    ),
  ];
  
  module.exports = conf;
} else {
  module.exports = [
    merge(
      webpackConfigMix(helper),
      webpackConfigDev(helper)
    )
  ];
}