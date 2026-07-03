import { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Revelation 10: The Mighty Angel, the Little Scroll, and the End of Delay | Vine",
  description:
    "A comprehensive study guide to Revelation 10 -- the mighty angel descends with a little scroll, seven thunders are sealed, the oath declares no more delay, and John eats the scroll sweet in the mouth but bitter in the stomach.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
