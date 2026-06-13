import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Christian Midlife Faith Guide",
  description: "Faith in the middle years — the theology of midlife crisis, disillusionment with church and religion, the dark night of the soul in midlife, rediscovering vocation and purpose, confronting mortality for the first time, and what it means to deepen rather than abandon faith at midlife.",
  openGraph: { title: "Christian Midlife Faith Guide — Vine", description: "Faith in the middle years — midlife crisis, disillusionment, vocation, mortality, and deepening faith.", images: ["/api/og?title=Christian+Midlife+Faith+Guide"] },
  twitter: { card: "summary_large_image", title: "Christian Midlife Faith Guide — Vine", description: "Faith in the middle years — theology and renewal.", images: ["/api/og?title=Christian+Midlife+Faith+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
