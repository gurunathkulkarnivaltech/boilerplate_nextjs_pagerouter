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
    ],
  },
};

module.exports = nextConfig;
