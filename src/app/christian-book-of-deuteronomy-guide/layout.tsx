import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of Deuteronomy Guide - Christian Study",
  description: "A deep guide to the Book of Deuteronomy - Moses final sermons, the renewal of the covenant, the Shema and the greatest commandment, remembering Gods faithfulness, blessings and curses, and the call to choose life.",
  openGraph: { title: "Book of Deuteronomy Guide - Vine", description: "A guide to Deuteronomy - Moses final sermons, the Shema, covenant renewal, blessings and curses, and choosing life.", images: ["/api/og?title=Deuteronomy+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of Deuteronomy Guide - Vine", description: "A deep guide to the Book of Deuteronomy.", images: ["/api/og?title=Deuteronomy+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
