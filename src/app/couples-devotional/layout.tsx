import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Couples Devotional",
  description: "Daily devotionals designed for two. Individual reflections, shared discussion, and prayer prompts that draw you closer to God and to each other.",
  openGraph: {
    title: "Couples Devotional — Vine",
    description: "Daily devotionals designed for two. Individual reflections, shared discussion, and prayer prompts that draw you closer to God and to each other.",
    images: ["/api/og?title=Couples+Devotional"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Couples Devotional — Vine",
    description: "Daily devotionals designed for two. Individual reflections, shared discussion, and prayer prompts that draw you closer to God and to each other.",
    images: ["/api/og?title=Couples+Devotional"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
