const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  module: {
    exports: UserConfig,
    publicPath: process.env.NODE_ENV === 'production'
      ? '/rick-and-morty/'
      : '/'
  }
})
