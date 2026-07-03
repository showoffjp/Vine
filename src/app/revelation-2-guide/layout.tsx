import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Revelation 2 Guide — Letters to Ephesus, Smyrna, Pergamum, and Thyatira",
  description: "A deep verse-by-verse guide to Revelation 2 — the letter to Ephesus and its lost first love, Smyrna and the crown of life, Pergamum at Satan's throne, and Thyatira tolerating Jezebel. What would Christ commend and rebuke in your church?",
  openGraph: {
    title: "Revelation 2 Guide — Letters to the Four Churches | Vine",
    description: "Verse-by-verse commentary on Revelation 2: Ephesus loses first love, Smyrna endures poverty and persecution, Pergamum faces accommodation to empire, Thyatira tolerates false teaching.",
    images: ["/api/og?title=Revelation+2+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Revelation 2 Guide — Vine",
    description: "A deep guide to Revelation 2 &mdash; four letters, four churches, one risen Christ who knows each community and calls each to faithfulness.",
    images: ["/api/og?title=Revelation+2+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
