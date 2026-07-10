import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Type-checking is run as a separate gate (npx tsc --noEmit) before every
  // commit. Skipping it inside `next build` removes a full type-check pass over
  // ~1,900 routes from the Vercel build, a major contributor to build time.
  // (Next 16 decoupled ESLint from `next build`, so no eslint config is needed.)
  typescript: {
    ignoreBuildErrors: true,
  },
  // Source maps were ~340 MB of build output across 11,000+ .map files and are
  // useless at runtime -- generating them was burning build memory and time on
  // Vercel's small build machine. Disable all source-map generation.
  productionBrowserSourceMaps: false,
  // Tree-shake the icon barrel import (120 files import from lucide-react)
  // so only the icons actually used get compiled, not the whole library.
  experimental: {
    optimizePackageImports: ["lucide-react"],
    serverSourceMaps: false,
    turbopackSourceMaps: false,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "*.googleusercontent.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
