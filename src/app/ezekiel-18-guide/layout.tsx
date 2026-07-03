import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Ezekiel 18 Study Guide &mdash; The Soul Who Sins Shall Die",
  description: "A verse-by-verse guide to Ezekiel 18 &mdash; God's refutation of inherited guilt, individual accountability, the righteous who turns to sin and the sinner who turns to righteousness, and the passionate call to turn and live.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
