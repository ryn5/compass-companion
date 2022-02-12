const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: { popup: './popup.js', background: './background.js' },
  module: {
    rules: [{ test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ }], // do not forget to change/install your own TS loader
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({ template: 'popup.html' }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'manifest.json' },
        { from: 'images/blue.jpeg' },
      ],
    }),
  ],
  output: { filename: '[name].js', path: path.resolve(__dirname, 'dist') }, // chrome will look for files under dist/* folder
};