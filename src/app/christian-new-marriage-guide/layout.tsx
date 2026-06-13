import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Christian New Marriage Guide",
  description: "Building a marriage on Christ — the theology of Christian marriage (Ephesians 5), leaving and cleaving, navigating conflict as newlyweds, building spiritual intimacy, sex and the Christian covenant, money and marriage, and what the first years actually require.",
  openGraph: { title: "Christian New Marriage Guide — Vine", description: "Building a marriage on Christ — theology, conflict, spiritual intimacy, sex, money, and what the first years require.", images: ["/api/og?title=Christian+New+Marriage+Guide"] },
  twitter: { card: "summary_large_image", title: "Christian New Marriage Guide — Vine", description: "Building a Christian marriage in the first years.", images: ["/api/og?title=Christian+New+Marriage+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
