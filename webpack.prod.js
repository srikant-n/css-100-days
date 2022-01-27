const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/",
  output: { filename: "[name].js", path: path.resolve(__dirname, "dist") },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/ },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new MiniCssExtractPlugin({ filename: "[name].css" }),
  ],
};
