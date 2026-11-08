/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'bazar-dor-web-application.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'bazar-dor-web-application-5uzt.vercel.app',
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
