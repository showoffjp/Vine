import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "2 Chronicles 20 Chapter Guide — Christian Study",
  description: "A deep guide to 2 Chronicles 20 — Jehoshaphat's prayer before the assembled nation, the prophecy of Jahaziel that the battle is God's, singers leading the army with praise, and the miraculous victory in the Valley of Beracah.",
  openGraph: { title: "2 Chronicles 20 Chapter Guide — Vine", description: "A guide to 2 Chronicles 20 — Jehoshaphat seeks God, the battle is not yours but God's, singers lead the army, and the Valley of Praise.", images: ["/api/og?title=2+Chronicles+20+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "2 Chronicles 20 Chapter Guide — Vine", description: "A deep guide to 2 Chronicles 20 — stand firm and see the salvation of the Lord.", images: ["/api/og?title=2+Chronicles+20+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
