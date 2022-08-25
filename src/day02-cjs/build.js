const webpack = require('webpack');
const path = require('path');

const compiler = webpack({
  entry: './index.js',
  mode: 'none',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
})

compiler.run((err, stat) => {
  console.log('err', err)
  console.log('stat', stat)
})