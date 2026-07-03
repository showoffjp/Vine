import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Christian Apologetics Guide",
  description: "Defending the faith — classical apologetics (Aquinas), evidential apologetics (McDowell), presuppositionalism (Van Til/Bahnsen), the cosmological argument, the resurrection evidence, the problem of evil, and why apologetics is an act of love.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
