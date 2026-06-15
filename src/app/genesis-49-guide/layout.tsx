import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Genesis 49 Guide - Christian Study",
  description: "A deep guide to Genesis chapter 49 - the dying Jacob blesses his twelve sons, foretelling the destinies of the tribes, the royal blessing of Judah, and his own death in the cave of Machpelah.",
  openGraph: { title: "Genesis 49 Guide - Vine", description: "A guide to Genesis 49 - Jacob blesses his twelve sons, the Lion of Judah and the scepter prophecy, and the death of the patriarch.", images: ["/api/og?title=Genesis+49+Guide"] },
  twitter: { card: "summary_large_image", title: "Genesis 49 Guide - Vine", description: "A deep guide to Genesis chapter 49.", images: ["/api/og?title=Genesis+49+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
