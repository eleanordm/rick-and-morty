const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  outputDir: "docs",
  publicPath: process.env.NODE_ENV === "production" ? "/rick-and-morty/about" : "/",
})
