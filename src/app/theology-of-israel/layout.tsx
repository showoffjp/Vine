import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theology of Israel",
  description: "Israel's election, the covenants, the five major evangelical positions on Israel's future, a deep guide to Romans 9-11, and real organizations doing Jewish evangelism today.",
  openGraph: {
    title: "Theology of Israel — Vine",
    description: "Israel's election, the covenants, the five major evangelical positions on Israel's future, a deep guide to Romans 9-11, and real organizations doing Jewish evangelism today.",
    images: ["/api/og?title=Theology+of+Israel"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Theology of Israel — Vine",
    description: "Israel's election, the covenants, the five major evangelical positions on Israel's future, a deep guide to Romans 9-11, and real organizations doing Jewish evangelism today.",
    images: ["/api/og?title=Theology+of+Israel"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
