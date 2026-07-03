import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Proverbs 13: Hope Deferred and the Path of the Wise | Vine",
  description: "A study guide to Proverbs chapter 13 - receiving instruction, the discipline of speech, diligence versus sloth, hope deferred and the tree of life, the power of the company you keep, loving discipline, and generational inheritance.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
