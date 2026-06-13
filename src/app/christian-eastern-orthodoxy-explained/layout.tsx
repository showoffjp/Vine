import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Eastern Orthodoxy Explained — A Guide",
  description: "Understanding Eastern Orthodox Christianity — the Great Schism of 1054, theosis (deification), icons and the incarnation, the Divine Liturgy, apophatic theology and the mystery of God, the seven ecumenical councils, and how Orthodoxy differs from Catholicism and Protestantism.",
  openGraph: { title: "Eastern Orthodoxy Explained — Vine", description: "Understanding Eastern Orthodoxy — theosis, icons, the Divine Liturgy, apophatic theology, and the Great Schism.", images: ["/api/og?title=Eastern+Orthodoxy+Explained"] },
  twitter: { card: "summary_large_image", title: "Eastern Orthodoxy Explained — Vine", description: "Understanding Eastern Orthodox Christianity.", images: ["/api/og?title=Eastern+Orthodoxy+Explained"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
