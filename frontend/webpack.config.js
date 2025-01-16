/* eslint-disable import/no-anonymous-default-export */
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.js', 
    output: {
        filename: 'bundle.[contenthash].js',
        path: resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    devServer: {
        compress: true,
        port: 3000,
        historyApiFallback: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader',   
                    'sass-loader',  
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 
                    'css-loader',   
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/, 
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: 'assets/',
                        },
                    },
                ],
            },
            {
                test: /\.(mp3|wav|ogg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'music/',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "main.[contenthash].css"
        }),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: true,
            verbose: true,
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    resolve: {
        extensions: ['.js', '.jsx'], 
    },
    performance: {
        hints: false, 
    },
};
