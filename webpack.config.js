const path = require("path");


module.exports = [

    {
        name: "client-ts",
        mode: "production",
        entry: {
            app: "./src/client/index.tsx",
            launch: "./src/client/launch.tsx"
        },
        output: {
            path: path.resolve(__dirname, "public"),
            publicPath: "/",
            filename: "[name].min.js"
        },
        module: {
            rules: [
                {
                    test:  /\.(svg|png)$/,
                    loader: "file-loader",
                    options: {
                        name: "[ext]/[name].[ext]",
                        outputPath: "assets/"
                    }
                },
                {
                    test: /\.tsx$/,
                    loader:  "ts-loader",
                    options: {
                        transpileOnly: true
                    }
                }
            ]
        },
        resolve: {
            extensions: [".js", ".png", ".svg", ".tsx"]
        },
        externals: {
            dataworldWidgets: "dataworldWidgets"
        }
    },
    {
        name: "styles",
        mode: "production",
        entry:  "./src/client/scss/styles.scss",
        output: {
            path: path.resolve(__dirname, "public"),
            publicPath: "/",
            filename: "styles.min.js"
        },
        resolve: {
            extensions: [".js", ".scss"]
        },
        module: {
            rules: [
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
                }
            ]
        }
    }
];