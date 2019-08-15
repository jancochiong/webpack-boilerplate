const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");
const CWD = process.cwd()
const webpack = require('webpack');

const common = {
    entry: [
        path.resolve(CWD, "../project/assets/js/main.js"),
        path.resolve(CWD, "../project/assets/css/main.scss"),
    ],
    mode: "development",
    output: {
        filename: "bundle.js",
        path: path.resolve(CWD, "../project/dist")
    },
    resolve: {
        extensions: ['.js', '.json', '.scss', '.css', '.svg'],
        alias: {
            'js': path.resolve(CWD, "../project/assets/js"),
            'css': path.resolve(CWD, "../project/assets/css"),
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: path.resolve(__dirname, '../node_modules/jquery/dist/jquery.js'),
            jQuery: path.resolve(__dirname, '../node_modules/jquery/dist/jquery.js'),
            'window.jQuery': 'jquery',
            'window.$': 'jquery'
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        }),
        new CleanWebpackPlugin()
    ],
}

module.exports = common;