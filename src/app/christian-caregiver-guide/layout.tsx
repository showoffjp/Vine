import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Christian Caregiver Guide",
  description: "Caring for an aging parent, sick spouse, or disabled child as a Christian — the theology of caregiving as vocation, caregiver burnout and guilt, the spirituality of hidden service, honoring father and mother, finding support, and sustaining your own soul while caring for another.",
  openGraph: { title: "Christian Caregiver Guide — Vine", description: "Caregiving as a Christian — the theology of hidden service, burnout, guilt, honoring parents, and sustaining your soul.", images: ["/api/og?title=Christian+Caregiver+Guide"] },
  twitter: { card: "summary_large_image", title: "Christian Caregiver Guide — Vine", description: "Caregiving as a Christian vocation.", images: ["/api/og?title=Christian+Caregiver+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
