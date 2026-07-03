import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Matthew 26 Guide — Christian Study",
  description: "A deep guide to Matthew 26 — the institution of the Lord's Supper, the agony of Gethsemane, the betrayal by Judas with a kiss, the trial before Caiaphas the high priest, and Peter's three denials followed by bitter weeping.",
  openGraph: { title: "Matthew 26 Guide — Vine", description: "A guide to Matthew 26 — the Last Supper, Gethsemane, the betrayal, the trial before Caiaphas, and Peter's denial.", images: ["/api/og?title=Matthew+26+Guide"] },
  twitter: { card: "summary_large_image", title: "Matthew 26 Guide — Vine", description: "A deep guide to Matthew 26 — Last Supper, Gethsemane, betrayal, and trial.", images: ["/api/og?title=Matthew+26+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
