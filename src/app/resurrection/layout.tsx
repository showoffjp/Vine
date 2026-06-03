import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Resurrection of Christ",
  description: "The most important event in human history — and the most scrutinized. The bodily resurrection of Jesus is the hinge of Christian faith: “If Christ has not been raised, your faith is futile” (1 Cori…",
  openGraph: {
    title: "The Resurrection of Christ — Vine",
    description: "The most important event in human history — and the most scrutinized. The bodily resurrection of Jesus is the hinge of Christian faith: “If Christ has not been raised, your faith is futile” (1 Cori…",
    images: ["/api/og?title=The+Resurrection+of+Christ"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Resurrection of Christ — Vine",
    description: "The most important event in human history — and the most scrutinized. The bodily resurrection of Jesus is the hinge of Christian faith: “If Christ has not been raised, your faith is futile” (1 Cori…",
    images: ["/api/og?title=The+Resurrection+of+Christ"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
