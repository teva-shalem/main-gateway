/* eslint-disable @typescript-eslint/no-var-requires */

require('./riot-ts-preprocessor')
require('./riot-sass-preprocessor')

const {resolve}         = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './app/main.ts',
  output: {
    path: resolve(__dirname, 'public'),
    publicPath: '/public/',
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'טבע שלם | השער הראשי',
      meta: {
        charset: 'UTF-8',
      },
    }),
  ],
  devtool: 'inline',
  module: {
    rules: [
      {
        test: /\.riot$/,
        exclude: /node_modules/,
        use: [{
          loader: '@riotjs/webpack-loader',
          options: {
            hot: true,
          },
        }],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.riot', '.js'],
  },
}
