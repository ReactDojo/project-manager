var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    '../src/index'
  ],
  module: {
    loaders: [
      { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.s?css$/, loader: 'css-loader' },
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, '/public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './public',
    hot: true
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  node: {
    fs: 'empty'
  }
};
