module.exports = {
    entry: ['@babel/polyfill', './src/main.js'],
    output: {
        path: __dirname + '/public/', 
        filename: 'bundle.js',
    },
    devServer:{
        contentBase: __dirname + '/public',
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    }

}