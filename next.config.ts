import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  // Serve images as static files. The optimizer creates a new edge
  // request for every size/format and is the main Vercel bill driver.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
