import { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Revelation 13: The Beast from the Sea, the Beast from the Earth, and 666 | Vine",
  description:
    "A detailed study guide to Revelation 13 -- the beast from the sea (Rome/the antichrist pattern), the beast from the earth (the false prophet), the mark of the beast, 666 explained, and what patient endurance and faithfulness mean for Christians under pressure.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
