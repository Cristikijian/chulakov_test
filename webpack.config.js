const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const env = process.env.NODE_ENV || 'development';

module.exports = {
  entry: {
    main: './src/index.js',
  },
  mode: env,
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),

  },
  devServer: {
    watchFiles: path.resolve(__dirname, 'src'),
    static: {
      directory: path.resolve(__dirname, 'public'),
      watch: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
        use: [
          env !== 'production'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new HtmlWebpackInlineSVGPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    env === 'production'
      ? new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'public'),
            to: path.resolve(__dirname, 'dist'),
          },
        ],
      })
      : undefined,
  ],
};
