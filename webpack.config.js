const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");
const { resolve } = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

// const NODE_ENV = process.env.NODE_ENV || "development";
const isProd = false;

console.log("#### - " + __dirname);

const publicPath = resolve(__dirname, "./public");
const outputPath = resolve(__dirname, "./dist");

module.exports = {
  mode: "development",
  entry: resolve(__dirname, "./src/main.ts"),
  output: {
    filename: "js/[name].[contenthash].js",
    chunkFilename: "js/[name].[contenthash].js",
    path: outputPath,
    // clean: true,
  },

  resolve: {
    extensions: [".ts", ".js", ".vue", ".json"],
    alias: {
      vue: "@vue/runtime-dom",
    },
  },

  devServer: {
    port: 8080,
    historyApiFallback: true,

    static: {
      directory: resolve(__dirname, "dist"),
    },
  },

  stats: "errors-warnings",

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.(css|scss|sass)$/i,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "images",
        },
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
    new HtmlPlugin({
      template: resolve(__dirname, "./index.html"),
    }),
    new CopyPlugin({
      patterns: [{ from: publicPath, to: outputPath }],
    }),
    new VueLoaderPlugin(),
  ],
};
