import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Используем SWC для минификации (по умолчанию в Next.js)
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/privacy",
        destination: "/polit-conf.pdf",
      },
      {
        source: "/consent",
        destination: "/sogl-na-obr-dan.pdf",
      },
      {
        source: "/agreement",
        destination: "/user-sogl.pdf",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/qwest.apk",
        headers: [
          {
            key: "Content-Type",
            value: "application/vnd.android.package-archive",
          },
          {
            key: "Content-Disposition",
            value: "attachment; filename=qwest.apk",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
