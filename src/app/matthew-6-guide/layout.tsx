import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Matthew 6 Guide — Christian Study",
  description: "A deep guide to Matthew 6 — the heart of the Sermon on the Mount: giving and praying in secret before the Father who sees, the Lord's Prayer, treasures in heaven, you cannot serve God and money, the cure for anxiety, and seeking first the kingdom of God.",
  openGraph: { title: "Matthew 6 Guide — Vine", description: "A guide to Matthew 6 — the Lord's Prayer, treasures in heaven, do not be anxious, and seek first the kingdom of God.", images: ["/api/og?title=Matthew+6+Guide"] },
  twitter: { card: "summary_large_image", title: "Matthew 6 Guide — Vine", description: "A deep guide to Matthew 6, the heart of the Sermon on the Mount.", images: ["/api/og?title=Matthew+6+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
