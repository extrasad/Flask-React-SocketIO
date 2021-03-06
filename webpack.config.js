var path = require('path');

const ENTRY_DIR = path.resolve(__dirname, 'app/static/javascript/src');
const OUTPUT_DIR = path.resolve(__dirname, 'app/static/javascript/bin');

module.exports = {
	entry: ENTRY_DIR + '/index.js',
	output: {
		path: OUTPUT_DIR,
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	}
};