import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Book of James Guide — Christian Study",
  description: "A deep guide to the Letter of James — faith that works, trials and the testing of faith, taming the tongue, the danger of favoritism, faith without works is dead, wisdom from above, warnings to the rich, and patience in suffering. The wisdom literature of the New Testament.",
  openGraph: { title: "Book of James Guide — Vine", description: "A guide to James — faith that works, trials, taming the tongue, faith and works, wisdom from above, and patience.", images: ["/api/og?title=Book+of+James+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of James Guide — Vine", description: "A deep guide to the Letter of James.", images: ["/api/og?title=Book+of+James+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
