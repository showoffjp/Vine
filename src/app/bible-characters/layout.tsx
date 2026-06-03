import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bible Characters",
  description: "The Bible tells God's story through real people — complex, failing, faithful human beings whose lives illuminate both the character of God and the possibilities of grace-shaped humanity.",
  openGraph: {
    title: "Bible Characters — Vine",
    description: "The Bible tells God's story through real people — complex, failing, faithful human beings whose lives illuminate both the character of God and the possibilities of grace-shaped humanity.",
    images: ["/api/og?title=Bible+Characters"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bible Characters — Vine",
    description: "The Bible tells God's story through real people — complex, failing, faithful human beings whose lives illuminate both the character of God and the possibilities of grace-shaped humanity.",
    images: ["/api/og?title=Bible+Characters"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
