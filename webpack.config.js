const path = require("path");
const webpack = require('webpack');


module.exports = {

    mode: "production",
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [

        new webpack.EnvironmentPlugin({

            DDW_LTI_CONFIGURATION_URL: 'http://example.com/lti/condfig'

        })

    ],
    entry: {
        app: "./src/client/index",
        styles: "./src/client/scss/styles.scss"
    },
    output: {
        path: path.resolve(__dirname, "public"),
        publicPath: "/",
        filename: "[name].min.js"
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json", ".scss"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use:  "ts-loader",
                exclude: /node_modules/
            },
            { test: /\.js$/, loader: "source-map-loader", enforce: "pre" },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: function () {
                                return [
                                    require('precss'),
                                    require('autoprefixer')
                                ]
                            }
                        }

                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.svg$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "assets/svg/"
                }
            },
            {
                test: /\.png$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "assets/png/"
                }
            }
        ]
    }


};