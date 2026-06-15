import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Genesis 28 Chapter Guide — Christian Study",
  description: "A deep guide to Genesis 28 — Jacob's dream of a stairway to heaven at Bethel, the angels ascending and descending, God reaffirming the Abrahamic covenant, and Jacob's vow at the House of God.",
  openGraph: { title: "Genesis 28 Chapter Guide — Vine", description: "A guide to Genesis 28 — Jacob's ladder, the dream at Bethel, the Abrahamic covenant, and God's promise to be with Jacob wherever he goes.", images: ["/api/og?title=Genesis+28+Chapter+Guide"] },
  twitter: { card: "summary_large_image", title: "Genesis 28 Chapter Guide — Vine", description: "A deep guide to Genesis 28 — Jacob's dream at Bethel and the covenant promise.", images: ["/api/og?title=Genesis+28+Chapter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
