import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 18 Guide &mdash; The Light of the Wicked Is Put Out &mdash; Christian Study",
  description: "A verse-by-verse study of Job 18 &mdash; Bildad's angry second speech: an unrelenting catalogue of the doom of the wicked -- their lamp extinguished, snares at their feet, terrors on every side, disease, and no descendants -- aimed squarely at Job.",
  openGraph: {
    title: "Job 18 Guide &mdash; The Light of the Wicked Is Put Out",
    description: "Bildad drops all sympathy and preaches the terrors of the wicked as a veiled verdict on his suffering friend.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
