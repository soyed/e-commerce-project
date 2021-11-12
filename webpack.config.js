const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

const mode =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  entry: {
    index: path.resolve(__dirname, '/src/index.tsx'),
  },
  mode: mode,
  resolve: { extensions: ['.tsx', '.ts', '.js', '.jsx'] },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(ico|png|jpe?g|gif|svg)/i,
        type: 'asset',
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 30 * 1024, // 3Kb max size for line
        //   },
        // },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 2, sourceMap: true },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
    new Dotenv({ path: './.env' }),
  ].concat(
    mode === 'development'
      ? []
      : [
          new MiniCssExtractPlugin({
            filename: '[name].bundle.css',
            chunkFilename: '[id].css',
          }),
        ]
  ),
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
