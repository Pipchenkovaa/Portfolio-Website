const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader', 
          'postcss-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'styles/[name].css' }),
		new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
  ],
  mode: 'development',
	devServer: {
		static: path.resolve(__dirname),
		compress: true,
		port: 3000,
  },
};
