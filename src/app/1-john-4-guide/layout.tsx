import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "1 John 4 Guide — God Is Love — Christian Study",
  description: "A deep guide to 1 John 4 — testing the spirits with the christological confession, the declaration that God is love, the historical grounding of love in the sending of the Son as propitiation for sin, perfect love casting out fear, and the command to love one another as the indispensable mark of abiding in God.",
  openGraph: { title: "1 John 4 Guide — Vine", description: "A guide to 1 John 4 — God is love, testing the spirits, perfect love casts out fear, and abiding in love.", images: ["/api/og?title=1+John+4+Guide"] },
  twitter: { card: "summary_large_image", title: "1 John 4 Guide — Vine", description: "A deep guide to 1 John 4 and the nature of God's love.", images: ["/api/og?title=1+John+4+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
