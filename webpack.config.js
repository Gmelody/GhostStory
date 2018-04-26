var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
	mode:"development",
	entry:"./src/index.jsx",
	output:{
		filename:"[name].js"
	},
	resolve: {
		extensions: ['.js',".jsx"]
	},
	module:{
		rules:[
			{test:/\.css$/,loader:"style-loader!css-loader!postcss-loader"},
			{test:/\.less$/,loader:"style-loader!css-loader!less-loader!postcss-loader"},
			{test:/\.jsx?$/,loader:"babel-loader",exclude:/node_modules/},
			{test:/\.(png|jpg|jpeg|gif)$/,loader:"url-loader?limit=1000000"},
			{test:/\.(woff|woff2|svg|ttf|eot)($|\?)/i,loader:'url-loader?limit=50000000'}
		]
	},
	plugins:[
		new webpack.ProvidePlugin({
            "React": "react",
            "ReactDOM":'react-dom'
        }),
        new HtmlWebpackPlugin({
            template:"./src/index.tmpl.html"
        }),
        new OpenBrowserPlugin({
        	url: 'http://localhost:8080'
        })
	]
}