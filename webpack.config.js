var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'code', 'client.imba'),
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.imba$/,
        use: 'imba/loader',
      }
    ]
  },
  resolve: {
    extensions: ['.imba', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Imba playground'
    })
  ],
  devtool: false,
}
