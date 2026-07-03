import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "1 Thessalonians 3 Study Guide | The Vine",
  description: "A deep study of 1 Thessalonians 3 -- Paul's pastoral anxiety and joy, the sending of Timothy, the good news that restored Paul's life, and the prayer for abounding love and blameless holiness.",
  openGraph: {
    title: "1 Thessalonians 3 Study Guide -- The Vine",
    description: "A deep study of 1 Thessalonians 3 -- Paul's pastoral anxiety and joy, the sending of Timothy, the good news that restored Paul's life, and the prayer for abounding love and blameless holiness.",
    images: ["/api/og?title=1+Thessalonians+3+Study+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "1 Thessalonians 3 Study Guide -- The Vine",
    description: "A deep study of 1 Thessalonians 3 -- Paul's pastoral anxiety and joy, the sending of Timothy, the good news that restored Paul's life, and the prayer for abounding love and blameless holiness.",
    images: ["/api/og?title=1+Thessalonians+3+Study+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
