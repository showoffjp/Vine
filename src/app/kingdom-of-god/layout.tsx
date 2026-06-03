import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Kingdom of God",
  description: "The kingdom of God is Jesus's central message — God's reign breaking into history in his person and ministry, already present and not yet fully arrived. Everything else in his teaching flows from t…",
  openGraph: {
    title: "The Kingdom of God — Vine",
    description: "The kingdom of God is Jesus's central message — God's reign breaking into history in his person and ministry, already present and not yet fully arrived. Everything else in his teaching flows from t…",
    images: ["/api/og?title=The+Kingdom+of+God"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Kingdom of God — Vine",
    description: "The kingdom of God is Jesus's central message — God's reign breaking into history in his person and ministry, already present and not yet fully arrived. Everything else in his teaching flows from t…",
    images: ["/api/og?title=The+Kingdom+of+God"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
