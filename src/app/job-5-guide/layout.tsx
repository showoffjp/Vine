import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 5 Guide &mdash; Blessed Is the One Whom God Reproves &mdash; Christian Study",
  description: "A verse-by-verse study of Job 5 &mdash; Eliphaz continues: 'man is born to trouble as the sparks fly upward,' the call to seek God, the majesty of the Almighty, and the true-but-misapplied comfort, 'Blessed is the one whom God reproves.'",
  openGraph: {
    title: "Job 5 Guide &mdash; Blessed Is the One Whom God Reproves",
    description: "Eliphaz's discipline theology: true words that become cruel when aimed at the wrong sufferer.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
