const path = require('path');
const merge = require('webpack-merge');

const webpackConfigCommon = require('@insum/webpack.config/webpack.config.common.js');
const webpackConfigDev = require('@insum/webpack.config/webpack.config.dev.js');
const webpackConfigProd = require('@insum/webpack.config/webpack.config.prod.js');
const webpackConfigMix = require('./webpack.mix.js');

let helper = {
  PATHS: {
    root: path.join(__dirname, './'),
    src: path.join(__dirname, 'src'),
    node_modules: path.join(__dirname, 'node_modules'),
    dist: path.join(__dirname, 'build'),
    publicPath: '',
    outputPath: '' //process.env.NODE_ENV === 'production' ? 'public/' : ''
  },
  TARGET: process.env.npm_lifecycle_event
};

const mainConfig = {
  entry: {
    notepad: path.resolve(helper.PATHS.src, 'app/notepad/notepad.ts'),
    note: path.resolve(helper.PATHS.src, 'app/note/note.ts')
  },
  output: {
    path: helper.PATHS.dist,
    publicPath: '/',
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].bundle.js'
  },
  ...webpackConfigMix(helper)
};

if (process.env.NODE_ENV === 'production') {
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
        children: true
      }
    })
  ];
} else {
  module.exports = [merge(webpackConfigCommon(helper), webpackConfigDev(helper), mainConfig)];
}
