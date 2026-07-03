import { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Revelation 11: The Two Witnesses, the Beast, and the Seventh Trumpet | Vine",
  description:
    "A comprehensive study guide to Revelation 11 -- the measuring of the temple, the two witnesses who prophesy for 1,260 days and are killed by the beast then resurrected, and the seventh trumpet declaring Christ's eternal reign.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
