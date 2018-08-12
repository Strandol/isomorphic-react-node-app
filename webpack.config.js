const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const isClient = process.env.APP_ENV.trim() === 'client';

const common = {
	rules: [
		{ test: /\.(js)$/, use: 'babel-loader' },
	]
};

const clientConfig = {
	entry: './src/client/index.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	module: common,
	plugins: [
		new webpack.DefinePlugin({
			__isBrowser__: 'true',
		}),
	],
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebPackPlugin({
			template: './assets/index.html',
			filename: './index.html'
		})
	],
	devServer: {
		contentBase: './public',
		hot: true,
		open: true
	}
};

const serverConfig = {
	entry: './src/server/index.js',
	target: 'node',
	externals: [nodeExternals()],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'server.js',
		publicPath: '/',
	},
	module: common,
	plugins: [
		new webpack.DefinePlugin({
			__isBrowser__: 'false',
		}),
	],
};

console.log('====================================');
console.log(isClient, 'IS CLIENT');
console.log('====================================');

if (isClient) {
	module.exports = clientConfig;
} else {
	module.exports = serverConfig;
}
