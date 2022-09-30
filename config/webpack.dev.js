const webpack = require('webpack')
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");





module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
   devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, "/dist")
          },
        hot: true,
        port: 8080,
   },
    plugins: [
           new MiniCssExtractPlugin(),
           new CssMinimizerPlugin(),
           new TerserWebpackPlugin(),
           new webpack.HotModuleReplacementPlugin(),
    ],
    output: {
      filename: 'main.js',
    },
    optimization: {
        minimize: true,
        minimizer: [new CssMinimizerPlugin({}) , new TerserWebpackPlugin({})],
    },
    module: {
        rules: [
        {
            test: /\.css$/,
            use: [{
                loader : MiniCssExtractPlugin.loader,
                options : {
                    esModule : true,
                }
            }, 'css-loader'],
        },
        {
            test: /\.pug$/,
            loader: 'pug-loader',
            options: {
                pretty: true
            }
        }
    ]
      },
  };
