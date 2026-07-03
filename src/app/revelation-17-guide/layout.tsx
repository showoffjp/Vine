import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Revelation 17 Study Guide &mdash; Mystery Babylon and the Beast",
  description: "A verse-by-verse guide to Revelation 17 &mdash; the great harlot Babylon, the scarlet beast, and the mystery of the woman who sits on many waters.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
