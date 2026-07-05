import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 66 Study Guide -- Come and See What God Has Done",
  description: "Verse-by-verse study of Psalm 66 -- the thanksgiving psalm that funnels from all the earth to one soul: cosmic praise, the exodus remembered, refining fire and water, vows paid in God's house, and the testimony 'come and hear what he has done for my soul.'",
  openGraph: {
    title: "Psalm 66 Study Guide -- Come and See What God Has Done",
    description: "Deep dive into Psalm 66: tested as silver, brought through fire and water to abundance, and the honest heart whose prayer God has not rejected.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
