const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const path = require('path');

module.exports = () => ({
	// output: {
	// 	filename: 'bundle.js',
	// 	path: path.resolve('dist'),
	// },
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
			},
		],
	},
	plugins: [new MiniCssExtractPlugin()],
});
