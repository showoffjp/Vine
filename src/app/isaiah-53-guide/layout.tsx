import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Isaiah 53 Guide — The Suffering Servant",
  description: "A deep guide to Isaiah 53 — the fourth Servant Song: despised and rejected, pierced for our transgressions, crushed for our iniquities, led like a lamb to the slaughter, and the One on whom the Lord laid the iniquity of us all, fulfilled in Jesus Christ.",
  openGraph: { title: "Isaiah 53 Guide — Vine", description: "A guide to the Suffering Servant — who has believed, pierced for our transgressions, the lamb led to slaughter, and the reward of the Servant.", images: ["/api/og?title=Isaiah+53+Guide"] },
  twitter: { card: "summary_large_image", title: "Isaiah 53 Guide — Vine", description: "A deep guide to Isaiah 53, the Suffering Servant.", images: ["/api/og?title=Isaiah+53+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
