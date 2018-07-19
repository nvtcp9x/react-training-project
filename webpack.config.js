const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(scss|css)$/,

        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      title: 'My Title',
      template: './src/index.html',
    }),
    new StyleLintPlugin(),
  ],
  entry: './src/index.js',
  output: {
    filename: 'main.js',
  },
  devServer: {
    historyApiFallback: true,
    // https://webpack.js.org/configuration/dev-server/#devserver-historyapifallback
  },
  resolve: {
    modules: ['src', 'node_modules'],
  },
  mode: 'development',
};
