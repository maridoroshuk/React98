const path = require('path');

module.exports = async ({ config }) => {
  config.plugins.push(
    new CopyWebpackPlugin({
      patterns: [{
        from: resolve(__dirname, '../src/styles/fonts'),
        to: 'static/fonts'
      }]
    }),
  );

  return config;
};
