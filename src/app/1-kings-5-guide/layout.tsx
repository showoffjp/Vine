import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "1 Kings 5 Chapter Guide – Solomon Prepares to Build the Temple | The Vine",
  description: "A deep guide to 1 Kings 5 — Solomon's alliance with Hiram of Tyre, the procurement of cedar and cypress timber from Lebanon, and the organization of the massive labor force of 180,000 men for the building of the Temple in Jerusalem.",
  openGraph: { title: "1 Kings 5 Chapter Guide – Solomon Prepares to Build the Temple | The Vine", description: "Solomon and Hiram of Tyre, Lebanon's timber, and the great labor draft — a study of 1 Kings 5 and the preparation for the house of God.", images: ["/api/og?title=1+Kings+5+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Kings 5 Chapter Guide | The Vine", description: "Solomon's treaty with Hiram of Tyre and the preparation to build the Temple — a guide to 1 Kings 5.", images: ["/api/og?title=1+Kings+5+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
