import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "John 5 Chapter Guide – Bethesda Healing, Son of God | The Vine",
  description: "A deep guide to John 5 — the healing of the 38-year paralytic at the Pool of Bethesda, the Sabbath controversy, Jesus' discourse on the Son's authority equal to the Father, and the fourfold testimony to Jesus from John the Baptist, the works, the Father, and the Scriptures.",
  openGraph: { title: "John 5 Chapter Guide – Bethesda Healing, Son of God | The Vine", description: "Explore John 5: the pool of Bethesda, the Son and the Father discourse, eternal life, and the fourfold witness to Jesus.", images: ["/api/og?title=John+5+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "John 5 Chapter Guide | The Vine", description: "A guide to John 5 — Bethesda, the Son of God, and four witnesses.", images: ["/api/og?title=John+5+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
