module.exports = {
    entry: "./component/App.jsx",

    output: {
        path: __dirname,
        filename: "out/bundle.js"
    },

    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.jsx?$/,
              exclude: /node_modules/ ,
              loader: "babel",
              query: {
                presets: ['react', 'es2015']
              }
            },
            //bootstrap crap loading
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },

        ]
    },

    devServer: {
      port: 3030,
      inline: true,
      host: "0.0.0.0"
    },

    devtool: "#inline-source-map"
};
