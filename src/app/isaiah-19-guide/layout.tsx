import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Isaiah 19 Guide - The Oracle Concerning Egypt and the Highway of Blessing - Christian Study",
  description: "A deep study of Isaiah 19 - the LORD riding on a swift cloud to Egypt, the trembling of Egypt's idols, civil war and confusion, the drying up of the Nile, the folly of Pharaoh's wise counselors at Zoan, and the astonishing in that day prophecies of an altar to the LORD in Egypt, the conversion of the nations, and the highway joining Egypt, Assyria, and Israel as a blessing in the midst of the earth.",
  openGraph: {
    title: "Isaiah 19 Guide - The Oracle Concerning Egypt - Vine",
    description: "Study Isaiah 19: the judgment on Egypt and its idols, the collapse of human wisdom and economy, and the breathtaking vision of Egypt my people, Assyria the work of my hands, and Israel my inheritance.",
    images: ["/api/og?title=Isaiah+19+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaiah 19 Guide - The Oracle Concerning Egypt - Vine",
    description: "A deep guide to Isaiah 19 - judgment on Egypt, the healing of the nations, and the highway of blessing from Egypt to Assyria to Israel.",
    images: ["/api/og?title=Isaiah+19+Guide"],
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
