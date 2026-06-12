import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Waiting on God — Vine",
  description: "They that wait upon the LORD shall renew their strength. A guide to the long obedience of waiting — Abraham, Joseph, and David, Advent hope, honest lament, and active waiting when God seems silent.",
  openGraph: {
    title: "Waiting on God — Vine",
    description: "They that wait upon the LORD shall renew their strength. A guide to the long obedience of waiting — Abraham, Joseph, and David, Advent hope, honest lament, and active waiting when God seems silent.",
    images: ["/api/og?title=Waiting+on+God"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waiting on God — Vine",
    description: "They that wait upon the LORD shall renew their strength. A guide to the long obedience of waiting — Abraham, Joseph, and David, Advent hope, honest lament, and active waiting when God seems silent.",
    images: ["/api/og?title=Waiting+on+God"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
