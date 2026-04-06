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
  images: {
    domains: ['mppshop.by', 'api.mppshop.by', '127.0.0.1', 'mppshop.by.'],
    /* Домен из NEXT_PUBLIC_STRAPI_URL — next/image разрешает картинки с этого хоста */
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
};

export default nextConfig;
