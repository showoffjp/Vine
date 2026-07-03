import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Mark Chapter 3 Guide — The Vine",
  description: "A comprehensive chapter guide to Mark 3: Sabbath healing, the calling of the Twelve Apostles, the Beelzebul controversy, the unforgivable sin, and Jesus redefining true family around doing God's will.",
};

export default function Mark3GuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
