import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Christian Guide to Kindness and Goodness",
  description: "Kindness and goodness in the Christian faith - the fruit of the Spirit, the kindness of God that leads to repentance, practical compassion, doing good to all, and reflecting the goodness of God in a harsh world.",
  openGraph: { title: "Christian Guide to Kindness and Goodness - Vine", description: "Kindness and goodness - the fruit of the Spirit, the kindness of God, practical compassion, and doing good to all.", images: ["/api/og?title=Kindness+and+Goodness"] },
  twitter: { card: "summary_large_image", title: "Christian Guide to Kindness and Goodness - Vine", description: "Kindness and goodness in the Christian faith.", images: ["/api/og?title=Kindness+and+Goodness"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
