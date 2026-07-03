import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Book of Judges Guide — Christian Study",
  description: "A deep guide to the Book of Judges — the cycle of sin, servitude, supplication, and salvation, the judges God raised up from Othniel and Ehud to Deborah, Gideon, Jephthah, and Samson, the moral decline of Israel, and its cry for a true king fulfilled in Christ.",
  openGraph: { title: "Book of Judges Guide — Vine", description: "A guide to Judges — the recurring cycle, the major judges, Israel's moral decline, and the need for a true king.", images: ["/api/og?title=Book+of+Judges+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Judges Guide — Vine", description: "A deep guide to the Book of Judges.", images: ["/api/og?title=Book+of+Judges+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
