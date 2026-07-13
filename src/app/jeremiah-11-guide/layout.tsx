import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Jeremiah 11 Guide &mdash; A Gentle Lamb Led to the Slaughter &mdash; Christian Study",
  description: "A verse-by-verse study of Jeremiah 11 &mdash; the broken covenant of Sinai, the command not to pray for a people past averted judgment, and the plot by Jeremiah's own townsmen against 'a gentle lamb led to the slaughter.'",
  openGraph: {
    title: "Jeremiah 11 Guide &mdash; A Gentle Lamb Led to the Slaughter",
    description: "Judah shattered the covenant with a god for every city; Jeremiah, betrayed by his own kinsmen, prefigures the innocent Lamb of God led to the cross.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
