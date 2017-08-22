var path = require('path');
var webpack = require('webpack');



module.exports = function (helper) {
  return {
    // output: {
    //   path: helper.PATHS.build,
    //   publicPath: '/',
    //   filename: 'public/js/[name].js'
    // },

    devServer: {
      historyApiFallback: true,
      port: 3000,
      // stats: 'minimal',
      // outputPath: helper.PATHS.build,
      // noInfo: true
      // historyApiFallback: true,
      // noInfo: true,
      // hot: true,
      // contentBase: helper.PATHS.build
    },
    performance: {
      hints: false
    },
    devtool: '#eval-source-map'
  }
}
