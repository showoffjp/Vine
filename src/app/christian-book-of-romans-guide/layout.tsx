import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of Romans Guide — Christian Study",
  description: "A deep guide to Paul's Letter to the Romans — the gospel of God's righteousness (1:16-17), universal sinfulness (1:18–3:20), justification by faith (3:21–5:21), sanctification and the Spirit (6–8), Israel and the Gentiles (9–11), and the transformed life (12–16).",
  openGraph: { title: "Book of Romans Guide — Vine", description: "A deep guide to Paul's Letter to the Romans — the gospel, justification by faith, sanctification, Israel, and the transformed life.", images: ["/api/og?title=Book+of+Romans+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Romans Guide — Vine", description: "A deep guide to Paul's Letter to the Romans.", images: ["/api/og?title=Book+of+Romans+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
