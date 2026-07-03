import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 94 Study Guide -- O LORD God of Vengeance, Shine Forth",
  description: "Verse-by-verse study of Psalm 94 -- a lament calling on the God of justice to rise against the proud oppressors who crush his people, paired with a wisdom meditation on divine discipline and the ultimate security of those who trust the LORD.",
  openGraph: {
    title: "Psalm 94 Study Guide -- O LORD God of Vengeance, Shine Forth",
    description: "Deep dive into Psalm 94: the biblical theology of divine vengeance, the proud claim that God does not see, discipline as love, and the LORD as the rock of refuge for the soul pressed down by wicked rulers.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
