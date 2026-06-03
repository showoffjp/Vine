import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tough Questions, Real Answers",
  description: "The most common challenges to the Christian faith — answered honestly, with depth, and with the best scholarship available. Not for silencing questions but for thinking them through.",
  openGraph: {
    title: "Tough Questions, Real Answers — Vine",
    description: "The most common challenges to the Christian faith — answered honestly, with depth, and with the best scholarship available. Not for silencing questions but for thinking them through.",
    images: ["/api/og?title=Tough+Questions%2C+Real+Answers"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tough Questions, Real Answers — Vine",
    description: "The most common challenges to the Christian faith — answered honestly, with depth, and with the best scholarship available. Not for silencing questions but for thinking them through.",
    images: ["/api/og?title=Tough+Questions%2C+Real+Answers"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
