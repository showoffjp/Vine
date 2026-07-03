import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Matthew 7 Guide - The Conclusion of the Sermon on the Mount - Christian Study",
  description: "A deep study of Matthew 7 - the climax of the Sermon on the Mount where Jesus teaches about judging rightly rather than hypocritically, removing the log from our own eye, the call to ask, seek, and knock in persistent prayer, the Golden Rule that sums up the Law and the Prophets, the narrow gate and the hard way that leads to life, recognizing false prophets by their fruit, the danger of saying Lord, Lord without doing the will of the Father, and the two builders on rock and sand. Explore discernment, the two ways, fruit as evidence of faith, and the unprecedented authority of Jesus.",
  openGraph: {
    title: "Matthew 7 Guide - The Sermon on the Mount Concludes - Vine",
    description: "A guide to Matthew 7 - judging rightly, ask seek knock, the Golden Rule, the narrow gate, false prophets, and the wise and foolish builders.",
    images: ["/api/og?title=Matthew+7+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matthew 7 Guide - The Sermon on the Mount Concludes - Vine",
    description: "A deep study of Matthew 7 - the narrow way, fruit and false prophets, hearing and doing, and the authority of Jesus.",
    images: ["/api/og?title=Matthew+7+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
