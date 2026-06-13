import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of 1 Peter Guide - Christian Study",
  description: "A deep guide to the First Letter of Peter - a living hope through the resurrection, the believers identity as exiles and a chosen people, suffering for doing good, following Christs example, submission and holy living, and standing firm in grace.",
  openGraph: { title: "Book of 1 Peter Guide - Vine", description: "A guide to 1 Peter - living hope, exiles and a chosen people, suffering for doing good, and following Christ.", images: ["/api/og?title=1+Peter+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of 1 Peter Guide - Vine", description: "A deep guide to the First Letter of Peter.", images: ["/api/og?title=1+Peter+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
