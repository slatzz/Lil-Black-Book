const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path')
const nodeExternals = require('webpack-node-externals');
const htmlPlugin = new HtmlWebPackPlugin({
    filename: './index.html',
    template: './src/index.html',
  })

const config = {
    entry: [path.resolve(__dirname, './src/index.js')],
    target: 'node',
    // externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [htmlPlugin],
    // mode: 'production',
    resolve: {
    modules: [path.resolve('node_modules'), 'node_modules']
  },
  module: {
    rules: [
      // { test: /\.html$/, 
      // exclude: [/node_modules/, require.resolve('./src/index.html')],
      // use: {
      //     loader: 'file-loader',
      //     query: {
      //         name: '[name].[ext]'
      //     },
      // },
      // }, 
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ]
  }
}

module.exports = config