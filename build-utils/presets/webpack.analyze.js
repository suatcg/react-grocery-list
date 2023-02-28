const webpackBuncleAnalyzer = require('webpack-buncle-analyzer');

module.exports = () => ({
	plugins: [new webpackBuncleAnalyzer()],
});
