/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@craft/types', '@craft/stellar', '@craft/ui'],
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
