import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.glitch.global",
        port: "",
      },
    ],
  },
};

export default nextConfig;
