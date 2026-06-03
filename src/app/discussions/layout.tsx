import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discussions",
  description: "A space for honest, grace-filled conversations about faith, life, and everything in between.",
  openGraph: {
    title: "Discussions — Vine",
    description: "A space for honest, grace-filled conversations about faith, life, and everything in between.",
    images: ["/api/og?title=Discussions"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Discussions — Vine",
    description: "A space for honest, grace-filled conversations about faith, life, and everything in between.",
    images: ["/api/og?title=Discussions"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
