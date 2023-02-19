const path = require('path');

module.exports = {
    mode: 'production',
    entry: [
        "./src/index.ts",
    ],
    output: {
        filename: "index.js",
        path: path.resolve(__dirname),
        library:{
            type: "commonjs-static",
        }
    },
    module:{
        rules: [
            {
                test: /\.(ts)$/,
                use: "babel-loader",
                exclude: /node_modules/ 
            }
        ],
    },
    resolve: {
        extensions: [".ts"]
    },
    target: "web",
    plugins: [
    ]
};