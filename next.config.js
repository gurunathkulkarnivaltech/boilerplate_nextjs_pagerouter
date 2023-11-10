/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n: {

    locales: ['en-US', 'fr', 'de'],
    localeDetection: false, // it will not detect locale from browser

    domains: [
      {
        domain: 'www.example.com',
        defaultLocale: 'en-US',
        http: true,
        locales: ['en-US'],
      },
      {
        domain: 'www.example.de',
        defaultLocale: 'de',
        http: true,
        locales: ['de'],
      },
      {
        domain: 'www.example.fr',
        defaultLocale: 'fr',
        http: true,
        locales: ['fr'],
      },
    ],
    defaultLocale: 'en-US',
  },
};

module.exports = nextConfig;
