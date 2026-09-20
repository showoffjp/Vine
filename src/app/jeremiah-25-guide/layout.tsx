import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Jeremiah 25 Guide &mdash; Seventy Years and the Cup of Wrath &mdash; Christian Study",
  description: "A verse-by-verse study of Jeremiah 25 &mdash; twenty-three years of unheeded preaching, a God who rises early to send prophets, Nebuchadnezzar called 'my servant,' the seventy-year limit on exile, and the cup of wrath Christ drank at Calvary.",
  openGraph: {
    title: "Jeremiah 25 Guide &mdash; Seventy Years and the Cup of Wrath",
    description: "God's patience, his sovereignty over empires, a judgment with a date on it -- and the cup passed to every nation, drained in Gethsemane by the Son.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
