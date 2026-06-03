import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Famous Conversion Stories",
  description: "The most dramatic and significant conversions in Christian history — from Augustine’s restless heart to C.S. Lewis’s reluctant surrender. Every conversion reveals something about the grace of God.",
  openGraph: {
    title: "Famous Conversion Stories — Vine",
    description: "The most dramatic and significant conversions in Christian history — from Augustine’s restless heart to C.S. Lewis’s reluctant surrender. Every conversion reveals something about the grace of God.",
    images: ["/api/og?title=Famous+Conversion+Stories"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Famous Conversion Stories — Vine",
    description: "The most dramatic and significant conversions in Christian history — from Augustine’s restless heart to C.S. Lewis’s reluctant surrender. Every conversion reveals something about the grace of God.",
    images: ["/api/og?title=Famous+Conversion+Stories"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
