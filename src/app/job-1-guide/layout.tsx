import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 1 Guide &mdash; The LORD Gave and the LORD Has Taken Away &mdash; Christian Study",
  description: "A verse-by-verse study of Job 1 &mdash; the blameless man, the heavenly court and the Accuser's challenge (Does Job fear God for nothing?), the day everything fell, and Job's worship in grief: 'The LORD gave, and the LORD has taken away; blessed be the name of the LORD.'",
  openGraph: {
    title: "Job 1 Guide &mdash; The LORD Gave and the LORD Has Taken Away",
    description: "The prologue of Job: the accusation behind all suffering, the four messengers, and worship that survives loss.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
