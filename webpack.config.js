var webpack = require('webpack');

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
          'process.env.MNEMONIC': JSON.stringify(process.env.MNEMONIC),
        })
    ],
    }