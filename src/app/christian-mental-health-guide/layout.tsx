import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Christian Mental Health Guide",
  description: "Mental health and faith — breaking the stigma in the church, Elijah’s depression, what Scripture says about the mind and emotions, therapy and medication through a Christian lens, and the whole-person gospel.",
  openGraph: {
    title: "Christian Mental Health Guide — Vine",
    description: "Mental health and faith — breaking the stigma in the church, Elijah’s depression, what Scripture says about the mind and emotions, therapy and medication through a Christian lens, and the whole-person gospel.",
    images: ["/api/og?title=Christian+Mental+Health+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Mental Health Guide — Vine",
    description: "Mental health and faith — breaking the stigma in the church, Elijah’s depression, what Scripture says about the mind and emotions, therapy and medication through a Christian lens, and the whole-person gospel.",
    images: ["/api/og?title=Christian+Mental+Health+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
