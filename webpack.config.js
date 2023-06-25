const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");
const { resolve } = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

const publicPath = resolve(__dirname, "./public");
const outputPath = resolve(__dirname, "./dist");

module.exports = (env, argv) => {
  const isDevelopmentPhase = argv.mode === "development";

  return {
    mode: isDevelopmentPhase ? "development" : "production",
    devtool: isDevelopmentPhase ? "source-map" : false,
    entry: resolve(__dirname, "./src/main.ts"),
    output: {
      filename: "js/[name].[contenthash].js",
      chunkFilename: "js/[name].[contenthash].js",
      path: outputPath,
    },

    resolve: {
      extensions: [".ts", ".js", ".vue", ".json"],
      alias: {
        "~": path.resolve(__dirname, "src"),
        assets: path.resolve(__dirname, "src/assets"),
      },
    },

    devServer: {
      port: 8080,
      hot: true,
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
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: "file-loader",
        },
      ],
    },

    plugins: [
      new HtmlPlugin({
        template: resolve(__dirname, "./index.html"),
      }),
      new CopyPlugin({
        patterns: [{ from: publicPath, to: outputPath }],
      }),
      new VueLoaderPlugin(),
    ],
  };
};
