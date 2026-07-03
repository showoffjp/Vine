import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "1 Chronicles 16 Chapter Guide — Christian Study",
  description: "A deep guide to 1 Chronicles 16 — David's psalm of praise when the Ark of the Covenant arrives in Jerusalem, the appointment of Levites to minister before the ark, the song of thanksgiving entrusted to Asaph, God's covenant with Abraham remembered, and the call for all the earth to worship the Lord.",
  openGraph: { title: "1 Chronicles 16 Chapter Guide — Vine", description: "A guide to 1 Chronicles 16 — the ark arrives in Jerusalem, David's song of thanksgiving, Levitical worship, the Abrahamic covenant, and worship among the nations.", images: ["/api/og?title=1+Chronicles+16+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "1 Chronicles 16 Chapter Guide — Vine", description: "A deep guide to 1 Chronicles 16 — David's psalm of praise, the ark in Jerusalem, and God's everlasting covenant.", images: ["/api/og?title=1+Chronicles+16+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
