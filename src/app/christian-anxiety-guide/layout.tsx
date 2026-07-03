import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Christian Guide to Anxiety",
  description:
    "Anxiety and the Christian faith — what the Bible says about worry (Matthew 6, Philippians 4), the theology of anxiety vs. clinical anxiety disorder, the role of prayer in reducing anxiety, lament as a spiritual practice, trusting God in uncertainty, and when to seek professional help.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
