import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Zechariah 1 Study Guide &mdash; Return to Me and I Will Return to You",
  description: "A verse-by-verse guide to Zechariah 1 &mdash; the call to return unlike the fathers who did not heed, the night visions of the man among the myrtle trees, the angelic intercession, and the promise of the rebuilding of Jerusalem.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
