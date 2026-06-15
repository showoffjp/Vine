import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "1 Kings 8 Chapter Guide — Christian Study",
  description: "A deep guide to 1 Kings 8 — Solomon dedicates the Temple, the ark of the covenant is brought in, the glory of the Lord fills the house, and Solomon prays the longest prayer in the Old Testament asking God to hear from heaven and forgive.",
  openGraph: { title: "1 Kings 8 Chapter Guide — Vine", description: "A guide to 1 Kings 8 — the Temple dedication, the glory cloud, the ark of the covenant, and Solomon's great prayer of dedication.", images: ["/api/og?title=1+Kings+8+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Kings 8 Chapter Guide — Vine", description: "A deep guide to 1 Kings 8 — Solomon dedicates the Temple and the glory of the Lord fills the house.", images: ["/api/og?title=1+Kings+8+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
