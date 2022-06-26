var webpack = require('webpack');

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
          'process.env.MNEMONIC': JSON.stringify(process.env.MNEMONIC),
          'process.env.LP_API_KEY': JSON.stringify(process.env.LP_API_KEY),
        })
    ],
    }