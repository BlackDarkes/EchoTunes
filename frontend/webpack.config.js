const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js', // ваш основной файл
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // указываем директорию для статических файлов
        },
        compress: true,
        port: 3000,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // добавляем поддержку .jsx
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
                    'style-loader', // добавляет CSS в DOM
                    'css-loader',   // интерпретирует @import и url()
                    'sass-loader',  // компилирует Sass в CSS
                ],
            },
            {
                test: /\.css$/, // добавляем правило для обработки CSS
                use: [
                    'style-loader', // добавляет CSS в DOM
                    'css-loader',   // интерпретирует @import и url()
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/, // добавляем правило для обработки изображений
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]', // настраиваем имя выходного файла
                            outputPath: 'assets/', // указываем папку для выходных файлов
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
            template: './public/index.html', // ваш HTML шаблон
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx'], // добавляем .jsx
    },
    performance: {
        hints: false, // Отключить предупреждения о производительности
    },
};
