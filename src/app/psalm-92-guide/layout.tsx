import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 92 Study Guide -- It Is Good to Give Thanks to the LORD",
  description: "Verse-by-verse study of Psalm 92 -- the Sabbath psalm: a wisdom hymn celebrating God's covenant love and faithfulness, the flourishing of the righteous like the palm tree and cedar of Lebanon, and the ultimate futility of the wicked.",
  openGraph: {
    title: "Psalm 92 Study Guide -- It Is Good to Give Thanks to the LORD",
    description: "Deep dive into Psalm 92: the only psalm titled 'for the Sabbath day' -- exploring the goodness of Sabbath praise, the depth of God's works, the flourishing of the righteous in old age, and the doom of the senseless.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
