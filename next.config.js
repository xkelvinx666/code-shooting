const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const isProd = process.env.NODE_ENV === 'production';

module.exports = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching
})({
  reactStrictMode: true,
  assetPrefix: isProd ? process.env.STATIC_URL : '/',
  i18n: {
    locales: ['en-US', 'zh-CN'],
    defaultLocale: 'en-US',
  },
});
