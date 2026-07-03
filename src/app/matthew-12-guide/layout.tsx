import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Matthew 12 Guide - Christian Study",
  description: "A deep guide to Matthew chapter 12 - the Sabbath controversies, Jesus as Lord of the Sabbath and the gentle servant of Isaiah, the Beelzebul controversy and the blasphemy against the Holy Spirit, the demand for a sign answered by the sign of Jonah, and the redefinition of Jesus' true family.",
  openGraph: { title: "Matthew 12 Guide - Vine", description: "A guide to Matthew 12 - Lord of the Sabbath, the unforgivable sin, the sign of Jonah, and the true family of Jesus.", images: ["/api/og?title=Matthew+12+Guide"] },
  twitter: { card: "summary_large_image", title: "Matthew 12 Guide - Vine", description: "A deep guide to Matthew chapter 12.", images: ["/api/og?title=Matthew+12+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
