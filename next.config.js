/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/sankalpa',
  images: {
    unoptimized: true,
    domains: [],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig