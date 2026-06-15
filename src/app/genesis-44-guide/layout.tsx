import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Genesis 44 Guide - Christian Study",
  description: "A deep guide to Genesis 44 - Joseph's final test of his brothers, the silver cup hidden in Benjamin's sack, Judah's approach, and his climactic plea to take Benjamin's place as a substitute to spare their father.",
  openGraph: { title: "Genesis 44 Guide - Vine", description: "A guide to Genesis 44 - Joseph's final test and Judah's plea of substitution.", images: ["/api/og?title=Genesis+44+Guide"] },
  twitter: { card: "summary_large_image", title: "Genesis 44 Guide - Vine", description: "A deep guide to Genesis 44.", images: ["/api/og?title=Genesis+44+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
