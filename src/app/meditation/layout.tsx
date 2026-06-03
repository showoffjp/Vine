import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biblical Meditation",
  description: "Not emptying the mind — filling it with God’s Word",
  openGraph: {
    title: "Biblical Meditation — Vine",
    description: "Not emptying the mind — filling it with God’s Word",
    images: ["/api/og?title=Biblical+Meditation"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biblical Meditation — Vine",
    description: "Not emptying the mind — filling it with God’s Word",
    images: ["/api/og?title=Biblical+Meditation"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
