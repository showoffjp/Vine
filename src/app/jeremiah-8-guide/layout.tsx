import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Jeremiah 8 Guide &mdash; Is There No Balm in Gilead? &mdash; Christian Study",
  description: "A verse-by-verse study of Jeremiah 8 &mdash; the unnatural persistence of Judah's sin, the passing of the harvest of grace ('we are not saved'), and the tender lament for an incurable wound: 'Is there no balm in Gilead?'",
  openGraph: {
    title: "Jeremiah 8 Guide &mdash; Is There No Balm in Gilead?",
    description: "The grief of God and his prophet over a lost people, and the question the gospel answers -- there IS a balm and a physician, the crucified Christ.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
