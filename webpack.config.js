const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'js/src/app'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.js$/, use: ['babel-loader'] },
            { test: /\.jsx$/, use: ['babel-loader'] },
            { test: /\.txt$/, use: 'raw-loader' }
        ]
  }
};
