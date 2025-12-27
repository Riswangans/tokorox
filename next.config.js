/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // <-- Ini akan mengexport static HTML
  images: {
    unoptimized: true, // <-- Required for static export
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
