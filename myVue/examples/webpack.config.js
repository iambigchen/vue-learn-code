const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  entry: {
    app: './main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: 'vue-loader'
    }]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  watch: true
}