/* eslint-disable @typescript-eslint/no-var-requires */

require('./riot-ts-preprocessor')
require('./riot-sass-preprocessor')

const {resolve} = require('path')

module.exports = {
  entry: './app/main.ts',
  output: {
    path: resolve(__dirname, 'public'),
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  devtool: 'inline',
  module: {
    rules: [
      {
        test: /\.riot$/,
        exclude: /node_modules/,
        use: [{
          loader: '@riotjs/webpack-loader',
          options: {
            hot: true
          }
        }]
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.riot', '.js']
  }
}
