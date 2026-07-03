import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Isaiah 2 - The Mountain of the LORD | Chapter Guide",
  description:
    "A verse-by-verse guide to Isaiah 2 - the eschatological vision of the mountain of the LORD, all nations flowing to Zion, swords beaten into plowshares, and the Day of the LORD humbling human pride.",
  openGraph: {
    title: "Isaiah 2 - The Mountain of the LORD | Vine",
    description:
      "A verse-by-verse guide to Isaiah 2 - the eschatological vision of the mountain of the LORD, all nations flowing to Zion, swords beaten into plowshares, and the Day of the LORD humbling human pride.",
    images: ["/api/og?title=Isaiah+2+-+The+Mountain+of+the+LORD"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaiah 2 - The Mountain of the LORD | Vine",
    description:
      "A verse-by-verse guide to Isaiah 2 - the eschatological vision of the mountain of the LORD, all nations flowing to Zion, swords beaten into plowshares, and the Day of the LORD humbling human pride.",
    images: ["/api/og?title=Isaiah+2+-+The+Mountain+of+the+LORD"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
