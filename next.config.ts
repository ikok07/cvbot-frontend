import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: "https",
              hostname: "python.langchain.com",
          },
          {
              protocol: "https",
              hostname: "cdn.prod.website-files.com",
          },
          {
              protocol: "https",
              hostname: "cdn.brandfetch.io",
          },
          {
              protocol: "https",
              hostname: "academy.imnextgen.bg",
          }
      ]
  }
};

export default nextConfig;
