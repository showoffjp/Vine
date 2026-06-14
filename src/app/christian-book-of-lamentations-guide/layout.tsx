import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of Lamentations Guide — Christian Study",
  description: "A deep guide to the Book of Lamentations — Jeremiah's grief over the fall of Jerusalem, the desolation of Zion, the stunning hope at the book's center that the Lord's mercies are new every morning, the honest confession of suffering under God's righteous judgment, and the closing prayer for restoration.",
  openGraph: { title: "Book of Lamentations Guide — Vine", description: "A guide to Lamentations — the weeping prophet, the desolation of Zion, great is your faithfulness, and the prayer for restoration.", images: ["/api/og?title=Book+of+Lamentations+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Lamentations Guide — Vine", description: "A deep guide to the Book of Lamentations.", images: ["/api/og?title=Book+of+Lamentations+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
