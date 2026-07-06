import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 8 Guide &mdash; Does God Pervert Justice? &mdash; Christian Study",
  description: "A verse-by-verse study of Job 8 &mdash; Bildad's first speech: his blunt appeal to God's unbending justice, the wisdom of the ancestors, the papyrus that withers without water, and the promise that God will not reject a blameless man.",
  openGraph: {
    title: "Job 8 Guide &mdash; Does God Pervert Justice?",
    description: "Bildad the traditionalist: sound principles about God's justice, cruelly aimed at a grieving father.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
