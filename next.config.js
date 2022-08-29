const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const isProd = process.env.NODE_ENV === 'production';

module.exports = withPWA({
  disable: !isProd,
  register: true,
  skipWaiting: true,
  runtimeCaching,
  sw: '/sw.js',
})({
  reactStrictMode: true,
  assetPrefix: isProd ? process.env.STATIC_URL : '/',
  i18n: {
    locales: ['en-US', 'zh-CN'],
    defaultLocale: 'en-US',
  },
});
