const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');




module.exports = {
    mode: 'development',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        compress: true,
        port: 3000,
        open: true, //open browser automatically
        hot: true,  //hot reload
        historyApiFallback: true,

    },
    entry: {
        //change index to whatever you want your file name to be
        index: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        filename: '[name].html',
        template: 'src/index.html'
    })],
}

