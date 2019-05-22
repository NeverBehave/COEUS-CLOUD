module.exports = {
  css: {
    loaderOptions: {
    }
  },
  devServer: {
    proxy: {
      '/api/*': {
        target: 'http://localhost:8010/',
        secure: false
      }
    }
  }
}
