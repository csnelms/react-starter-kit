const path = require('path')

module.exports = {
  entry: ['babel-polyfill', path.resolve(__dirname, 'js/src/app')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'js/src/')
    }
  },
  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader'] },
      { test: /\.jsx$/, use: ['babel-loader'] },
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
}
