import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "1 Samuel 3 Chapter Guide — Christian Study",
  description: "A deep guide to 1 Samuel 3 — God calls Samuel in the night, the word of the Lord being rare in those days, Eli's discernment, God's message of judgment against Eli's house, and Samuel's growth as a prophet whose words never fell to the ground.",
  openGraph: { title: "1 Samuel 3 Chapter Guide — Vine", description: "A guide to 1 Samuel 3 — God calls Samuel, the word was rare, Eli instructs Samuel to listen, and the prophetic ministry of Samuel begins.", images: ["/api/og?title=1+Samuel+3+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Samuel 3 Chapter Guide — Vine", description: "A deep guide to 1 Samuel 3 — God calls the boy Samuel in the temple.", images: ["/api/og?title=1+Samuel+3+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
