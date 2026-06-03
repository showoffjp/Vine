import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bible Reading Challenges",
  description: "From reading the whole Bible in 7 days to one chapter a day — every level, every schedule, every goal. The best plan is the one you'll actually do.",
  openGraph: {
    title: "Bible Reading Challenges — Vine",
    description: "From reading the whole Bible in 7 days to one chapter a day — every level, every schedule, every goal. The best plan is the one you'll actually do.",
    images: ["/api/og?title=Bible+Reading+Challenges"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bible Reading Challenges — Vine",
    description: "From reading the whole Bible in 7 days to one chapter a day — every level, every schedule, every goal. The best plan is the one you'll actually do.",
    images: ["/api/og?title=Bible+Reading+Challenges"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
