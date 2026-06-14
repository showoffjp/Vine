import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Luke 15 Guide — The Lost and Found",
  description: "A deep guide to Luke 15 — the three parables of the lost and found: the lost sheep, the lost coin, and the prodigal son. The Pharisees grumble that Jesus receives sinners, and he answers with the lavish, seeking, running grace of the Father, the joy of heaven over one sinner who repents, and the warning of the elder brother's self-righteousness.",
  openGraph: { title: "Luke 15 Guide — Vine", description: "A guide to Luke 15 — the lost sheep, the lost coin, the prodigal son, and the Father's running grace.", images: ["/api/og?title=Luke+15+Guide"] },
  twitter: { card: "summary_large_image", title: "Luke 15 Guide — Vine", description: "A deep guide to Luke 15 — the lost and found and the Father's lavish grace.", images: ["/api/og?title=Luke+15+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
