import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Matthew 17 Guide - Christian Study",
  description: "A deep guide to Matthew chapter 17 - the Transfiguration of Jesus before Peter, James, and John, the healing of the demon-possessed boy and faith like a mustard seed, the second passion prediction, and the temple tax paid by a coin found in a fish's mouth.",
  openGraph: { title: "Matthew 17 Guide - Vine", description: "A guide to Matthew 17 - the Transfiguration, the faith that moves mountains, and the coin in the fish's mouth.", images: ["/api/og?title=Matthew+17+Guide"] },
  twitter: { card: "summary_large_image", title: "Matthew 17 Guide - Vine", description: "A deep guide to Matthew chapter 17.", images: ["/api/og?title=Matthew+17+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
