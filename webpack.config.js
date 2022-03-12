// 文件最上方引入
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  module:{
    rules:[
      {
        test: /\.ts$/,
        use:"ts-loader"
      }
    ]
  },
  resolve: {
    extensions: ['.ts']
  },
  // 配置内容增加,配置Webpack插件
  plugins: [
    new HTMLWebpackPlugin(),
  ]

}