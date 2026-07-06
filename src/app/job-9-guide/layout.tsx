import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 9 Guide &mdash; There Is No Arbiter Between Us &mdash; Christian Study",
  description: "A verse-by-verse study of Job 9 &mdash; Job agrees no one can be right before the Almighty, marvels at God's uncontainable power, and voices one of the Old Testament's clearest longings for a mediator: 'There is no arbiter between us, who might lay his hand on us both.'",
  openGraph: {
    title: "Job 9 Guide &mdash; There Is No Arbiter Between Us",
    description: "Job's cry for a mediator who could stand between God and man &mdash; a longing answered in Christ (1 Timothy 2:5).",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
