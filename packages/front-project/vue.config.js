const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: {
          "/api": "",
        },
        changeOrigin: true, // target是域名的话，需要这个参数，
      },
    },
  }
})
