import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Daniel 6 Guide — The Den of Lions | Christian Study",
  description: "A deep guide to Daniel 6 — Daniel's excellence in Babylon, the plot of the officials, the den of lions, the angel who shut the lions' mouths, and Darius glorifying the God of Daniel.",
  openGraph: { title: "Daniel 6 Guide — The Den of Lions | Vine", description: "A guide to Daniel 6 — integrity under pressure, the lions' den, and God's deliverance of Daniel.", images: ["/api/og?title=Daniel+6+Guide"] },
  twitter: { card: "summary_large_image", title: "Daniel 6 Guide — The Den of Lions | Vine", description: "A deep guide to Daniel 6 — the den of lions and the angel who shut their mouths.", images: ["/api/og?title=Daniel+6+Guide"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
