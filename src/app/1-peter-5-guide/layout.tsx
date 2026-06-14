import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "1 Peter 5 Guide — Cast Your Anxieties — Christian Study",
  description: "A deep guide to 1 Peter 5 — shepherding the flock of God, clothing yourselves with humility, casting all your anxieties on him because he cares for you, resisting the devil, and the God of all grace who restores and strengthens.",
  openGraph: { title: "1 Peter 5 Guide — Vine", description: "A guide to 1 Peter 5 — humility, casting anxiety on God, resisting the devil, and the God of all grace.", images: ["/api/og?title=1+Peter+5+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Peter 5 Guide — Vine", description: "A deep guide to 1 Peter 5, humility, anxiety, spiritual warfare, and God's grace.", images: ["/api/og?title=1+Peter+5+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
