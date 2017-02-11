import { join, resolve } from 'path'

export default {
  entry: {
    main: './src/index.js',
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
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [
          resolve(__dirname, 'src')
        ],
        exclude: '/node_modules/',
      }
    ]
  },
  resolve: {
   // options for resolving module requests
   // (does not apply to resolving to loaders)

     extensions: ['.js', '.json', '.jsx', '.css', '.yml']
     // extensions that are used
  },
  devtool: 'cheap-module-source-map', // cheap-variant of SourceMap with module mappings,
}
