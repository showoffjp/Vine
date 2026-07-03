import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Genesis 18 Chapter Guide – Abraham, Three Visitors, and Intercession | The Vine",
  description: "A deep guide to Genesis 18 — three heavenly visitors appearing to Abraham at Mamre, the renewal of the promise of Isaac, Sarah laughing at the impossible, and Abraham’s bold intercession for Sodom before the LORD.",
  openGraph: { title: "Genesis 18 Chapter Guide – The Vine", description: "Three heavenly visitors, Sarah’s laughter, and Abraham’s bold intercession for Sodom.", images: ["/api/og?title=Genesis+18+Guide"] },
  twitter: { card: "summary_large_image", title: "Genesis 18 Chapter Guide – The Vine", description: "A deep guide to Genesis 18 — Abraham, three visitors, Sarah laughs, and intercession for Sodom.", images: ["/api/og?title=Genesis+18+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
