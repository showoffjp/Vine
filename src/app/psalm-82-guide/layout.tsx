import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Psalm 82 Study Guide -- God Has Taken His Place in the Divine Council",
  description: "Verse-by-verse study of Psalm 82 -- the most theologically arresting psalm in the Psalter: God judges the corrupt 'gods,' defends the poor, and the Son of God quotes this text in John 10 to defend his own deity.",
  openGraph: {
    title: "Psalm 82 Study Guide -- God Has Taken His Place in the Divine Council",
    description: "Deep dive into Psalm 82: the divine council in Ancient Near Eastern context, who are the 'gods'?, the four commands to do justice, the death of the unjust judges, and Jesus's use of this text.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
