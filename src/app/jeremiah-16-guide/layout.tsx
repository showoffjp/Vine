import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Jeremiah 16 Guide &mdash; A Greater Exodus and Many Fishers &mdash; Christian Study",
  description: "A verse-by-verse study of Jeremiah 16 &mdash; the prophet forbidden to marry, mourn, or feast so that his life preaches the end of ordinary days; the new exodus promised inside the oracle of exile; and the fishers of judgment transfigured by Christ into fishers of men.",
  openGraph: {
    title: "Jeremiah 16 Guide &mdash; A Greater Exodus and Many Fishers",
    description: "Judgment's net becomes the gospel's net of rescue, and the God who hurls into exile schedules a homecoming that eclipses Egypt -- accomplished by Christ at Jerusalem.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
