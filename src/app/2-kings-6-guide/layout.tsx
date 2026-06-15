import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "2 Kings 6 Chapter Guide — Christian Study",
  description: "A deep guide to 2 Kings 6 — the floating axe head miracle, Elisha revealing the king of Aram's secret plans, the Aramean army surrounding Dothan, Elisha's prayer to open his servant's eyes, the mountain full of horses and chariots of fire, and victory through bread instead of the sword.",
  openGraph: { title: "2 Kings 6 Chapter Guide — Vine", description: "A guide to 2 Kings 6 — the floating axe head, the army of angels at Dothan, and those who are with us are more.", images: ["/api/og?title=2+Kings+6+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "2 Kings 6 Chapter Guide — Vine", description: "A deep guide to 2 Kings 6 — chariots of fire and the invisible army of God.", images: ["/api/og?title=2+Kings+6+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
