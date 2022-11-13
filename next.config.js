/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '**',
        pathname: '/vi/**',
      },
      {
        protocol: 'https',
        hostname: 'api.mineatar.io',
        port: '**',
        pathname: '/body/full/**',
      },
    ],
  },
}

module.exports = nextConfig
