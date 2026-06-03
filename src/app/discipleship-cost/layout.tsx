import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Cost of Discipleship",
  description: "'Whoever wants to be my disciple must deny themselves and take up their cross and follow me.' Jesus was not vague about the terms. Counting the cost is not pessimism — it is the first act of genuin…",
  openGraph: {
    title: "The Cost of Discipleship — Vine",
    description: "'Whoever wants to be my disciple must deny themselves and take up their cross and follow me.' Jesus was not vague about the terms. Counting the cost is not pessimism — it is the first act of genuin…",
    images: ["/api/og?title=The+Cost+of+Discipleship"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Cost of Discipleship — Vine",
    description: "'Whoever wants to be my disciple must deny themselves and take up their cross and follow me.' Jesus was not vague about the terms. Counting the cost is not pessimism — it is the first act of genuin…",
    images: ["/api/og?title=The+Cost+of+Discipleship"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
