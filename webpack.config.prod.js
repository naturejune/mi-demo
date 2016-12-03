module.exports = {
  entry: './src/index',
  output: {
    filename: 'index.js',
    path: __dirname + '/lib',
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loaders: ['babel']
    }]
  }
}