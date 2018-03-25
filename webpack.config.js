const path = require('path');

module.exports = {

    module: {

        rules: [

            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components|es5)/,
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
        unit: './test/unit/index.js'
    },
    devtool: 'inline-source-map',
    output: {

        filename: '[name].js',
        path: path.resolve(__dirname, './dist/test'),

    },


};