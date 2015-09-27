module.exports = function (isProduction) {
  return {
    debug: !isProduction,
    devtool: !isProduction ? 'source-map' : undefined,
    output: {
      path: __dirname + '/build',
      filename: 'main.js'
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
      ]
    }
  };
};
