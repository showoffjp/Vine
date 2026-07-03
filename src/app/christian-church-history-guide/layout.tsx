import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Christian Church History Guide",
  description: "The story of the church — the early church and persecution, the councils and creeds, the Great Schism, the Reformation, the Great Awakenings, the global church today, and what church history teaches us about faith and failure.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
