import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Stewardship Guide",
  description: "A biblical theology of stewardship — oikonomia, the parable of the talents, tithing, radical generosity, time and talent, creation care, and giving as worship. Everything belongs to God.",
  openGraph: {
    title: "Christian Stewardship Guide — Vine",
    description: "A biblical theology of stewardship — oikonomia, the parable of the talents, tithing, radical generosity, time and talent, creation care, and giving as worship. Everything belongs to God.",
    images: ["/api/og?title=Christian+Stewardship+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Stewardship Guide — Vine",
    description: "A biblical theology of stewardship — oikonomia, the parable of the talents, tithing, radical generosity, time and talent, creation care, and giving as worship. Everything belongs to God.",
    images: ["/api/og?title=Christian+Stewardship+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
