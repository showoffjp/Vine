import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Isaiah 61 Guide — Christian Study",
  description: "A deep guide to Isaiah 61 — the Servant of the LORD anointed to bring good news to the poor, bind up the brokenhearted, proclaim liberty to captives, and declare the year of the LORD's favor. Jesus reads this in the Nazareth synagogue and says today it is fulfilled.",
  openGraph: { title: "Isaiah 61 Guide — Vine", description: "A guide to Isaiah 61 — the Spirit-anointed Servant, good news for the poor, the year of the Lord's favor, and oaks of righteousness.", images: ["/api/og?title=Isaiah+61+Guide"] },
  twitter: { card: "summary_large_image", title: "Isaiah 61 Guide — Vine", description: "A deep guide to Isaiah 61.", images: ["/api/og?title=Isaiah+61+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
