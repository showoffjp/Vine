import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "2 Corinthians 5 Guide — Christian Study",
  description: "A deep guide to 2 Corinthians 5 — the body as an earthly tent, walking by faith not by sight, the judgment seat of Christ, new creation, the ministry of reconciliation, and the great exchange: he who knew no sin was made sin for us that we might become the righteousness of God.",
  openGraph: { title: "2 Corinthians 5 Guide — Vine", description: "A guide to 2 Corinthians 5 — new creation, reconciliation, the judgment seat of Christ, and the great exchange at the heart of the gospel.", images: ["/api/og?title=2+Corinthians+5+Guide"] },
  twitter: { card: "summary_large_image", title: "2 Corinthians 5 Guide — Vine", description: "A deep guide to 2 Corinthians 5 — new creation and reconciliation.", images: ["/api/og?title=2+Corinthians+5+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
