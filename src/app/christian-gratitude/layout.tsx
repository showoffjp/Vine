import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Grateful Heart — Vine",
  description: "Give thanks in all circumstances. A theological and practical guide to gratitude — thanksgiving as worship, the ten lepers, gratitude journaling, and contentment through a grateful heart.",
  openGraph: {
    title: "A Grateful Heart — Vine",
    description: "Give thanks in all circumstances. A theological and practical guide to gratitude — thanksgiving as worship, the ten lepers, gratitude journaling, and contentment through a grateful heart.",
    images: ["/api/og?title=A+Grateful+Heart"],
  },
  twitter: {
    card: "summary_large_image",
    title: "A Grateful Heart — Vine",
    description: "Give thanks in all circumstances. A theological and practical guide to gratitude — thanksgiving as worship, the ten lepers, gratitude journaling, and contentment through a grateful heart.",
    images: ["/api/og?title=A+Grateful+Heart"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
