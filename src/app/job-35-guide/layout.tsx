import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 35 Guide &mdash; Does It Profit to Be Righteous? &mdash; Christian Study",
  description: "A verse-by-verse study of Job 35 &mdash; Elihu answers the complaint that piety profits nothing: God is self-sufficient, our conduct affects our neighbors, and God answers the humble cry that seeks him, not the empty cries of the proud.",
  openGraph: {
    title: "Job 35 Guide &mdash; Does It Profit to Be Righteous?",
    description: "Elihu on why we obey and how we pray -- righteousness for God's sake, not payout, and prayer that seeks God's face, not merely relief from pain.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
