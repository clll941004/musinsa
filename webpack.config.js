const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

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
            options: {
              minimize: false,
              sources: false
            }
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
            loader: "postcss-loader",
            options: {sourceMap: true}
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ]
      },
      { 
        test: /\.(png|jpe?g|svg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: 'assets/[name].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html',
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
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/assets", to: "assets" },
      ],
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    port: 9000,
    compress: true,
    contentBase: path.resolve('src'),
    publicPath: '/',
    hot: true,
    inline: true,
    watchContentBase: true,
  }
};