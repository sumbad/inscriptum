/** @typedef {import('@insum/webpack.config/types').Helper} Helper */

const path = require('path');
const merge = require('webpack-merge');

const webpackConfigCommon = require('@insum/webpack.config/webpack.config.common.js');
const webpackConfigDev = require('@insum/webpack.config/webpack.config.dev.js');
const webpackConfigProd = require('@insum/webpack.config/webpack.config.prod.js');
const webpackConfigMix = require('./webpack.mix.js');

/**
 * @type {Helper}
 */
let helper = {
  PATHS: {
    root: path.join(__dirname, './'),
    src: path.join(__dirname, 'src'),
    node_modules: 'node_modules', //path.join(__dirname, 'node_modules'),
    dist: path.join(__dirname, 'build'),
    publicPath: '',
    outputPath: '', //process.env.NODE_ENV === 'production' ? 'public/' : ''
  },
  ENV: {
    target: process.env.npm_lifecycle_event,
    devServerPort: 3333,
    isDevMode: process.env.NODE_ENV === 'development',
  },
};

const mainConfig = {
  resolve: {
    modules: [helper.PATHS.src, helper.PATHS.node_modules],
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  entry: {
    notepad: path.resolve(helper.PATHS.src, 'app/notepad/notepad.ts'),
    note: path.resolve(helper.PATHS.src, 'app/note/note.ts'),
  },
  output: {
    path: helper.PATHS.dist,
    publicPath: '/',
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].bundle.js',
  },
  ...webpackConfigMix(helper),
};

if (helper.ENV.isDevMode) {
  module.exports = [merge(webpackConfigCommon(helper), webpackConfigDev(helper), mainConfig)];
} else {
  module.exports = [
    merge(webpackConfigCommon(helper), webpackConfigProd(helper), {
      ...mainConfig,
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
    }),
  ];
}
