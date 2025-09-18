import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

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
          },
          {
              protocol: "https",
              hostname: "flagcdn.com",
          }
      ]
  }
};

const withNextIntl = createNextIntlPlugin("./i18n/requests.ts");

export default withNextIntl(nextConfig);
