const path = require("path");

// __dirname ：当前js文件所在目录

module.exports = {
  // mode: "development",
  entry: "./src/main.ts",
  output: {
    // path: path.resolve(__dirname, "dist"),
    path: path.resolve(__dirname, "../dist"),
    filename: "index.js",
    libraryTarget: "umd", // 使用umd 的规则
    library: "Some21" // 附加到windows 下
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/transform-runtime"]
            // plugins: [require("@babel/plugin-transform-object-rest-spread")]
          }
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".jsx", ".js"]
  }
};
