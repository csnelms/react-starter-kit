import webpack from 'webpack'
import path from 'path'

module.exports = {
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'js/src/app')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'js/src')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'js/src/')
    }
  },
  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader'] },
      { test: /\.jsx$/, use: ['babel-loader'] },
      { test: /\.txt$/, use: ['raw-loader'] },
      { test: /\.css$/, use: ['css-loader'] }
    ]
  }
}
