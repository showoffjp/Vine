import { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "2 Thessalonians 1 Study Guide: Judgment, Glory, and Growing Faith | The Vine",
  description:
    "A comprehensive verse-by-verse study of 2 Thessalonians 1 -- Paul's thanksgiving for faith growing abundantly under persecution, God's righteous judgment at Christ's return, eternal destruction away from the presence of the Lord, and Christ glorified in his saints.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
