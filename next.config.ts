import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "asraufmustamin.vercel.app",
          },
        ],
        destination: "https://asraufmustamin.site/:path*",
        permanent: true, // 301 Permanent Redirect for SEO transfer
      },
    ];
  },
};

export default nextConfig;
