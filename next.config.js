const webpack = require('webpack');
const withImages = require('next-images');
const withVideos = require('next-videos');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const conf = {
    devtool: 'source-map',
    compress: true,
    target: "serverless",
    images: {
      disableStaticImages: true
    },
    optimizeFonts: true,
    optimization: {
        removeEmptyChunks: true,
        chunkIds: 'deterministic',
        minimize: true,
        minimizer: [
          new TerserPlugin({
            test: /\.js($|\?)/i,
            include: /\.js$/,
            parallel: true,
            extractComments: true,
          }),
      ]
    },
    webpack: (config) => {
      config.optimization.minimizer.push(
        new OptimizeCSSAssetsPlugin({})
     );
      config.plugins.push(
        new webpack.optimize.LimitChunkCountPlugin({
           maxChunks: 1,
        })
     );
      return config
    },
}

module.exports = withImages(withVideos(conf, {}));