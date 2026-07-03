import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Proverbs 5 Study Guide &mdash; Warning Against Adultery and Rejoicing in Marriage",
  description: "A verse-by-verse guide to Proverbs 5 &mdash; the father's urgent warning against the adulteress, the bitterness of sin's consequences, and the call to find joy in faithful marriage.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
