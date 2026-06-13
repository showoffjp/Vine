import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of Luke Guide - Christian Study",
  description: "A deep guide to the Gospel of Luke - the gospel for the outsider, the birth narratives, Jesus and the poor and marginalized, the great parables of grace, the journey to Jerusalem, and the resurrection and road to Emmaus. The gospel of God's mercy.",
  openGraph: { title: "Book of Luke Guide - Vine", description: "A guide to Luke - the gospel for the outsider, the birth of Jesus, the parables of grace, and God's mercy for all.", images: ["/api/og?title=Luke+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Luke Guide - Vine", description: "A deep guide to the Gospel of Luke.", images: ["/api/og?title=Luke+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
