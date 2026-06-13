import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book of 2 Samuel Guide - Christian Study",
  description: "A deep guide to the Second Book of Samuel - David becomes king, the ark brought to Jerusalem, the Davidic covenant, David and Bathsheba, the consequences of sin, Absaloms rebellion, and the portrait of a flawed king after Gods heart.",
  openGraph: { title: "Book of 2 Samuel Guide - Vine", description: "A guide to 2 Samuel - David becomes king, the Davidic covenant, David and Bathsheba, and a flawed king after Gods heart.", images: ["/api/og?title=2+Samuel+Guide"] },
  twitter: { card: "summary_large_image", title: "Book of 2 Samuel Guide - Vine", description: "A deep guide to the Second Book of Samuel.", images: ["/api/og?title=2+Samuel+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
