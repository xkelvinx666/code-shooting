const withPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production';

module.exports = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true
})({
  reactStrictMode: true,
  assetPrefix: isProd ? process.env.STATIC_URL : '/',
  i18n: {
    locales: ['en-US', 'zh-CN'],
    defaultLocale: 'en-US',
  },
});
