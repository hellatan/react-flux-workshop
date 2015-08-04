var glob = require('glob')

var entries = glob.sync("./src/*/entry.js");
module.exports = {
    entry: entries.reduce(function (obj, entry) {
        var folder = entry.match(/\.\/src\/(.+)\/entry\.js/)[1];
        obj[folder] = entry;
        return obj;
    }, {}),
    output: {
        path: __dirname + "/public/c",
        filename: "/[name].bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loader: "babel-loader",  exclude: /node_modules/ }
        ]
    },
    devtool: 'inline-source-map'
};