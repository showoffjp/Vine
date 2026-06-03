import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Justice Is Native to God",
  description: "Justice is not a political import into Christianity — it is woven into the character of God, the message of the prophets, and the ministry of Jesus. The gospel concerns the whole person in the whol…",
  openGraph: {
    title: "Justice Is Native to God — Vine",
    description: "Justice is not a political import into Christianity — it is woven into the character of God, the message of the prophets, and the ministry of Jesus. The gospel concerns the whole person in the whol…",
    images: ["/api/og?title=Justice+Is+Native+to+God"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Justice Is Native to God — Vine",
    description: "Justice is not a political import into Christianity — it is woven into the character of God, the message of the prophets, and the ministry of Jesus. The gospel concerns the whole person in the whol…",
    images: ["/api/og?title=Justice+Is+Native+to+God"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
