import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Jeremiah 14 Guide &mdash; The Drought and the Prophets of Delusion &mdash; Christian Study",
  description: "A verse-by-verse study of Jeremiah 14 &mdash; the great drought, Judah's hollow liturgy of confession, God's verdict on the prophets who promised peace he never spoke, and the closing cry that only God gives rain: 'We set our hope on you.'",
  openGraph: {
    title: "Jeremiah 14 Guide &mdash; The Drought and the Prophets of Delusion",
    description: "Empty cisterns, beautiful words without turned feet, prophets prophesying the deceit of their own minds &mdash; and the confession that only the Lord gives rain, pointing to the living water of Christ.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
