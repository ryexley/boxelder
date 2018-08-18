const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const moduleConfig = require("./webpack-module-config");

const mode = process.env.NODE_ENV || "production";

module.exports = {
  mode,
  entry: ["./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  plugins: [
    new CleanWebpackPlugin(["dist", "report"]),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: "../report/bundle-analysis/index.html",
      openAnalyzer: false
    })
  ],
  module: moduleConfig,
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react",
      umd: "react"
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom",
      umd: "react-dom"
    },
    emotion: {
      root: "emotion",
      commonjs2: "emotion",
      commonjs: "emotion",
      amd: "emotion",
      umd: "emotion"
    }
  }
};
