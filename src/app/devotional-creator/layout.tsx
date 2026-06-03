import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Devotional Creator",
  description: "Write, share, and discover devotionals from believers around the world. Your insight might be exactly what someone needs today.",
  openGraph: {
    title: "Devotional Creator — Vine",
    description: "Write, share, and discover devotionals from believers around the world. Your insight might be exactly what someone needs today.",
    images: ["/api/og?title=Devotional+Creator"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devotional Creator — Vine",
    description: "Write, share, and discover devotionals from believers around the world. Your insight might be exactly what someone needs today.",
    images: ["/api/og?title=Devotional+Creator"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
