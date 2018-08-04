const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
              exclude: /node_modules/,
              loader: 'babel-loader',
              options: {
                presets: ['es2015', 'react'],
                plugins: [
                    ['transform-react-jsx', { pragma: 'h' }]
                ]	
              },
              test: /\.jsx?$/
            },
            {
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                  presets: ['es2015', 'react'],
                  plugins: [
                      ['transform-react-jsx', { pragma: 'h' }]
                  ]	
                },
                test: /\.js?$/
              },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ],
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public'
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
    ],
    node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    target: 'web'
};