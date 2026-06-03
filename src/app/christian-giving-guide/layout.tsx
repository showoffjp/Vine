import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Giving Guide",
  description: "The biblical theology of generosity, the best organizations to support, and practical strategies for making giving a central discipline of Christian life. You cannot out-give God.",
  openGraph: {
    title: "Christian Giving Guide — Vine",
    description: "The biblical theology of generosity, the best organizations to support, and practical strategies for making giving a central discipline of Christian life. You cannot out-give God.",
    images: ["/api/og?title=Christian+Giving+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Giving Guide — Vine",
    description: "The biblical theology of generosity, the best organizations to support, and practical strategies for making giving a central discipline of Christian life. You cannot out-give God.",
    images: ["/api/og?title=Christian+Giving+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
