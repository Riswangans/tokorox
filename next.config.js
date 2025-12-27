/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Force disable SWC minifier, use Terser instead
  swcMinify: false,
  // Use Babel instead of SWC for compatibility
  experimental: {
    forceSwcTransforms: false,
  },
  // Disable SWC completely for Android
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Optimize for production
      config.optimization.minimizer = [];
    }
    return config;
  },
};

module.exports = nextConfig;
