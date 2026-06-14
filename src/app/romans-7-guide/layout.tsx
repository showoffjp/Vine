import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Romans 7 Guide — The Wretched Man — Christian Study",
  description: "A deep guide to Romans 7 — Paul’s most searching chapter on the Law, sin, and the agonizing inner conflict between the flesh and the spirit. Explore the wretched man passage, the role of the Mosaic Law in exposing sin, and the triumphant answer to “Who will deliver me?” found in Jesus Christ our Lord, opening into the freedom of Romans 8.",
  openGraph: { title: "Romans 7 Guide — The Wretched Man — Vine", description: "A guide to Romans 7 — the Law, sin, the inner conflict, and deliverance through Christ.", images: ["/api/og?title=Romans+7+Guide"] },
  twitter: { card: "summary_large_image", title: "Romans 7 Guide — The Wretched Man — Vine", description: "A deep guide to Romans 7 and the inner conflict between the flesh and the spirit.", images: ["/api/og?title=Romans+7+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
