/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Enable CSS-based Tailwind 4 configuration
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

export default nextConfig
