import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Youth Ministry Guide",
  description: "The teenager who leaves for college without a robust, owned faith is the norm — not the exception. Here is what the research says, and what Scripture demands, for youth ministry that actually works.",
  openGraph: {
    title: "Youth Ministry Guide — Vine",
    description: "The teenager who leaves for college without a robust, owned faith is the norm — not the exception. Here is what the research says, and what Scripture demands, for youth ministry that actually works.",
    images: ["/api/og?title=Youth+Ministry+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Youth Ministry Guide — Vine",
    description: "The teenager who leaves for college without a robust, owned faith is the norm — not the exception. Here is what the research says, and what Scripture demands, for youth ministry that actually works.",
    images: ["/api/og?title=Youth+Ministry+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
