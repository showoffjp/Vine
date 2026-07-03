import type { Metadata } from "next";

// Rendered on demand: guide pages are client components behind a loaded
// guard, so their prerendered HTML is an empty shell. Skipping build-time
// prerender for this route cuts build work; metadata still renders per request.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Christian Creation Care Guide | Vine",
  description:
    "A biblical and theological guide to Christian creation care — the Genesis mandate to till and keep, the Sabbath for the land, Psalms as nature poetry, Romans 8 and the groaning creation, and practical ecology as an act of worship.",
  openGraph: {
    title: "Christian Creation Care Guide | Vine",
    description:
      "A biblical and theological guide to Christian creation care — the Genesis mandate to till and keep, the Sabbath for the land, Psalms as nature poetry, Romans 8 and the groaning creation, and practical ecology as an act of worship.",
    images: ["/api/og?title=Christian+Creation+Care+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Creation Care Guide | Vine",
    description:
      "A biblical and theological guide to Christian creation care — the Genesis mandate to till and keep, the Sabbath for the land, Psalms as nature poetry, Romans 8 and the groaning creation, and practical ecology as an act of worship.",
    images: ["/api/og?title=Christian+Creation+Care+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
