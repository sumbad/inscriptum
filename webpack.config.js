const path = require('path');
const { merge } = require('webpack-merge');

const webpackConfigDev = require('./webpack.config.dev.js');
const webpackConfigProd = require('./webpack.config.prod.js');
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
  mode: helper.ENV.isDevMode ? 'development' : 'production',
  resolve: {
    modules: [helper.PATHS.src, helper.PATHS.node_modules],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs', '.json'],
  },
  entry: {
    notepad: path.resolve(helper.PATHS.src, 'app/notepad/index.ts'),
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
  module.exports = [merge(webpackConfigDev(helper), mainConfig)];
} else {
  module.exports = [
    merge(webpackConfigProd(helper), {
      ...mainConfig,
      mode: 'production',
      stats: {
        // Examine all modules
        // maxModules: Infinity,
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
