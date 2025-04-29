// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'development', // or 'production'
  entry: './src/js/main.js', // メインJSファイルのパス
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/, // JSをBabelで変換（必要な場合）
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
      },
      {
        test: /\.css$/, // Swiper CSSなどを読み込むため
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
