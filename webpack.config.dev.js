var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  devtool: "source-map",
  output: {
    path: path.join(__dirname, "dist"),
    filename: path.join("static", "js", "[name].js"),
    publicPath: '/react-bulma-ts/'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css", ".json"],
  },
  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: /./, to: '/react-bulma-ts/404.html' }
      ]
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.json$/,
        loader: "json-loader",
        type: "javascript/auto",
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: path.join("static", "image", "[name].[ext]"),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: path.join("static", "css", "[name].css"),
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      hash: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {from: './src/404.html'}
      ]
    })
  ],
};
