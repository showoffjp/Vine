import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Homeschool Guide",
  description: "Biblical foundations, proven approaches, trusted curricula, and real community for families educating their children at home.",
  openGraph: {
    title: "Christian Homeschool Guide — Vine",
    description: "Biblical foundations, proven approaches, trusted curricula, and real community for families educating their children at home.",
    images: ["/api/og?title=Christian+Homeschool+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Homeschool Guide — Vine",
    description: "Biblical foundations, proven approaches, trusted curricula, and real community for families educating their children at home.",
    images: ["/api/og?title=Christian+Homeschool+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
