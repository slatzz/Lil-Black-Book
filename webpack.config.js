const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path')
const htmlPlugin = new HtmlWebPackPlugin({
  template: '.src/index.html',
  filename: './index.html'
})
const nodeExternals = require('webpack-node-externals');

const config = {
    entry: [path.resolve(__dirname, 'src/index.js')],
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    mode: 'production',
    resolve: {
    modules: [path.resolve('node_modules'), 'node_modules']
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ]
  }
}

module.exports = config