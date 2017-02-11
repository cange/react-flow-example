import { join, resolve } from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
  entry: {
    main: './src/index.js',
    vendor: [
      'react',
      'react-dom',
      'i18n-js'
    ]
  },
  output: {
    path: resolve(__dirname, 'dist'),
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)

    filename: '[name].js'
    // the filename template for entry chunks
  },
  module: { // configuration regarding modules
    rules: [ // rules for modules (configure loaders, parser options, etc.)
      {
        use: 'babel-loader',
        test: /\.jsx?$/,
        include: [
          resolve(__dirname, 'src')
        ],
        exclude: '/node_modules/',
      },
      {
        use: 'json-loader',
        test: /\.json$/
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract('css-loader!sass-loader')
      }
    ]
  },
  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)

    extensions: ['.js', '.json', '.jsx', '.scss']
    // extensions that are used
  },
  devtool: 'cheap-module-source-map', // cheap-variant of SourceMap with module mappings
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename:'vendor.js'
      // filename:'vendor[hash].js // see https://webpack.js.org/guides/caching/
    }),
    new ExtractTextPlugin('main.css')
  ]
}
