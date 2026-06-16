import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galatians 4 Guide &mdash; Sons, Not Slaves",
  description: "A verse-by-verse guide to Galatians 4: the fullness of time, adoption as sons, Abba Father, and the allegory of Hagar and Sarah. Discover your identity as a child of God, not a slave to the law.",
  openGraph: {
    title: "Galatians 4 Guide &mdash; Sons, Not Slaves | The Vine",
    description: "A verse-by-verse guide to Galatians 4: the fullness of time, adoption as sons, Abba Father, and the allegory of Hagar and Sarah.",
    images: ["/api/og?title=Galatians+4+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galatians 4 Guide &mdash; Sons, Not Slaves | The Vine",
    description: "A verse-by-verse guide to Galatians 4: the fullness of time, adoption as sons, Abba Father, and the allegory of Hagar and Sarah.",
    images: ["/api/og?title=Galatians+4+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
