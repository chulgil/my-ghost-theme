'use strict'

const util = require('gulp-util')
const path = require('path')
module.exports = {
    entry: {
        app: './main.js'
    },
    output: {
        filename: '/dist/bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: util.env.production ? false : 'source-map',
    module: {
        preLoaders: [
            {
                test: /\.vue$/,
                loader: 'eslint',
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'eslint',
            }
        ],
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    vue: {
        loaders: {
            js: 'babel!eslint'
        }
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }
}