import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 26 Guide &mdash; He Hangs the Earth on Nothing &mdash; Christian Study",
  description: "A verse-by-verse study of Job 26 &mdash; Job's sarcastic reply to Bildad and his soaring hymn to God's cosmic majesty: God hangs the earth on nothing, stills the sea, and shatters chaos, yet all of it is 'but the outskirts of his ways.'",
  openGraph: {
    title: "Job 26 Guide &mdash; He Hangs the Earth on Nothing",
    description: "Job outdoes Bildad's thin theology with a vision of God so vast that all creation is only the faint whisper of his power. His struggle was never a small view of God.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
