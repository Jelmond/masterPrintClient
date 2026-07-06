/** @type {import('next').NextConfig} */
function strapiImageRemotePatternFromEnv() {
  const raw = process.env.NEXT_PUBLIC_STRAPI_URL;
  if (!raw) return null;
  try {
    const u = new URL(raw);
    const protocol = u.protocol === "http:" ? "http" : "https";
    return { protocol, hostname: u.hostname, pathname: "/**" };
  } catch {
    return null;
  }
}

const strapiFromEnv = strapiImageRemotePatternFromEnv();

const nextConfig = {
  compiler: {
    styledComponents: {
      displayName: false,
      pure: true,
      minify: true,
      transpileTemplateLiterals: true,
    },
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      { protocol: 'https', hostname: 'mppshop.by', pathname: '/**' },
      { protocol: 'https', hostname: 'api.mppshop.by', pathname: '/**' },
      { protocol: 'http', hostname: '127.0.0.1', pathname: '/**' },
      { protocol: 'http', hostname: 'localhost', pathname: '/**' },
      ...(strapiFromEnv &&
      !['mppshop.by', 'api.mppshop.by', '127.0.0.1', 'localhost'].includes(
        strapiFromEnv.hostname
      )
        ? [strapiFromEnv]
        : []),
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/strapi/:path*',
        destination: 'https://api.mppshop.by/api/:path*',
      },
    ];
  },
  async redirects() {
    return [
      { source: '/catalog/26', destination: '/catalog/present-box', permanent: true },
      { source: '/catalog/30', destination: '/catalog/paper', permanent: true },
      { source: '/catalog/21', destination: '/catalog/stickers-birks', permanent: true },
      { source: '/catalog/27', destination: '/catalog/kartochki-otkritki', permanent: true },
      { source: '/catalog/28', destination: '/catalog/envelops', permanent: true },
    ];
  },
};

export default nextConfig;
