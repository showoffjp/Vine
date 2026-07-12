import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 34 Guide &mdash; Far Be It from God to Do Wrong &mdash; Christian Study",
  description: "A verse-by-verse study of Job 34 &mdash; Elihu's defense of God's perfect justice: God repays each according to their work, shows no partiality, and sees every step -- yet overreaches in branding Job a rebel.",
  openGraph: {
    title: "Job 34 Guide &mdash; Far Be It from God to Do Wrong",
    description: "Elihu defends the justice of God -- a bedrock truth better than the friends' formula -- but presses it into a harsh verdict on Job that God himself will not confirm.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
