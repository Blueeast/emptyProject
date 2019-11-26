module.exports = {
  // publicPath: 'http://rap2api.taobao.org/app/mock/237852/api',
  // 是否在保存的时候检查eslint
  lintOnSave: true,
  chainWebpack: config =>{
    config.resolve.symlinks(true)
  },
  css: {

  },
  devServer: {
    port: 9701
  }
}
