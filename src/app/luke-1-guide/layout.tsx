import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Luke 1 Guide — The Annunciation, the Magnificat, and the Birth of John",
  description: "A deep guide to Luke 1 — Gabriel's announcement to Zechariah and Mary, the Magnificat, Elizabeth's blessing, the Benedictus, and the birth of John the Baptist who goes before the Lord in the spirit and power of Elijah.",
  openGraph: { title: "Luke 1 Guide — The Vine", description: "A guide to Luke 1 — Gabriel's visits, Mary and Elizabeth, the Magnificat, the Benedictus, and the birth of John the forerunner.", images: ["/api/og?title=Luke+1+Guide"] },
  twitter: { card: "summary_large_image", title: "Luke 1 Guide — The Vine", description: "A deep guide to Luke 1 — the birth announcements and the great canticles.", images: ["/api/og?title=Luke+1+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
