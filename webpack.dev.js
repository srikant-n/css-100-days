const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/",
  output: { filename: "[name].js", path: path.resolve(__dirname, "dist") },
  devtool: "inline-source-map",
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/ },
      {
        test: /\.scss$/i,
        use: ["style-loader", { loader: "css-loader", options: { sourceMap: true } }, "sass-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
