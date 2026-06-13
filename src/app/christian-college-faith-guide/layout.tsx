import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Christian College Faith Guide",
  description: "Keeping and deepening faith in college — navigating intellectual challenges to Christianity, finding Christian community on campus, handling moral pressure, what to do when faith wobbles, apologetics for the university, and building a spiritual life far from home.",
  openGraph: { title: "Christian College Faith Guide — Vine", description: "Keeping faith in college — intellectual challenges, campus community, moral pressure, and building a spiritual life.", images: ["/api/og?title=Christian+College+Faith+Guide"] },
  twitter: { card: "summary_large_image", title: "Christian College Faith Guide — Vine", description: "Keeping and deepening faith in college.", images: ["/api/og?title=Christian+College+Faith+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
