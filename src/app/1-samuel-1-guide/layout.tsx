import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "1 Samuel 1 Chapter Guide — Christian Study",
  description: "A deep guide to 1 Samuel 1 — Hannah's barrenness and grief, her fervent prayer at the tabernacle in Shiloh, Eli's blessing, the miraculous birth of Samuel, and Hannah's dedication of her son to the Lord.",
  openGraph: { title: "1 Samuel 1 Chapter Guide — Vine", description: "A guide to 1 Samuel 1 — Hannah's prayer, the birth of Samuel, and the God who hears and remembers the afflicted.", images: ["/api/og?title=1+Samuel+1+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Samuel 1 Chapter Guide — Vine", description: "A deep guide to 1 Samuel 1 — Hannah's prayer and the birth of Samuel.", images: ["/api/og?title=1+Samuel+1+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
