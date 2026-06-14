import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of 1 Kings Guide — Christian Study",
  description: "A deep guide to the Book of 1 Kings — the wisdom of Solomon, the building of the Temple in Jerusalem, the tragic division of the kingdom under Rehoboam and Jeroboam, the slide into idolatry, and Elijah's confrontation with the prophets of Baal at Mount Carmel.",
  openGraph: { title: "Book of 1 Kings Guide — Vine", description: "A guide to 1 Kings — Solomon's wisdom, the Temple, the divided kingdom, idolatry, and Elijah at Mount Carmel.", images: ["/api/og?title=Book+of+1+Kings+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of 1 Kings Guide — Vine", description: "A deep guide to the Book of 1 Kings.", images: ["/api/og?title=Book+of+1+Kings+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
