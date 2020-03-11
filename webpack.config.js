const path = require('path');

module.exports = {
  mode: 'development',
  entry: './front-end-src/index.js',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'main.bundle.js'
  }
}