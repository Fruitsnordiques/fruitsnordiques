/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimisation des images
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Métadonnées par défaut
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
}

module.exports = nextConfig
