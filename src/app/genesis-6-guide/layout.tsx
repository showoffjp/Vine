import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Genesis 6 Chapter Guide — Christian Study",
  description: "A deep guide to Genesis 6 — the corruption of the earth, the sons of God and daughters of men, the Nephilim, God's grief over human wickedness, Noah finding grace in the eyes of the Lord, and God's command to build the ark.",
  openGraph: { title: "Genesis 6 Chapter Guide — Vine", description: "A guide to Genesis 6 — the earth's corruption, God's grief, Noah's righteousness, the ark's design, and God's covenant of salvation.", images: ["/api/og?title=Genesis+6+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Genesis 6 Chapter Guide — Vine", description: "A deep guide to Genesis 6 — Noah, the flood, and the grace of God.", images: ["/api/og?title=Genesis+6+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
