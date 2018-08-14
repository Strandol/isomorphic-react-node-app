const path = require('path');

const clientConfig = {
  entry: path.join(__dirname, '../src/client/index.js'),
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader', exclude: /node_modules/ },
    ]
  },
  optimization: {
    minimize: true,
    occurrenceOrder: true
  },
  stats: {
    entrypoints: false,
    assets: false,
    builtAt: false,
    chunks: false,
    chunkModules: false,
    modules: false,
    usedExports: false,
    reasons: false
  }
};

module.exports = clientConfig;
