import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Systematic Theology 101",
  description: "Systematic theology organizes Christian doctrine into the major loci — the classical headings under which the whole counsel of God is examined. This is the map of Christian thought.",
  openGraph: {
    title: "Systematic Theology 101 — Vine",
    description: "Systematic theology organizes Christian doctrine into the major loci — the classical headings under which the whole counsel of God is examined. This is the map of Christian thought.",
    images: ["/api/og?title=Systematic+Theology+101"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Systematic Theology 101 — Vine",
    description: "Systematic theology organizes Christian doctrine into the major loci — the classical headings under which the whole counsel of God is examined. This is the map of Christian thought.",
    images: ["/api/og?title=Systematic+Theology+101"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
