const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {

    entry: {

        server: './src/server/index.ts'

    },
    target: 'node',
    externals: [nodeExternals()],
    devtool: 'inline-source-map',
    module: {

        rules: [

            { test: /\.tsx?$/, loader: 'awesome-typescript-loader', exclude: /node_modules/ }

        ]

    },
    resolve: {
        extensions: [ '.tsx', '.jsx', '.ts', '.js' ]
    },
    output: {

        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist/'),

    },
    node: { fs: "empty" }

};