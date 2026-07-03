import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Matthew 23 Guide - Christian Study",
  description: "A deep guide to Matthew chapter 23 - Jesus' climactic denunciation of the scribes and Pharisees, the warning against hypocrisy and the charter of servant humility, the seven woes, and the heartbroken lament over Jerusalem.",
  openGraph: { title: "Matthew 23 Guide - Vine", description: "A guide to Matthew 23 - the seven woes against the scribes and Pharisees and the lament over Jerusalem.", images: ["/api/og?title=Matthew+23+Guide"] },
  twitter: { card: "summary_large_image", title: "Matthew 23 Guide - Vine", description: "A deep guide to Matthew chapter 23.", images: ["/api/og?title=Matthew+23+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
