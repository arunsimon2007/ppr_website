const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {    
    mode: 'production',
    entry : {
        app: './public/src/app.js'
    },
    output : {
        filename: '[name].bundle[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    MiniCssExtractPlugin.loader,'css-loader'
                    ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,'css-loader','sass-loader'
                ]
            },
            {
                test: /\.(png|jpg)$/i,
                use: [
                      'file-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env'],
                      plugins: ['@babel/plugin-proposal-object-rest-spread','transform-class-properties']
                    }
                }
            },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader',
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new MiniCssExtractPlugin({
            filename:'styles[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            title:'Priya Peggy Romal',
            template: path.resolve(__dirname, 'public/src/templates/', 'index.hbs'),
            //template:'public/src/templates/index.hbs',
            description:'some description'
        })
    ]
}