const { createProxyMiddleware } = require('http-proxy-middleware');
const CONTENT_URL= process.env.REACT_APP_CONTENT_URL || process.env.CONTENT_URL
const IDENTITY_URL = process.env.REACT_APP_IDENTITY_URL || process.env.IDENTITY_URL
const MEDIA_URL = process.env.REACT_APP_MEDIA_URL || process.env.MEDIA_URL

module.exports = function(app) {
  app.use(
    '/content/',
    createProxyMiddleware({
        target: CONTENT_URL,
        changeOrigin: true,
        pathRewrite: {
            '^/content': '/'
        }
    })
  );
  app.use('/media/', proxy({
    target: MEDIA_URL,
    changeOrigin: true,
    pathRewrite: {
        '^/media': '/'
    }
}))
  app.use('/identity/', createProxyMiddleware({
    target: IDENTITY_URL,
    changeOrigin: true,
    pathRewrite: {
        '^/identity': '/'
    }
}))
};