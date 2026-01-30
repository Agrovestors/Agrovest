/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
    // Configure allowed image qualities for Next.js 16+ compatibility
    qualities: [50, 75, 80, 90, 100],
  },
};

export default nextConfig;
