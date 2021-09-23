module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? process.env.BASE_URL
    : '/',

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
