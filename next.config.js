/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        destination: '/flying',
        permanent: true,
        source: '/',
      },
    ]
  },
}

module.exports = nextConfig
