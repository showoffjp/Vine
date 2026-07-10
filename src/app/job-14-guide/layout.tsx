import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 14 Guide &mdash; If a Man Dies, Shall He Live Again? &mdash; Christian Study",
  description: "A verse-by-verse study of Job 14 &mdash; Job's meditation on human frailty ('man who is born of woman is few of days and full of trouble'), the finality of death, and the flash of resurrection hope: 'If a man dies, shall he live again?... you would call, and I would answer you.'",
  openGraph: {
    title: "Job 14 Guide &mdash; If a Man Dies, Shall He Live Again?",
    description: "The book's boldest reach past the grave -- a longing that only the resurrection of Christ finally answers.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
