/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.kohler.com.vn',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 's7d4.scene7.com',
        port: ''
      },
      {
        protocol: 'http',
        hostname: 'localhost:8000',
        port: ''
      },
    ],
  },
};

module.exports = nextConfig;
