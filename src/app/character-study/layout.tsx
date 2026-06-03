import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biblical Character Studies",
  description: "Deep dives into the lives of biblical figures — their failures, faithfulness, key lessons, and what they reveal about God.",
  openGraph: {
    title: "Biblical Character Studies — Vine",
    description: "Deep dives into the lives of biblical figures — their failures, faithfulness, key lessons, and what they reveal about God.",
    images: ["/api/og?title=Biblical+Character+Studies"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biblical Character Studies — Vine",
    description: "Deep dives into the lives of biblical figures — their failures, faithfulness, key lessons, and what they reveal about God.",
    images: ["/api/og?title=Biblical+Character+Studies"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
