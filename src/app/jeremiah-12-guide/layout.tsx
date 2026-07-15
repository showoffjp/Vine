import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Jeremiah 12 Guide &mdash; Why Does the Way of the Wicked Prosper? &mdash; Christian Study",
  description: "A verse-by-verse study of Jeremiah 12 &mdash; Jeremiah's honest complaint at the prosperity of the treacherous, God's bracing answer 'how will you compete with horses?', and the Lord's own lament over giving 'the beloved of my soul' into the hands of her enemies.",
  openGraph: {
    title: "Jeremiah 12 Guide &mdash; Why Does the Way of the Wicked Prosper?",
    description: "Jeremiah pleads his case before the righteous Judge; God answers lament with strengthening for harder races &mdash; and with grace that will build repentant nations up in the midst of his people.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
