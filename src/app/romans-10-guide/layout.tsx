import { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Romans 10: The Word of Faith and the Universal Call | Vine",
  description:
    "A study guide to Romans chapter 10 - zeal without knowledge, Christ as the end of the law, the nearness of the word of faith, the great confession that Jesus is Lord, the universal call for everyone who calls on the name of the Lord, and the chain of salvation that grounds missions and preaching.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
