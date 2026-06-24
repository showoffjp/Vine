import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merch -- The Vine",
  description: "Wear your faith. The Vine merchandise: Scripture-rooted apparel, journals, and accessories for followers of Jesus Christ.",
  openGraph: {
    title: "Merch -- The Vine",
    description: "Christ-centered apparel, prayer journals, and accessories. Rooted in Scripture. Built for believers.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
