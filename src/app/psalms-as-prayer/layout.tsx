import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Psalms as Prayer",
  description: "The Psalter is the prayer book of the Bible — 150 psalms that together cover the entire range of human experience before God. Learning to pray the Psalms is learning to pray.",
  openGraph: {
    title: "The Psalms as Prayer — Vine",
    description: "The Psalter is the prayer book of the Bible — 150 psalms that together cover the entire range of human experience before God. Learning to pray the Psalms is learning to pray.",
    images: ["/api/og?title=The+Psalms+as+Prayer"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Psalms as Prayer — Vine",
    description: "The Psalter is the prayer book of the Bible — 150 psalms that together cover the entire range of human experience before God. Learning to pray the Psalms is learning to pray.",
    images: ["/api/og?title=The+Psalms+as+Prayer"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
