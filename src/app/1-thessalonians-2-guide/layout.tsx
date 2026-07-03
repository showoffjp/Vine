import { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "1 Thessalonians 2 Study Guide: Authentic Ministry and Pastoral Love | The Vine",
  description:
    "A comprehensive verse-by-verse study of 1 Thessalonians 2 -- Paul's defense of his ministry and expression of deep pastoral love: speaking to please God not men, gentle as a nursing mother, urging as a father, Satan's hindrance, and the Thessalonians as his glory and joy.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
