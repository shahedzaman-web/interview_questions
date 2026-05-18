import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.freecodecamp.org',
        port: '',
        pathname: '/news/content/images/**',
      },
      {
        protocol: 'https',
        hostname: 'felixgerschau.com',
        port: '',
        pathname: '/static/**',
      },
      {
        protocol: 'https',
        hostname: 's3.ap-south-1.amazonaws.com',
        port: '',
        pathname: '/myinterviewtrainer-domestic/public_assets/assets/**',
      },
      {
        protocol: 'https',
        hostname: 'd3n0h9tb65y8q.cloudfront.net',
        port: '',
        pathname: '/public_assets/assets/**',
      },
    ],
  },
};

export default nextConfig;
