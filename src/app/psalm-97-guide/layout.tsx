import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 97 Study Guide &mdash; The LORD Reigns, Let the Earth Rejoice",
  description: "A verse-by-verse guide to Psalm 97 &mdash; the LORD enthroned over all the earth, righteousness and justice the foundation of his throne, the shaming of idols, and light sown for the righteous.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
