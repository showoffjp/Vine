import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Protestant Denominations Guide",
  description: "The major Protestant traditions — what they believe, where they came from, and what makes each one distinctive. Know your tradition; respect the others.",
  openGraph: {
    title: "Protestant Denominations Guide — Vine",
    description: "The major Protestant traditions — what they believe, where they came from, and what makes each one distinctive. Know your tradition; respect the others.",
    images: ["/api/og?title=Protestant+Denominations+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Protestant Denominations Guide — Vine",
    description: "The major Protestant traditions — what they believe, where they came from, and what makes each one distinctive. Know your tradition; respect the others.",
    images: ["/api/og?title=Protestant+Denominations+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
