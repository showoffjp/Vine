import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Isaiah Chapter 22 Guide - The Valley of Vision | The Vine",
  description: "A deep guide to Isaiah 22 - the Valley of Vision oracle, God's judgment on Jerusalem for faithlessness during the Assyrian crisis, the removal of Shebna, and the appointment of Eliakim with the key of the house of David.",
  openGraph: { title: "Isaiah 22 Guide - Valley of Vision | The Vine", description: "A guide to Isaiah 22 - Jerusalem's false joy in a day of crisis, God's call to mourning, the removal of Shebna, and Eliakim the Messianic type.", images: ["/api/og?title=Isaiah+22+Guide"] },
  twitter: { card: "summary_large_image", title: "Isaiah 22 Guide - Valley of Vision | The Vine", description: "A deep guide to Isaiah chapter 22 - the Valley of Vision oracle.", images: ["/api/og?title=Isaiah+22+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
