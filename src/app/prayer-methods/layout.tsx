import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ways to Pray",
  description: "Every prayer form that draws us closer to God",
  openGraph: {
    title: "Ways to Pray — Vine",
    description: "Every prayer form that draws us closer to God",
    images: ["/api/og?title=Ways+to+Pray"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ways to Pray — Vine",
    description: "Every prayer form that draws us closer to God",
    images: ["/api/og?title=Ways+to+Pray"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
