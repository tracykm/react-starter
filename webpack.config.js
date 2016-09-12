module.exports = {
  entry: "./src/entry.js",
  output: {
    filename: "build/bundle.js"
  },
  "scripts": {
      "test": "mocha --compilers js:babel-register"
    },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
