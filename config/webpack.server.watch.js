const webpack = require('webpack');
const config = require('./webpack.server');

const modified = {
  ...config,
  plugins: [
    ...config.plugins,
    new webpack.HotModuleReplacementPlugin(),
  ]
}

module.exports = modified;
