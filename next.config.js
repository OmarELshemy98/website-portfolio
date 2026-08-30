const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  swcMinify: true,
  productionBrowserSourceMaps: false,
  images: {
    unoptimized: true,
    deviceSizes: [320, 420, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
};

export default nextConfig;
