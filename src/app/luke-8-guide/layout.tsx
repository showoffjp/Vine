import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Luke 8 Guide — Christian Study",
  description: "A deep guide to Luke chapter 8 — the women who supported Jesus, the Parable of the Sower and its explanation, the calming of the storm, the deliverance of the Gerasene demoniac, and the intertwined healings of Jairus' daughter and the bleeding woman.",
  openGraph: { title: "Luke 8 Guide — Vine", description: "A guide to Luke 8 — the Parable of the Sower, calming the storm, the Gerasene demoniac, and faith that heals.", images: ["/api/og?title=Luke+8+Guide"] },
  twitter: { card: "summary_large_image", title: "Luke 8 Guide — Vine", description: "A deep guide to Luke chapter 8.", images: ["/api/og?title=Luke+8+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
