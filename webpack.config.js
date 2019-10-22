const HtmlWepackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          'eslint-loader',
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWepackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
};
