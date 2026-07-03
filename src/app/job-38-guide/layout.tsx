import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Job 38 Guide — God Speaks from the Whirlwind — Christian Study",
  description: "A deep study of Job 38 — the divine speech from the whirlwind in which God confronts Job with the wonders of creation, asking 'Where were you?' and revealing a wisdom and sovereignty that transcend all human suffering and confusion.",
  openGraph: { title: "Job 38 Guide — Vine", description: "Study Job 38 — God answers Job from the whirlwind with questions about creation, the sea, the dawn, the stars, and the mystery of divine providence.", images: ["/api/og?title=Job+38+Guide"] },
  twitter: { card: "summary_large_image", title: "Job 38 Guide — Vine", description: "A deep guide to Job 38: God Speaks from the Whirlwind.", images: ["/api/og?title=Job+38+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
