import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Jeremiah 3 Guide &mdash; Return, and I Will Heal Your Faithlessness &mdash; Christian Study",
  description: "A verse-by-verse study of Jeremiah 3 &mdash; God as the wronged husband calling his adulterous people home, judging hypocritical Judah worse than exiled Israel, and promising the outrageous grace: 'I will heal your faithlessness.'",
  openGraph: {
    title: "Jeremiah 3 Guide &mdash; Return, and I Will Heal Your Faithlessness",
    description: "Grace beyond human law: God begs his unfaithful bride to return and promises not merely to forgive but to heal the faithlessness itself -- the new-covenant hope.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
