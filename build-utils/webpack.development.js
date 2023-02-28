module.exports = () => ({
	devtool: 'eval',
	// devServer: {
	// 	open: true,
	// },
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						},
					},
				],
			},
		],
	},
});
