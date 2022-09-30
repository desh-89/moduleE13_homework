const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require('path');





module.exports = {
    mode: 'development',
    entry: './src/index.js',
   devServer: {
     contentBase: './dist',
     hot: true,
   },
    plugins: [
           new MiniCssExtractPlugin(),
           new CssMinimizerPlugin(),
           new TerserWebpackPlugin(),
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