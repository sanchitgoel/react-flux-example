var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, '');
var APP_DIR = path.resolve(__dirname, '');

//configuration for webpack server and deployment
var config = {
  entry: APP_DIR + '/js/main.js',
  output: {
    path: BUILD_DIR + "/js",
    filename: 'bundle.js'
  },
	module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader',
		  query: {
               presets: ['es2015', 'react']
            }
      }
    ]
  }
};

module.exports = config;