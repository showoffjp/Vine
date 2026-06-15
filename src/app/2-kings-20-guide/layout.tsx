import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "2 Kings 20 Guide - Christian Study",
  description: "A deep guide to 2 Kings 20 - Hezekiah's mortal illness and tearful prayer, the added fifteen years, the sign of the shadow going back ten steps, the Babylonian envoys, and Isaiah's warning of the coming exile.",
  openGraph: { title: "2 Kings 20 Guide - Vine", description: "A guide to 2 Kings 20 - Hezekiah's healing and the warning of exile.", images: ["/api/og?title=2+Kings+20+Guide"] },
  twitter: { card: "summary_large_image", title: "2 Kings 20 Guide - Vine", description: "A deep guide to 2 Kings 20.", images: ["/api/og?title=2+Kings+20+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
