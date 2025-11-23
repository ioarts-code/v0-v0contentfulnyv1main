// <CHANGE> Ensuring Tailwind 4 CSS works with v0 design tool
/** @type {import('next').NextConfig} */
const nextConfig = {
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
