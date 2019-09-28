const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./public/src/app.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: ""
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
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
        test: /\.(png|jpg)$/i,
        use: ["file-loader"]
      },
      {
        test: /\.js$/,
        enforce: "pre",
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          // configFile: path.resolve(__dirname, '.eslintrc')
        }
      },
      {
        test: /\.js$/,
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
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "Priya Peggy Romal",
      description: "some description"
    })
  ]
};
