import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Matthew 8 Guide — Christian Study",
  description: "A deep guide to Matthew Chapter 8 — Jesus heals a leper, answers the centurion's extraordinary faith, calms the storm, and casts out the Gadarene demoniacs. The chapter reveals Jesus' authority over disease, nature, and the demonic.",
  openGraph: { title: "Matthew 8 Guide — Vine", description: "A guide to Matthew 8 — the leper, the centurion's faith, calming the storm, and exorcism at Gadara.", images: ["/api/og?title=Matthew+8+Guide"] },
  twitter: { card: "summary_large_image", title: "Matthew 8 Guide — Vine", description: "A deep guide to Matthew Chapter 8.", images: ["/api/og?title=Matthew+8+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
