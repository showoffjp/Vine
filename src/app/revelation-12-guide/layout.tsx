import { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Revelation 12: The Woman, the Dragon, War in Heaven, and the Overcomer's Victory | Vine",
  description:
    "A detailed study guide to Revelation 12 -- the woman clothed with the sun, the great red dragon, the male child caught up to God, war in heaven, Michael and his angels, the accuser cast down, and the saints who overcome by the blood of the Lamb and the word of their testimony.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
