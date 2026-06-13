import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Christian Empty Nest Guide",
  description: "Faith and the empty nest — the grief and freedom when children leave home, rediscovering marriage after parenting, finding new purpose and calling, releasing adult children well, and what God may be doing in this new season of life.",
  openGraph: { title: "Christian Empty Nest Guide — Vine", description: "Faith and the empty nest — grief and freedom, rediscovering marriage, new purpose, and releasing adult children well.", images: ["/api/og?title=Christian+Empty+Nest+Guide"] },
  twitter: { card: "summary_large_image", title: "Christian Empty Nest Guide — Vine", description: "Faith and the empty nest season.", images: ["/api/og?title=Christian+Empty+Nest+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
