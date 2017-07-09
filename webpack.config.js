const webpack = require('webpack');
const path = require('path');

// test win10
module.exports = {
  context: __dirname,
  entry: './src/main.js',
  watch: true,
  output: {
    path: path.resolve(__dirname, './js'),
    filename: 'bundle.js',
    publicPath: '/js/'
  }
};