import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 10 Guide &mdash; Your Hands Fashioned and Made Me &mdash; Christian Study",
  description: "A verse-by-verse study of Job 10 &mdash; Job pours out his complaint to God: 'I loathe my life,' the tender argument from creation ('your hands fashioned and made me'), and the anguished plea of a creature to his Maker for a moment of comfort before the darkness.",
  openGraph: {
    title: "Job 10 Guide &mdash; Your Hands Fashioned and Made Me",
    description: "Job appeals to God as the one who made him: will the Potter destroy the work of his own hands?",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
