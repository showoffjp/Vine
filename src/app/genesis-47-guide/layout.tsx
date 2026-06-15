import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Genesis 47 Guide - Christian Study",
  description: "A deep guide to Genesis chapter 47 - Joseph presents his family to Pharaoh, Jacob blesses the king, Joseph administers Egypt through the famine, and Jacob makes Joseph swear to bury him with his fathers in Canaan.",
  openGraph: { title: "Genesis 47 Guide - Vine", description: "A guide to Genesis 47 - Jacob before Pharaoh, the famine administration, and Israel settled in Goshen.", images: ["/api/og?title=Genesis+47+Guide"] },
  twitter: { card: "summary_large_image", title: "Genesis 47 Guide - Vine", description: "A deep guide to Genesis chapter 47.", images: ["/api/og?title=Genesis+47+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
