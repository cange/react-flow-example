import { join, resolve } from 'path'
import webpack from 'webpack'

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
        test: /\.json$/,
        use: 'json-loader'
      }
    ]
  },
  resolve: {
   // options for resolving module requests
   // (does not apply to resolving to loaders)

     extensions: ['.js', '.json', '.jsx']
     // extensions that are used
  },
  devtool: 'cheap-module-source-map', // cheap-variant of SourceMap with module mappings
  plugins: [
     new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename:'vendor.js'
      // filename:'vendor[hash].js // see https://webpack.js.org/guides/caching/
    })
  ]
}
