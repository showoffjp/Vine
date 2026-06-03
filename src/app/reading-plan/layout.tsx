import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Reading Journey",
  description: "Keep the streak alive! God's Word is a lamp to your feet.",
  openGraph: {
    title: "Your Reading Journey — Vine",
    description: "Keep the streak alive! God's Word is a lamp to your feet.",
    images: ["/api/og?title=Your+Reading+Journey"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Reading Journey — Vine",
    description: "Keep the streak alive! God's Word is a lamp to your feet.",
    images: ["/api/og?title=Your+Reading+Journey"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
