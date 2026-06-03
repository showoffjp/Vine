import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Prayer Movements",
  description: "From the Moravian 100-year prayer watch to IHOP to 24-7 Prayer — God is raising up intercessors across the world. The global prayer movement is one of the most significant signs of our time.",
  openGraph: {
    title: "Global Prayer Movements — Vine",
    description: "From the Moravian 100-year prayer watch to IHOP to 24-7 Prayer — God is raising up intercessors across the world. The global prayer movement is one of the most significant signs of our time.",
    images: ["/api/og?title=Global+Prayer+Movements"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Prayer Movements — Vine",
    description: "From the Moravian 100-year prayer watch to IHOP to 24-7 Prayer — God is raising up intercessors across the world. The global prayer movement is one of the most significant signs of our time.",
    images: ["/api/og?title=Global+Prayer+Movements"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
