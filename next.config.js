const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? process.env.STATIC_URL : '',
  i18n: {
    locales: ['en-US', 'zh-CN'],
    defaultLocale: 'en-US',
  }
};
