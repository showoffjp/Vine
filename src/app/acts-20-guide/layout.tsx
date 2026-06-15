import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Acts 20 Chapter Guide – Paul's Farewell at Miletus | The Vine",
  description: "A deep guide to Acts 20 — Eutychus raised from death at Troas, Paul's farewell address to the Ephesian elders at Miletus, warning about savage wolves, and the unique saying of Jesus: 'It is more blessed to give than to receive.'",
  openGraph: { title: "Acts 20 Chapter Guide – Paul's Farewell at Miletus | The Vine", description: "Acts 20: Eutychus raised, Paul's Miletus farewell speech, the whole counsel of God, wolves inside and outside the flock.", images: ["/api/og?title=Acts+20+Guide"] },
  twitter: { card: "summary_large_image", title: "Acts 20 Chapter Guide | The Vine", description: "A deep guide to Acts 20 — Eutychus raised, Paul's farewell at Miletus, and keeping watch over the flock.", images: ["/api/og?title=Acts+20+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
