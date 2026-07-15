import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Jeremiah 15 Guide &mdash; Your Words Became to Me a Joy &mdash; Christian Study",
  description: "A verse-by-verse study of Jeremiah 15 &mdash; not even Moses and Samuel could avert the judgment; Jeremiah laments his calling as a man of strife; and the prophet who ate God's words as joy accuses God of being a deceitful brook, only to be restored and recommissioned word for word.",
  openGraph: {
    title: "Jeremiah 15 Guide &mdash; Your Words Became to Me a Joy",
    description: "The depth of judgment, the cost of the calling, and the recommissioning of a broken prophet &mdash; God restores faltering servants by renewing their first call.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
