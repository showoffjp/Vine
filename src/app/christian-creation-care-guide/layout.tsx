import type { Metadata } from "next";

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
