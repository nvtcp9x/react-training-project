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
  entry: ['babel-polyfill', './src/index.js'],
  // babel-polyfill https://github.com/babel/babel-loader/issues/484#issuecomment-311581175
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
