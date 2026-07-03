import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Isaiah 11 Guide - The Branch from Jesse and the Peaceable Kingdom - Christian Study",
  description: "A deep study of Isaiah 11 - the messianic prophecy of the shoot from the stump of Jesse on whom the sevenfold Spirit rests. Explore the righteous king who defends the poor, the peaceable kingdom where the wolf dwells with the lamb and the earth is full of the knowledge of the LORD, the root of Jesse as a signal for the nations, and the second exodus that gathers the scattered remnant home.",
  openGraph: {
    title: "Isaiah 11 Guide - The Branch from Jesse - Vine",
    description: "Study Isaiah 11: the Branch from the stump of Jesse, the sevenfold Spirit, the peaceable kingdom, and the gathering of the nations and the remnant fulfilled in Jesus Christ.",
    images: ["/api/og?title=Isaiah+11+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaiah 11 Guide - The Branch from Jesse - Vine",
    description: "A deep guide to Isaiah 11 and the messianic prophecy of the Branch from Jesse and the peaceable kingdom.",
    images: ["/api/og?title=Isaiah+11+Guide"],
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
