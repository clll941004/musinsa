const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    path: __dirname + '/dist',
    filename: 'index.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ['babel-loader'],
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
            options: { minimize: false }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
              loader: 'sass-loader',
              options: { sourceMap: true },
          },
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/html/index.html',
      filename: 'html/index.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/html/product-list.html',
      filename: 'html/product-list.html',
    }),
    new HtmlWebPackPlugin({
      template: './src/html/showcase.html',
      filename: 'html/showcase.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/style.css',
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    compress: true,
    contentBase: __dirname + "/dist/html"
  }
};