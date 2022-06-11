const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.config')
module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        historyApiFallback: true,
    },
})
