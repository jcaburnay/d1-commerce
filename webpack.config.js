const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isDevelopment ? 'js/bundle.js' : 'js/bundle.[contenthash].js',
    clean: true,
  },
  devServer: {
    static: './dist',
    hot: true,
    port: 3000,
    open: true,
  },
  devtool: isDevelopment ? 'source-map' : false,
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Use style-loader in development for HMR, MiniCssExtractPlugin in production
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2, // Process @imports with postcss-loader and sass-loader
              sourceMap: isDevelopment,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: isDevelopment,
              postcssOptions: {
                plugins: [
                  require('autoprefixer'),
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
              sassOptions: {
                outputStyle: isDevelopment ? 'expanded' : 'compressed',
                quietDeps: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      minify: !isDevelopment,
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? 'css/styles.css' : 'css/styles.[contenthash].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/assets/images',
          to: 'images',
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
  optimization: {
    minimizer: [
      `...`, // Extend existing minimizers (terser-webpack-plugin)
      new CssMinimizerPlugin(),
    ],
  },
};
