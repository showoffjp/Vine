import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Jeremiah 27 Guide &mdash; Bring Your Neck Under the Yoke &mdash; Christian Study",
  description: "A verse-by-verse study of Jeremiah 27 &mdash; the prophet in an ox-yoke at a summit of rebel kings, God's right to give the earth to whomever he pleases, submission as the path of life, and the lie of promised quick relief.",
  openGraph: {
    title: "Jeremiah 27 Guide &mdash; Bring Your Neck Under the Yoke",
    description: "Resistance that felt like faith was rebellion, because God had assigned the yoke. Everyone wears one -- and Christ's is the only yoke that gives rest.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
