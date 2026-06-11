import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tithing: A Christian Guide — Vine",
  description: "A thorough guide to Christian tithing: the history of the tithe, Malachi 3:10, the New Testament evidence, firstfruits giving, storehouse tithing, and tithing when in debt.",
  openGraph: {
    title: "Tithing: A Christian Guide — Vine",
    description: "A thorough guide to Christian tithing: the history of the tithe, Malachi 3:10, the New Testament evidence, firstfruits giving, storehouse tithing, and tithing when in debt.",
    images: ["/api/og?title=Tithing%3A+A+Christian+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tithing: A Christian Guide — Vine",
    description: "A thorough guide to Christian tithing: the history of the tithe, Malachi 3:10, the New Testament evidence, firstfruits giving, storehouse tithing, and tithing when in debt.",
    images: ["/api/og?title=Tithing%3A+A+Christian+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
