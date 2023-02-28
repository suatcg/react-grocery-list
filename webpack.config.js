const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');

const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require('./build-utils/loadPresets');

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
	return merge(
		{
			entry: './src/index.js',
			mode,
			output: {
				filename: 'bundle.js',
				path: path.resolve('dist'),
				chunkFilename: '[name].lazy-chunk.js',
			},
			module: {
				rules: [
					{
						test: /\.(js|jsx)$/,
						exclude: /node_modules/,
						use: 'babel-loader',
					},
				],
			},
			plugins: [
				new HtmlWebpackPlugin({
					template: './public/index.html',
				}),
				new webpack.ProgressPlugin(),
			],
		},

		modeConfig(mode),
		presetConfig({ mode, presets })
	);
};
