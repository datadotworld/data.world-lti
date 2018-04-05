const path = require('path');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const WebpackMerge = require('webpack-merge');
const WebpackNodeExternals = require('webpack-node-externals');

const configs = {

    common: {
        client: {
            entry: {
                app: "./src/client/index.tsx",
                styles: "./src/client/scss/styles.scss"
            },
            output: {
                filename: "[name].bundle.js",
                path: path.resolve(__dirname, 'dist/public')
            },
            resolve: {
                extensions: [ ".ts", ".tsx", ".js", ".json", ".scss", ".css", ".svg" ]
            },
            module: {
                rules: [
                    { test: /\.tsx?$/, loader: "ts-loader" },
                    { test: /\.js$/, loader: "source-map-loader", enforce: "pre" },
                    {
                        test: /\.(scss)$/,
                        use: [
                            { loader: "style-loader" },
                            { loader: "css-loader" },
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
                            { loader: "sass-loader" }
                        ]
                    },
                    {
                        test: /\.svg$/,
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "assets/svg/"
                        }
                    }
                ]
            },
            plugins: [
                new WebpackCleanupPlugin({
                    exclude: [ "assets/svg/**/*" ]
                })
            ]
        },
        server: {
            entry: path.resolve(__dirname, "src/server/index.ts"),
            output: {
                filename: "server.bundle.js",
                path: path.resolve(__dirname, "dist")
            },
            module: {
                rules: [
                    { test: /\.ts$/, loader: "ts-loader" },
                    { test: /\.js$/, loader: "source-map-loader", enforce: "pre" },
                    {
                        test: /\.mustache$/,
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "views/"
                        }
                    }
                ]
            },
            plugins: [
                new WebpackCleanupPlugin({
                    exclude: [ "public/**/*" ]
                })
            ],
            resolve: {
                extensions: [ ".ts", ".js", ".mustache" ]
            },
            target: 'node',
            externals: [ WebpackNodeExternals() ]
        }
    },
    development: {
        client: {
            watch: true,
            devtool: "inline-source-map",
            mode: "development"
        },
        server: {
            watch: true,
            devtool: "inline-source-map",
            mode: "development"
        }
    },
    production: {
        client: {
            devtool: "source-map",
            mode: "production"
        },
        server: {
            devtool: "source-map",
            mode: "production"
        }
    },
    test: {
        entry: [
            "./test/integration/cache/connection.test.ts",
            "./test/integration/database/connection.test.ts",
            "./test/unit/config/configurable.test.ts",
            "./test/unit/config/database.test.ts",
            "./test/unit/config/redis.test.ts",
            "./test/unit/data.world/oauth.test.ts",
            "./test/unit/lms/provider.test.ts",
            "./test/unit/lms/secrets.test.ts",
            "./test/unit/views/mustache-engine.test.ts"
        ],
        output: {
            filename: "tests.bundle.js",
            path: path.resolve(__dirname, "dist")
        },
        module: {
            rules: [
                { test: /\.ts$/, loader: "ts-loader" },
                { test: /\.js$/, loader: "source-map-loader", enforce: "pre" }
            ]
        },
        plugins: [
            new WebpackCleanupPlugin({
                exclude: [ "public/**/*", "views/**/*", "server.bundle.js" ]
            })
        ],
        resolve: {
            extensions: [ ".ts", ".js" ]
        },
        target: 'node',
        mode: "development",
        devtool: "inline-source-map",
        externals: [ WebpackNodeExternals() ]
    }

};


module.exports = (environment) => {

    let webpackConfigs = [];

    if (environment.NODE_ENV === 'production') {

        webpackConfigs.push(WebpackMerge(configs.common.client, configs.production.client));
        webpackConfigs.push(WebpackMerge(configs.common.server, configs.production.server));

    } else {

        webpackConfigs.push(WebpackMerge(configs.common.client, configs.development.client));
        webpackConfigs.push(WebpackMerge(configs.common.server, configs.development.server));

    }

    if (environment.NODE_ENV === 'test') {

        return configs.test;

    }

    return webpackConfigs;

};