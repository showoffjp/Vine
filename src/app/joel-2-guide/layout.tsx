import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Joel 2 Guide — Christian Study",
  description: "A deep guide to Joel 2 — the terrifying locust army, the call to rend your hearts and return to the LORD, the promise of rain and restoration, and the outpouring of the Spirit on all flesh quoted in Acts 2.",
  openGraph: { title: "Joel 2 Guide — Vine", description: "A guide to Joel 2 — the locust army, repentance, the promise of the Spirit poured out on all flesh.", images: ["/api/og?title=Joel+2+Guide"] },
  twitter: { card: "summary_large_image", title: "Joel 2 Guide — Vine", description: "A deep guide to Joel 2 — the Day of the LORD, repentance, and the promise of the Spirit.", images: ["/api/og?title=Joel+2+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
