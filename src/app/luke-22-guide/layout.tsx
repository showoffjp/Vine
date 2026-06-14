import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Luke 22 Guide — Christian Study",
  description: "A deep guide to Luke 22 — the Last Supper and the new covenant, the argument about greatness and servant leadership, Jesus in the Garden of Gethsemane, the betrayal of Judas, Peter's denial, and the arrest of Jesus.",
  openGraph: { title: "Luke 22 Guide — Vine", description: "A guide to Luke 22 — the Last Supper, servant leadership, Gethsemane, betrayal, and arrest.", images: ["/api/og?title=Luke+22+Guide"] },
  twitter: { card: "summary_large_image", title: "Luke 22 Guide — Vine", description: "A deep guide to Luke 22.", images: ["/api/og?title=Luke+22+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
