
var path = require('path');


module.exports = {
	entry:"./public/main.js",
	output: {
		path: path.join(__dirname + '/public'),
		filename: './bundle.js'
	}, 
	module: {
		loaders: [
			{
				test:/\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader', 
				query: {
					presets: ['react', 'es2015']
				}
			}
		]	
	}
}