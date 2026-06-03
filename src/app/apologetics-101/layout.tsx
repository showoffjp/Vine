import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apologetics 101",
  description: "\"Always be ready to give a defense to everyone who asks you a reason for the hope that is in you — with gentleness and respect.\" (1 Peter 3:15)",
  openGraph: {
    title: "Apologetics 101 — Vine",
    description: "\"Always be ready to give a defense to everyone who asks you a reason for the hope that is in you — with gentleness and respect.\" (1 Peter 3:15)",
    images: ["/api/og?title=Apologetics+101"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apologetics 101 — Vine",
    description: "\"Always be ready to give a defense to everyone who asks you a reason for the hope that is in you — with gentleness and respect.\" (1 Peter 3:15)",
    images: ["/api/og?title=Apologetics+101"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
