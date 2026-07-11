import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 19 Guide &mdash; I Know That My Redeemer Lives &mdash; Christian Study",
  description: "A verse-by-verse study of Job 19 &mdash; the summit of the book: abandoned by family, friends, and even his wife, Job utters the greatest confession of Old Testament faith: 'I know that my Redeemer lives, and at the last he will stand upon the earth... and in my flesh I shall see God.'",
  openGraph: {
    title: "Job 19 Guide &mdash; I Know That My Redeemer Lives",
    description: "From the depths of total abandonment, the clearest resurrection hope in the Old Testament -- fulfilled in the risen Christ.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
