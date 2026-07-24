import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Jeremiah 18 Guide &mdash; Like Clay in the Potter's Hand &mdash; Christian Study",
  description: "A verse-by-verse study of Jeremiah 18 &mdash; the potter's house: the vessel spoiled and reworked, God's sovereignty and responsiveness held together, the people's refusal ('That is in vain!'), and the plot against the interceding prophet.",
  openGraph: {
    title: "Jeremiah 18 Guide &mdash; Like Clay in the Potter's Hand",
    description: "The Potter does not discard marred clay but remakes it -- sovereignty that keeps the door open, and a gospel that makes new creations of spoiled vessels.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
