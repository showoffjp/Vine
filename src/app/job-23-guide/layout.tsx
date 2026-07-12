import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 23 Guide &mdash; Oh That I Knew Where to Find Him &mdash; Christian Study",
  description: "A verse-by-verse study of Job 23 &mdash; Job's aching longing to find God and lay his case before him, the frustration of a hidden God, and his great confession of faith: 'when he has tried me, I shall come out as gold.'",
  openGraph: {
    title: "Job 23 Guide &mdash; Oh That I Knew Where to Find Him",
    description: "Job seeks a God he cannot find, yet trusts that God knows the way he takes and is refining him like gold. Boldness and trembling held together in faith.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
