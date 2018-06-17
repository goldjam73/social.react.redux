const path = require('path');

const config = {
    entry: './src/main.js',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'social.js',
        library: 'SocialReactRedux',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'react']
                }
            }
        }]
    }
};

module.exports = config;
