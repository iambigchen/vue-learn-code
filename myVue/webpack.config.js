const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  watch: true
}