import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Gospel of Matthew Guide — Christian Study",
  description: "A deep guide to the Gospel of Matthew — Jesus the Messiah, Son of David and Son of Abraham, the King whose lineage and birth fulfill the Scriptures, the Sermon on the Mount, the kingdom of heaven parables, the Great Commission, and the passion and resurrection of Christ.",
  openGraph: { title: "Gospel of Matthew Guide — Vine", description: "A guide to Matthew — the lineage and birth of the King, the Sermon on the Mount, the parables of the kingdom of heaven, and the passion and resurrection.", images: ["/api/og?title=Gospel+of+Matthew+Guide"] },
  twitter: { card: "summary_large_image", title: "Gospel of Matthew Guide — Vine", description: "A deep guide to the Gospel of Matthew.", images: ["/api/og?title=Gospel+of+Matthew+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
