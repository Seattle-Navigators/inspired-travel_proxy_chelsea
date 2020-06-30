const path = require('path');
const srcDir = path.resolve(__dirname, 'client', 'src', 'test.jsx');
const outDir = path.resolve(__dirname, 'client', 'public');

module.exports = {
  entry: srcDir,
  output: {
    filename: 'bundle.js',
    path: outDir,
  },
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};