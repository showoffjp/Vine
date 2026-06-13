import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of Ecclesiastes Guide - Christian Study",
  description: "A deep guide to the Book of Ecclesiastes - the Preachers search for meaning, vanity of vanities, the limits of wisdom wealth and pleasure, a time for everything, enjoying life as a gift from God, and the conclusion to fear God and keep his commandments.",
  openGraph: { title: "Book of Ecclesiastes Guide - Vine", description: "A guide to Ecclesiastes - the search for meaning, vanity of vanities, a time for everything, and fearing God.", images: ["/api/og?title=Ecclesiastes+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Ecclesiastes Guide - Vine", description: "A deep guide to the Book of Ecclesiastes.", images: ["/api/og?title=Ecclesiastes+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
