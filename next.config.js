/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '/quafback-nextjs',
  basePath: '/quafback-nextjs',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
