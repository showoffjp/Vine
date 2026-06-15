import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Genesis 27 Guide - Christian Study",
  description: "A deep guide to Genesis 27 - the blind Isaac, Rebekah and Jacob's deception, the stolen blessing, Esau's bitter weeping, and Jacob's flight to Haran, set against the mysterious working of God's promise that the older would serve the younger.",
  openGraph: { title: "Genesis 27 Guide - Vine", description: "A guide to Genesis 27 - favoritism, deception, the stolen blessing, and the unbroken purpose of God.", images: ["/api/og?title=Genesis+27+Guide"] },
  twitter: { card: "summary_large_image", title: "Genesis 27 Guide - Vine", description: "A deep guide to Genesis 27.", images: ["/api/og?title=Genesis+27+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
