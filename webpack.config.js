var webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/js/app'
  },

  output: {
    filename: '[name].js',
    path: 'public/js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/'
  },

  module: {
    loaders: [
      { test: /src(.+)\.js$/, loader: '6to5-loader?runtime&experimental' }
    ]
  },

  devtool: 'inline-source-map',

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('commons.js')
    , new webpack.ProvidePlugin({
      to5Runtime: 'imports?global=>{}!exports?global.to5Runtime!6to5/runtime'
    })
    //, new webpack.optimize.UglifyJsPlugin()
  ]

};