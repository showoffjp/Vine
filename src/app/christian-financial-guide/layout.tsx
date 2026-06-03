import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Financial Guide",
  description: "Jesus talked about money more than almost any other subject. The biblical vision of stewardship — God owns everything, we manage it for his purposes — transforms how we earn, spend, save, give, and…",
  openGraph: {
    title: "Christian Financial Guide — Vine",
    description: "Jesus talked about money more than almost any other subject. The biblical vision of stewardship — God owns everything, we manage it for his purposes — transforms how we earn, spend, save, give, and…",
    images: ["/api/og?title=Christian+Financial+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Financial Guide — Vine",
    description: "Jesus talked about money more than almost any other subject. The biblical vision of stewardship — God owns everything, we manage it for his purposes — transforms how we earn, spend, save, give, and…",
    images: ["/api/og?title=Christian+Financial+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
