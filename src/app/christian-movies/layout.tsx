import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Essential Christian Films",
  description: "Movies that take faith seriously — from Mel Gibson’s Passion to Terrence Malick’s hidden martyrdom, from Eric Liddell’s Olympic conviction to Desmond Doss’s battlefield witness.",
  openGraph: {
    title: "Essential Christian Films — Vine",
    description: "Movies that take faith seriously — from Mel Gibson’s Passion to Terrence Malick’s hidden martyrdom, from Eric Liddell’s Olympic conviction to Desmond Doss’s battlefield witness.",
    images: ["/api/og?title=Essential+Christian+Films"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Essential Christian Films — Vine",
    description: "Movies that take faith seriously — from Mel Gibson’s Passion to Terrence Malick’s hidden martyrdom, from Eric Liddell’s Olympic conviction to Desmond Doss’s battlefield witness.",
    images: ["/api/og?title=Essential+Christian+Films"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
