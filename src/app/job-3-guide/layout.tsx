import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 3 Guide &mdash; Why Is Light Given to the Suffering? &mdash; Christian Study",
  description: "A verse-by-verse study of Job 3 &mdash; the breaking of the seven-day silence, Job's curse on the day of his birth, his longing for the rest of the grave, and the honest darkness of faith that laments without cursing God.",
  openGraph: {
    title: "Job 3 Guide &mdash; Why Is Light Given to the Suffering?",
    description: "Job's first lament: the Bible's permission to voice anguish honestly before God without letting go of him.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
