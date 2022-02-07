const path = require('path');

module.exports = {
  entry: './src/script.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    publicPath: "/rpsGame/",
    path: path.resolve(__dirname, 'dist'),
  },
};