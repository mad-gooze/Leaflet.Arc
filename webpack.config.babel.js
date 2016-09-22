import webpack from 'webpack';
import path from 'path';

const libraryName = 'leaflet-arc';

const inputFile = `${libraryName}.js`;
const outputFile = `${libraryName}.min.js`;
const paths = {
    src: 'src',
    bin: 'bin'
};

var config = {
    entry: path.join(__dirname, paths.src, inputFile),
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, paths.bin),
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                test:  /\.js$/,
                loader: 'babel'
            },
            {
                test:  /\.js$/,
                loader: "eslint-loader"
            }
        ]
    }
};

module.exports = config;