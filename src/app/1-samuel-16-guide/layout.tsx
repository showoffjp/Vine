import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "1 Samuel 16 Guide — Christian Study",
  description: "A deep guide to 1 Samuel 16 — God sends Samuel to anoint David from the sons of Jesse, the rejection of the impressive Eliab, the principle that man looks on the outward appearance but the LORD looks on the heart, and the Spirit of the LORD rushing upon David.",
  openGraph: { title: "1 Samuel 16 Guide — Vine", description: "A guide to 1 Samuel 16 — the anointing of David and the LORD who looks on the heart.", images: ["/api/og?title=1+Samuel+16+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Samuel 16 Guide — Vine", description: "A deep guide to 1 Samuel 16 — David anointed as king and God who looks on the heart.", images: ["/api/og?title=1+Samuel+16+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
