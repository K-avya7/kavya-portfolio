import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/kavya-portfolio",
  assetPrefix: "/kavya-portfolio/",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;