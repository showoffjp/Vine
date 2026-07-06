import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 2 Guide &mdash; Shall We Receive Good and Not Evil? &mdash; Christian Study",
  description: "A verse-by-verse study of Job 2 &mdash; the second assault ('skin for skin'), Job struck in body, his wife's despairing counsel, Job's answer ('Shall we receive good from God, and shall we not receive evil?'), and the arrival of three friends who wept and sat silent for seven days.",
  openGraph: {
    title: "Job 2 Guide &mdash; Shall We Receive Good and Not Evil?",
    description: "Job's suffering deepens: the loss of health, the tested marriage, and the ministry of silent presence.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
