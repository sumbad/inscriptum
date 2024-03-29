module.exports = function(helper) {
  return {
    devServer: {
      historyApiFallback: true,
      port: helper.ENV.devServerPort || 3000,
    },
    performance: {
      hints: false,
    },
    devtool: 'source-map',
  };
};
