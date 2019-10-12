const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const APP_DIR = path.join(__dirname, "/public/src/");
const BUILD_DIR = path.resolve(__dirname, "dist");

const VENDOR_LIBS = ["react", "react-dom"];
module.exports = {
  mode: "development",

  entry: {
    app: APP_DIR + "/app.js",
    vendor: VENDOR_LIBS
  },
  output: {
    filename: "[name].bundle[hash].js",
    path: BUILD_DIR,
    publicPath: ""
  },
  devServer: {
    contentBase: BUILD_DIR,
    index: "index.html",
    open: true,
    port: 9000
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|svg)$/i,
        use: ["file-loader"]
      },
      /*{
        test: /\.js$/,
        enforce: "pre",
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          // configFile: path.resolve(__dirname, '.eslintrc')
        }
      },*/
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              "@babel/plugin-proposal-object-rest-spread",
              "transform-class-properties"
            ]
          }
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "~",
      automaticNameMaxLength: 30,
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
