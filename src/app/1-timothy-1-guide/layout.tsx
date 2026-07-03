import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "1 Timothy 1 Study Guide &mdash; Sound Doctrine, the Law, and Paul&rsquo;s Testimony",
  description: "A verse-by-verse guide to 1 Timothy 1: the goal of instruction as love from a pure heart, the proper use of the law, and Paul's extraordinary testimony that Christ Jesus came to save sinners -- of whom he is the foremost.",
  openGraph: {
    title: "1 Timothy 1 &mdash; The Vine Bible Study",
    description: "A verse-by-verse guide to 1 Timothy 1: the goal of instruction as love from a pure heart, the proper use of the law, and Paul's extraordinary testimony that Christ Jesus came to save sinners -- of whom he is the foremost.",
    images: ["/api/og?title=1+Timothy+1"],
  },
  twitter: {
    card: "summary_large_image",
    title: "1 Timothy 1 &mdash; The Vine Bible Study",
    description: "A verse-by-verse guide to 1 Timothy 1: the goal of instruction as love from a pure heart, the proper use of the law, and Paul's extraordinary testimony that Christ Jesus came to save sinners -- of whom he is the foremost.",
    images: ["/api/og?title=1+Timothy+1"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
