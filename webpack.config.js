const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    module: {

        rules: [

            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env']
                    }
                }
            }

        ]

    },
    entry: {
        index: './src/client/index.js'
    },
    devtool: 'inline-source-map',
    plugins: [

        new CleanWebpackPlugin(['src/client/public']),
        new CopyWebpackPlugin([

            {from: './src/client/assets/ddw.app.css', to: 'ddw.app.css'},
            {from: './src/client/assets/ddw.vendor.css', to: 'ddw.vendor.css'}

        ], {flatten: true}),
        new HtmlWebpackPlugin({

            template: './src/client/index.html'

        })
    ],
    output: {

        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'src/client/public'),

    },


};