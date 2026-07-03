import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Genesis 3 Guide — The Fall of Man — Christian Study",
  description: "A deep study of Genesis 3 — the serpent&apos;s temptation of Eve, Adam and Eve&apos;s sin and the fall of humanity, the devastating consequences of original sin, and the proto-evangelium promise of redemption in the seed of the woman who would crush the serpent&apos;s head. Explore shame, grace, and the first gospel.",
  openGraph: { title: "Genesis 3 Guide — The Fall of Man — Vine", description: "Explore Genesis 3 — the temptation, the fall, the curse, and God's first promise of redemption through the seed of the woman.", images: ["/api/og?title=Genesis+3+Guide"] },
  twitter: { card: "summary_large_image", title: "Genesis 3 Guide — The Fall of Man — Vine", description: "A deep study of Genesis 3 — sin, shame, consequences, and the proto-evangelium promise.", images: ["/api/og?title=Genesis+3+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
