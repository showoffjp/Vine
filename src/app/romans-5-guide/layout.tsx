import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Romans 5 Guide — Justified by Faith — Christian Study",
  description: "A deep guide to Romans 5 — peace with God through justification by faith, rejoicing in sufferings, the love of God poured out by the Spirit, Christ dying for the ungodly, and the contrast of Adam and Christ.",
  openGraph: { title: "Romans 5 Guide — Vine", description: "A guide to Romans 5 — justified by faith, peace with God, suffering producing hope, and life in Christ.", images: ["/api/og?title=Romans+5+Guide"] },
  twitter: { card: "summary_large_image", title: "Romans 5 Guide — Vine", description: "A deep guide to Romans 5, justification, peace, and the gift of grace.", images: ["/api/og?title=Romans+5+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
