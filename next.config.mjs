/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['mppshop.by', 'api.mppshop.by', '127.0.0.1'],
  },
  async rewrites() {
    return [
      {
        source: '/api/strapi/:path*',
        destination: 'https://api.mppshop.by/api/:path*',
      },
    ];
  },
};

export default nextConfig;
