import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Isaiah 58 Guide — The Fast God Chooses",
  description: "A deep guide to Isaiah 58 — God rebukes hypocritical fasting and calls his people to loose the chains of injustice, feed the hungry, shelter the poor, and keep the Sabbath as a delight. Then your light will break forth like the dawn.",
  openGraph: { title: "Isaiah 58 Guide — Vine", description: "Isaiah 58: the fast God chooses, breaking chains of injustice, feeding the hungry, and the promise of light rising in the darkness.", images: ["/api/og?title=Isaiah+58+Guide"] },
  twitter: { card: "summary_large_image", title: "Isaiah 58 Guide — Vine", description: "A deep guide to Isaiah 58 — the fast God chooses and the promise of light breaking forth like the dawn.", images: ["/api/og?title=Isaiah+58+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
