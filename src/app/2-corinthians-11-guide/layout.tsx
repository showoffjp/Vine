import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "2 Corinthians 11 Guide &mdash; The Fool&rsquo;s Speech",
  description: "A comprehensive Bible study guide to 2 Corinthians 11: Paul&rsquo;s Fool&rsquo;s Speech, the defense of his apostleship against false teachers, discerning angels of light, and boasting in weakness and suffering.",
  openGraph: {
    title: "2 Corinthians 11 &mdash; Paul&rsquo;s Fool&rsquo;s Speech",
    description: "A comprehensive Bible study guide to 2 Corinthians 11: Paul&rsquo;s Fool&rsquo;s Speech, the defense of his apostleship against false teachers, discerning angels of light, and boasting in weakness and suffering.",
    images: ["/api/og?title=2+Corinthians+11+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "2 Corinthians 11 &mdash; Paul&rsquo;s Fool&rsquo;s Speech",
    description: "A comprehensive Bible study guide to 2 Corinthians 11: Paul&rsquo;s Fool&rsquo;s Speech, the defense of his apostleship against false teachers, discerning angels of light, and boasting in weakness and suffering.",
    images: ["/api/og?title=2+Corinthians+11+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
