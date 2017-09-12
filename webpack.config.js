var path = require('path');
var webpack = require('webpack');

var DIST = path.resolve(__dirname, 'app/static/dist/');
var SRC = path.resolve(__dirname, 'app/static/src/');

module.exports = {
  entry: ['whatwg-fetch', SRC + '/main.jsx'],
  output: { path: DIST, filename: 'bundle.js', publicPath: DIST + '/' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
            plugins: ["transform-decorators-legacy", "transform-class-properties", "transform-object-rest-spread"]
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.png$/,
        loader: "file-loader"
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      }
    ]
  }
};