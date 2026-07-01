import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // emit static HTML/CSS/JS into ./out
  images: {
    unoptimized: true, // required for static export (no image server)
  },
};

export default nextConfig;
