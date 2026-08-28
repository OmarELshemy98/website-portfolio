const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
};

export default nextConfig;
