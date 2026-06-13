import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of Esther Guide - Christian Study",
  description: "A deep guide to the Book of Esther - a Jewish queen in Persia, the threat of genocide, Mordecais challenge, for such a time as this, the reversal of fortunes, and the hidden providence of God where his name is never mentioned.",
  openGraph: { title: "Book of Esther Guide - Vine", description: "A guide to Esther - a queen in Persia, the threat of genocide, for such a time as this, and the hidden providence of God.", images: ["/api/og?title=Esther+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Esther Guide - Vine", description: "A deep guide to the Book of Esther.", images: ["/api/og?title=Esther+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
