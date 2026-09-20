import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Jeremiah 26 Guide &mdash; On Trial for the Temple Sermon &mdash; Christian Study",
  description: "A verse-by-verse study of Jeremiah 26 &mdash; the charge to 'not hold back a word,' the house made like Shiloh, the capital trial in the New Gate, and the precedents of Micah who was spared and Uriah who was killed.",
  openGraph: {
    title: "Jeremiah 26 Guide &mdash; On Trial for the Temple Sermon",
    description: "On trial for his life, Jeremiah preaches the sermon again and offers mercy to his accusers -- and God's warnings prove to be open doors, not closed verdicts.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
