import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who You Are in Christ",
  description: "Your identity is not what you do, what others think, or what you have. In Christ, you have been given a new name, a new nature, and a permanent standing before God.",
  openGraph: {
    title: "Who You Are in Christ — Vine",
    description: "Your identity is not what you do, what others think, or what you have. In Christ, you have been given a new name, a new nature, and a permanent standing before God.",
    images: ["/api/og?title=Who+You+Are+in+Christ"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Who You Are in Christ — Vine",
    description: "Your identity is not what you do, what others think, or what you have. In Christ, you have been given a new name, a new nature, and a permanent standing before God.",
    images: ["/api/og?title=Who+You+Are+in+Christ"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
