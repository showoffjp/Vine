import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 11 Study Guide &mdash; In the LORD I Take Refuge",
  description: "A verse-by-verse guide to Psalm 11 &mdash; David's refusal to flee like a bird to the mountains, the LORD in his holy temple with his throne in heaven, and the assurance that the upright shall behold his face.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
