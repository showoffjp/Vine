import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of Isaiah Guide — Christian Study",
  description: "A deep guide to the Book of Isaiah — the holiness of God and Isaiah's call, judgment and the promise of Immanuel, the Prince of Peace, the suffering servant of Isaiah 53, comfort for the exiles, and the new heavens and new earth. The fifth gospel.",
  openGraph: { title: "Book of Isaiah Guide — Vine", description: "A guide to Isaiah - Isaiah's call, Immanuel, the Prince of Peace, the suffering servant, and the new creation.", images: ["/api/og?title=Isaiah+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Isaiah Guide — Vine", description: "A deep guide to the Book of Isaiah.", images: ["/api/og?title=Isaiah+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
