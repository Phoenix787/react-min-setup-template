const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
	entry: {
		app: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist',
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: '/node_modules/',
				loader: 'babel-loader'
			},
			{
				test: /\.sass$/,
				use: [
					'style-loader',
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							//   // you can specify a publicPath here
							//   // by default it uses publicPath in webpackOptions.output
							//publicPath: '/dist/css',
							//   hmr: process.env.NODE_ENV === 'development',
						},
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					}, {
						loader: 'postcss-loader',
						options: {
							sourceMap: true, config: {path: 'src/js/postcss.config.js'}
						}
					}, {
						loader: 'sass-loader',
						options: {
							sourceMap: true, 
							implementation: require("sass")
						}
					}

				],
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							//   // you can specify a publicPath here
							//   // by default it uses publicPath in webpackOptions.output
							//publicPath: '/dist/css',
							//   hmr: process.env.NODE_ENV === 'development',
						},
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					}, {
						loader: 'postcss-loader',
						options: {
							sourceMap: true, config: {path: 'src/js/postcss.config.js'}
						}
					}

				],
			},
			

		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},

	devServer: {
		overlay: true
	},
	plugins: [
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// all options are optional
			publicPath: './sass/',
			filename: './css/[name].css'
		}),
	],
};