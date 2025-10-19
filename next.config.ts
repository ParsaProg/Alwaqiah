import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePth: "/app",
  assetPerfix: "/app",
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
