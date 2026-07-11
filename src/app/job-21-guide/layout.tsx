import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Job 21 Guide &mdash; Why Do the Wicked Live and Grow Mighty? &mdash; Christian Study",
  description: "A verse-by-verse study of Job 21 &mdash; Job's devastating reply that demolishes the friends' whole system: the plain fact that the wicked often prosper, live to old age, and die in peace, refuting the tidy doctrine of exact retribution and pointing to a final judgment beyond this life.",
  openGraph: {
    title: "Job 21 Guide &mdash; Why Do the Wicked Live and Grow Mighty?",
    description: "Job answers the friends with reality itself: the wicked frequently prosper. The books are not always balanced in this life.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
