import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of Psalms Guide — Christian Study",
  description: "A deep guide to the Psalms — Israel's prayer book and hymnal, the five books of Psalms, types of psalms (praise, lament, royal, wisdom, pilgrimage), how Jesus prayed the Psalms, how to pray the Psalms today including the difficult imprecatory psalms.",
  openGraph: { title: "Book of Psalms Guide — Vine", description: "A guide to Israel's prayer book — lament, praise, royal psalms, how Jesus prayed the Psalms, and how to pray them today.", images: ["/api/og?title=Book+of+Psalms+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Psalms Guide — Vine", description: "A deep guide to the Book of Psalms.", images: ["/api/og?title=Book+of+Psalms+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
