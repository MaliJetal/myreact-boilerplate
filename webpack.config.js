const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",

	output: {
		path: path.join(__dirname, "/dist"),
		filename: "bundle.js",
	},

	plugins: [
		new HTMLWebpackPlugin({
			template: "./src/index.html",
		}),
	],

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				// loader: "babel-loader",
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
					},
				},
			},
			{
				test: /\.js?$/,
				// loader: "babel-loader",
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
					},
				},
			},
		],
	},
};
