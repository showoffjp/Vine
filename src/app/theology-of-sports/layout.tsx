import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Theology of Sports and Play",
  description: "Play is not frivolous — it is one of God's gifts for human flourishing. And sport, at its best, cultivates virtue, community, and the glory of embodied human life. Here is how to think Christianly…",
  openGraph: {
    title: "A Theology of Sports and Play — Vine",
    description: "Play is not frivolous — it is one of God's gifts for human flourishing. And sport, at its best, cultivates virtue, community, and the glory of embodied human life. Here is how to think Christianly…",
    images: ["/api/og?title=A+Theology+of+Sports+and+Play"],
  },
  twitter: {
    card: "summary_large_image",
    title: "A Theology of Sports and Play — Vine",
    description: "Play is not frivolous — it is one of God's gifts for human flourishing. And sport, at its best, cultivates virtue, community, and the glory of embodied human life. Here is how to think Christianly…",
    images: ["/api/og?title=A+Theology+of+Sports+and+Play"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
