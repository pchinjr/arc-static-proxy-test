let arc = require('@architect/functions')

exports.handler = arc.http.proxy({
  plugins: {
    html: ['@architect/proxy-plugin-html-urls'],
    css: ['@architect/proxy-plugin-css-urls']
  },
  alias: {
    '/about':'/about.html'
  }
})