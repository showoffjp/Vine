import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "2 Timothy 1 Bible Study Guide &mdash; The Vine",
  description: "A verse-by-verse guide to 2 Timothy 1 &mdash; Paul&rsquo;s final letter, sincere faith across generations, the spirit of power not fear, guarding the good deposit, and Onesiphorus.",
  openGraph: {
    title: "2 Timothy 1 Bible Study Guide &mdash; The Vine",
    description: "A verse-by-verse guide to 2 Timothy 1 &mdash; Paul&rsquo;s final letter, sincere faith across generations, the spirit of power not fear, guarding the good deposit, and Onesiphorus.",
    images: ["/api/og?title=2+Timothy+1+Bible+Study+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "2 Timothy 1 Bible Study Guide &mdash; The Vine",
    description: "A verse-by-verse guide to 2 Timothy 1 &mdash; Paul&rsquo;s final letter, sincere faith across generations, the spirit of power not fear, guarding the good deposit, and Onesiphorus.",
    images: ["/api/og?title=2+Timothy+1+Bible+Study+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
