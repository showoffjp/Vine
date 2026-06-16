import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proverbs 22 Bible Study Guide | The Vine",
  description: "An in-depth study of Proverbs 22 -- covering the famous proverbs on reputation, child-rearing, wealth and poverty, and the beginning of the 30 Sayings of the Wise. Key verses include v.1 (good name), v.6 (train up a child), and vv.17-21.",
  openGraph: {
    title: "Proverbs 22 Bible Study Guide -- Vine",
    description: "An in-depth study of Proverbs 22 -- covering reputation, child-rearing, wealth and poverty, and the 30 Sayings of the Wise.",
    images: ["/api/og?title=Proverbs+22+Study+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proverbs 22 Bible Study Guide -- Vine",
    description: "An in-depth study of Proverbs 22 -- covering reputation, child-rearing, wealth and poverty, and the 30 Sayings of the Wise.",
    images: ["/api/og?title=Proverbs+22+Study+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
