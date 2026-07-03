import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Genesis 22 Guide — The Binding of Isaac and the Lamb God Provides",
  description: "A deep guide to Genesis 22 — God testing Abraham, the three-day journey to Moriah, Isaac carrying the wood, Abraham's faith that God would provide the lamb, the Akedah (binding of Isaac), the ram in the thicket, YHWH-Yireh, and the gospel foreshadowed in the Old Testament.",
  openGraph: { title: "Genesis 22 Guide — Vine", description: "A guide to Genesis 22 — the Akedah, Abraham's obedient trust, the ram God provided as substitute, and the foreshadowing of Christ as the Lamb of God.", images: ["/api/og?title=Genesis+22+Guide"] },
  twitter: { card: "summary_large_image", title: "Genesis 22 Guide — Vine", description: "A deep guide to Genesis 22 — the binding of Isaac, the Lamb God provides, and the gospel hidden in the Old Testament.", images: ["/api/og?title=Genesis+22+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
