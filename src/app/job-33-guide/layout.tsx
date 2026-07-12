import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 33 Guide &mdash; I Have Found a Ransom &mdash; Christian Study",
  description: "A verse-by-verse study of Job 33 &mdash; Elihu's key chapter: God speaks through dreams and through the pain of the sickbed to save, climaxing in the mediator and the ransom that delivers a soul from the pit, pointing to Christ.",
  openGraph: {
    title: "Job 33 Guide &mdash; I Have Found a Ransom",
    description: "Elihu's advance: suffering can be redemptive, and God 'has found a ransom' to deliver from the pit -- the need Job kept crying for, fulfilled in the one Mediator, Christ Jesus.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
