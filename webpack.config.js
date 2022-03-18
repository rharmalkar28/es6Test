const path = require('path');
module.exports={
    entry: path.resolve(__dirname,'src'),
    output: {
        path: path.resolve(__dirname,'build'),
        filename: 'bundle.js',
    },
devServer: {
    static: {
        directory: path.join(__dirname, 'build'),
      },
    port: 3000
},
module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }
    ]
}
};