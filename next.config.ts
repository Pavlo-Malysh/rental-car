import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ['ac.goit.global'],
    remotePatterns: [
      { protocol: 'https', hostname: 'ac.goit.global' },

    ]
  }
};

export default nextConfig;
