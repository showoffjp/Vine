import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Acts 13 Guide — Christian Study",
  description: "A deep guide to Acts 13 — the Holy Spirit sets apart Barnabas and Saul at Antioch, the first missionary journey begins, Paul preaches a sweeping synagogue sermon in Pisidian Antioch tracing Israel's history to Christ, and the missionaries turn to the Gentiles.",
  openGraph: { title: "Acts 13 Guide — Vine", description: "A guide to Acts 13 — the commissioning at Antioch, preaching in Cyprus, Paul's great sermon in Pisidian Antioch, and turning to the Gentiles.", images: ["/api/og?title=Acts+13+Guide"] },
  twitter: { card: "summary_large_image", title: "Acts 13 Guide — Vine", description: "A deep guide to Acts 13 — the first missionary journey begins.", images: ["/api/og?title=Acts+13+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
