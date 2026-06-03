import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interfaith Conversations",
  description: "How to talk to Muslims, Jews, Hindus, Buddhists, and others about Jesus — with genuine respect, honest theology, and the humility of someone who knows they have been found by grace.",
  openGraph: {
    title: "Interfaith Conversations — Vine",
    description: "How to talk to Muslims, Jews, Hindus, Buddhists, and others about Jesus — with genuine respect, honest theology, and the humility of someone who knows they have been found by grace.",
    images: ["/api/og?title=Interfaith+Conversations"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interfaith Conversations — Vine",
    description: "How to talk to Muslims, Jews, Hindus, Buddhists, and others about Jesus — with genuine respect, honest theology, and the humility of someone who knows they have been found by grace.",
    images: ["/api/og?title=Interfaith+Conversations"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
