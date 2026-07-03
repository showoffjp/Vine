import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Christian Guide to Depression",
  description:
    "Depression and the Christian faith — Elijah’s breakdown (1 Kings 19), the lament psalms, the dark night of the soul (John of the Cross), what the Bible says about sadness and despair, when depression becomes clinical, therapy and medication, and the hope of resurrection.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
