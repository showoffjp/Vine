import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Zechariah 4 Guide — Not by Might Nor by Power — Christian Study",
  description: "A deep guide to Zechariah 4 — the vision of the golden lampstand, the word to Zerubbabel that God works not by human might or power but by his Spirit, the promise that mountains become plains before his anointing, the capstone brought forth with shouts of grace, and the meaning of the two olive trees that stand by the Lord of all the earth.",
  openGraph: { title: "Zechariah 4 Guide — Not by Might Nor by Power — Vine", description: "Explore Zechariah 4: the golden lampstand vision, the Spirit of God leveling mountains, and God's word to Zerubbabel about completing the Temple through divine grace rather than human strength.", images: ["/api/og?title=Zechariah+4+Guide"] },
  twitter: { card: "summary_large_image", title: "Zechariah 4 Guide — Not by Might Nor by Power — Vine", description: "A guide to Zechariah 4: the lampstand vision and God working by his Spirit, not human might.", images: ["/api/og?title=Zechariah+4+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
