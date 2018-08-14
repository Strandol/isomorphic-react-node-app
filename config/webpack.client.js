const path = require('path');

const clientConfig = {
  entry: ['babel-polyfill', path.join(__dirname, '../src/client/index.js')],
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader', exclude: /node_modules/ },
      { 
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  optimization: {
    minimize: true
  },
  stats: {
    entrypoints: false,
    assets: false,
    chunks: false,
    chunkModules: false,
    modules: false,
    usedExports: false,
    reasons: false
  }
};

module.exports = clientConfig;
