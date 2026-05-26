import type { VercelConfig } from "@vercel/config/v1";

export const config: VercelConfig = {
  buildCommand: "npm run build",
  framework: "nextjs",
  headers: [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "X-XSS-Protection", value: "1; mode=block" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        {
          key: "Permissions-Policy",
          value: "camera=(), microphone=(), geolocation=(self)",
        },
      ],
    },
    {
      source: "/static/(.*)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
  ],
  redirects: [
    { source: "/home", destination: "/", permanent: true },
    { source: "/pray", destination: "/prayer", permanent: true },
    { source: "/read", destination: "/bible", permanent: true },
    { source: "/devotional", destination: "/daily", permanent: true },
    { source: "/hubs", destination: "/community", permanent: true },
    { source: "/gifts", destination: "/quiz", permanent: true },
  ],
  crons: [
    { path: "/api/cron/daily-verse", schedule: "0 6 * * *" },
    { path: "/api/cron/weekly-challenge", schedule: "0 8 * * 1" },
  ],
};
