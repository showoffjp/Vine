import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "1 Kings 7 Guide — Solomon's Palace and the Temple Furnishings",
  description: "A deep guide to 1 Kings 7 — Solomon builds his palace complex over thirteen years, and Hiram of Tyre crafts the Temple's bronze furnishings: the pillars Jachin and Boaz, the molten Sea on twelve oxen, the ten wheeled stands, the vessels of bronze and gold, and the dedicated treasures of David.",
  openGraph: { title: "1 Kings 7 Guide — Vine", description: "A guide to 1 Kings 7 — Solomon's palace, Hiram of Tyre, the pillars Jachin and Boaz, the molten Sea, and the Temple furnishings.", images: ["/api/og?title=1+Kings+7+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Kings 7 Guide — Vine", description: "A deep guide to 1 Kings 7, Solomon's palace, and the bronze furnishings of the Temple.", images: ["/api/og?title=1+Kings+7+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
