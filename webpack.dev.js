const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const webpackConfig = {
  entry: ["./src/index.js"],

  output: {
    path: path.join(__dirname, "./dist/"),
    filename: "bundle.js",
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "./public"),
    port: 8084,
    historyApiFallback: true,
  },
  node: {
    fs: "empty",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "public/index.html",
      // @section: injected variables:
      // config:
      // 	process.env.NODE_ENV === "development"
      // 		? JSON.stringify(CONFIG_BUILD)
      // 		: JSON.stringify({ APP_ID }),
      version: `${new Date().toISOString()}}`,
      title: "O",
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"development"',
      },
    }),
  ],
  module: {
    rules: [
      {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[hash].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: "file?name=public/[name].[ext]",
      },
    ],
  },
};

module.exports = webpackConfig;
