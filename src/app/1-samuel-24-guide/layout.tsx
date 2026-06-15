import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "1 Samuel 24 Chapter Guide — Christian Study",
  description: "A deep guide to 1 Samuel 24 — David spares Saul's life in the cave at En Gedi, refusing to harm the Lord's anointed even when delivered into his hands, and calling Saul to acknowledge the truth of his innocence.",
  openGraph: { title: "1 Samuel 24 Chapter Guide — Vine", description: "David spares Saul in the cave at En Gedi — a guide to 1 Samuel 24 on restraint, the Lord's anointed, and trusting God's timing.", images: ["/api/og?title=1+Samuel+24+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Samuel 24 Chapter Guide — Vine", description: "A deep guide to 1 Samuel 24 — David spares Saul at En Gedi.", images: ["/api/og?title=1+Samuel+24+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
