import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Christian Guide to Purpose and Calling",
  description: "Discovering your calling as a Christian — the theology of vocation, the difference between calling and career, how to discern God's will, the universal call to follow Christ and the particular call to specific work, and finding purpose in every season of life.",
  openGraph: { title: "Christian Guide to Purpose and Calling — Vine", description: "Discovering your calling — the theology of vocation, calling vs career, discerning God's will, and finding purpose.", images: ["/api/og?title=Christian+Purpose+and+Calling"] },
  twitter: { card: "summary_large_image", title: "Christian Guide to Purpose and Calling — Vine", description: "Discovering your calling as a Christian.", images: ["/api/og?title=Christian+Purpose+and+Calling"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
