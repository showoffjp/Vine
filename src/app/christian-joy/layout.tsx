import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Joy of the Lord — Vine",
  description: "The joy of the LORD is your strength. A theological and practical guide to Christian joy — joy vs. happiness, rejoicing in trials, the fruit of the Spirit, and cultivating joy in every season.",
  openGraph: {
    title: "The Joy of the Lord — Vine",
    description: "The joy of the LORD is your strength. A theological and practical guide to Christian joy — joy vs. happiness, rejoicing in trials, the fruit of the Spirit, and cultivating joy in every season.",
    images: ["/api/og?title=The+Joy+of+the+Lord"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Joy of the Lord — Vine",
    description: "The joy of the LORD is your strength. A theological and practical guide to Christian joy — joy vs. happiness, rejoicing in trials, the fruit of the Spirit, and cultivating joy in every season.",
    images: ["/api/og?title=The+Joy+of+the+Lord"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
