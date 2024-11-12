const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");
require("dotenv").config();

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8081,
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.VUE_APP_EXPRESS_BACKEND_URL': JSON.stringify(process.env.VUE_APP_EXPRESS_BACKEND_URL || 'http://default-url')
      })
    ]
  }
});
