import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Isaiah 34: The Day of the LORD's Vengeance Against the Nations | Vine",
  description:
    "A comprehensive chapter guide to Isaiah 34 -- the cosmic summons of all nations, the sword of the LORD against Edom, the perpetual desolation of Edom's territory, and the reliability of the LORD's scroll. Covers Hebrew terms cherem, nakam, shemamah, and hassaphar.",
  openGraph: {
    title: "Isaiah 34: The Day of the LORD's Vengeance | Vine",
    description: "A deep guide to Isaiah 34 -- judgment against all nations, Edom as the paradigm of opposition to God, and the heavens rolled up like a scroll.",
    images: ["/api/og?title=Isaiah+34+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaiah 34: The Day of the LORD's Vengeance Against the Nations | Vine",
    description: "A guide to Isaiah 34 -- the cosmic judgment, Edom's desolation, and the scroll that will not fail.",
    images: ["/api/og?title=Isaiah+34+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
