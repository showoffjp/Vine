import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healed by His Stripes: A Guide to Christian Healing | Vine",
  description:
    "Explore the theology and practice of Christian healing — divine healing, healing prayer, faith and medicine, emotional healing, and testimonies of God's restorative power.",
  openGraph: {
    title: "Healed by His Stripes: A Guide to Christian Healing",
    description:
      "Discover what Scripture teaches about healing, how to pray for the sick, and the testimonies of those who have experienced God's healing grace.",
    images: ["/api/og?title=Healed+by+His+Stripes"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healed by His Stripes: A Guide to Christian Healing",
    description:
      "Discover what Scripture teaches about healing, how to pray for the sick, and the testimonies of those who have experienced God's healing grace.",
    images: ["/api/og?title=Healed+by+His+Stripes"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
