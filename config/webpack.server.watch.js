const webpack = require('webpack');
const config = require('./webpack.server');

const wds = {
  hostname: process.env.HOSTNAME || "localhost",
  port: 8080
};

config.output.publicPath = `http://${wds.hostname}:${wds.port}/public`;

const modified = {
  ...config,
  plugins: [
    new webpack.DefinePlugin({ __CLIENT__: false, __SERVER__: true, __PRODUCTION__: false, __DEV__: true }),
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = modified;
