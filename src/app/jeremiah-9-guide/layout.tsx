import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Jeremiah 9 Guide &mdash; Let Him Who Boasts Boast in This &mdash; Christian Study",
  description: "A verse-by-verse study of Jeremiah 9 &mdash; the weeping prophet's fountain of tears over a society where truth has collapsed, and the great redirection of all boasting: to know God who practices steadfast love, justice, and righteousness.",
  openGraph: {
    title: "Jeremiah 9 Guide &mdash; Let Him Who Boasts Boast in This",
    description: "'Oh that my head were waters' -- Jeremiah weeps over a land of falsehood, and God names the one boast that lasts: knowing him, the God of steadfast love.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
