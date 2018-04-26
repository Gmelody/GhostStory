var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
	mode:"production",
	entry:"./src/index.jsx",
	output:{
		path:path.join(__dirname,"dist"),
		publicPath: "http://allcky.coding.me/ExtraordinaryEvents/dist/",
		filename:"js/[name].js"
	},
	resolve: {
		extensions:['.js','.jsx']
	},
	module: {
		rules:[
			{
				test:/\.css$/,
				loader:ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader','postcss-loader'] })
			},
			{
				test:/\.less$/,
				exclude:/node_modules/,
				loader:ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader','less-loader','postcss-loader'] })
			},
			{
				test:/\.jsx?$/,
				exclude:/node_modules/,
				loader:"babel-loader"
			},
			{
				test: /\.(png|jpg|gif|jpeg|bmp)$/,
				exclude: /node_modules/,
				loader: ['url-loader?limit=10&name=images/[name].[ext]','image-webpack-loader?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}']
			},
			{
				test:/\.(woff|woff2|svg|ttf|eot)($|\?)/i,
				loader:'url-loader?limit=50&name=fonts/[name].[ext]'
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			"React": "react",
			"ReactDOM":'react-dom'
		}),
		new HtmlWebpackPlugin({
			template:"./src/index.tmpl.html",
			hash:true,
			minify:{
				caseSensitive: false,
				collapseBooleanAttributes: true,
				collapseWhitespace: true
			}
		}),
		new ExtractTextPlugin('css/[name].css'),
		new OptimizeCSSPlugin({
			cssProcessorOptions: {
				safe: true
			}
		}),
		new webpack.optimize.OccurrenceOrderPlugin()
	],
	optimization:{
		splitChunks:{
			chunks:"all"
		}
	}
}