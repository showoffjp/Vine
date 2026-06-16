import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Isaiah Chapter 23 Guide - The Oracle Against Tyre | The Vine",
  description: "A deep guide to Isaiah 23 - the oracle against Tyre, God's sovereignty over world trade and commerce, the 70-year desolation, and the remarkable closing promise that Tyre's wages would be holy to the LORD.",
  openGraph: { title: "Isaiah 23 Guide - Oracle Against Tyre | The Vine", description: "A guide to Isaiah 23 - the fall of proud commercial Tyre, God's sovereignty over wealth and nations, and Tyre's wages consecrated to the LORD.", images: ["/api/og?title=Isaiah+23+Guide"] },
  twitter: { card: "summary_large_image", title: "Isaiah 23 Guide - Oracle Against Tyre | The Vine", description: "A deep guide to Isaiah chapter 23 - the oracle against Tyre and God's sovereignty over world trade.", images: ["/api/og?title=Isaiah+23+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
