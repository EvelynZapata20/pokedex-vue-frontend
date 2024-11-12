const { defineConfig } = require("@vue/cli-service");
require('dotenv').config();

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8081,
  },
  configureWebpack: {
    plugins: [
      new (require('webpack')).DefinePlugin({
        'process.env': {
          API_URL: JSON.stringify(process.env.VUE_APP_EXPRESS_BACKEND_URL),
        }
      })
    ]
  }
});
