import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "2 Samuel 6 Chapter Guide — Christian Study",
  description: "A deep guide to 2 Samuel 6 — David bringing the ark of the covenant to Jerusalem, the death of Uzzah, the blessing of Obed-Edom, David dancing before the Lord with all his might in a linen ephod, and Michal's contempt.",
  openGraph: { title: "2 Samuel 6 Chapter Guide — Vine", description: "A guide to 2 Samuel 6 — the ark's journey to Jerusalem, Uzzah's death, David's dancing, and Michal's contempt.", images: ["/api/og?title=2+Samuel+6+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "2 Samuel 6 Chapter Guide — Vine", description: "A deep guide to 2 Samuel 6 — David and the Ark of the Covenant.", images: ["/api/og?title=2+Samuel+6+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
