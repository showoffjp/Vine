import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Incarnation",
  description: "The eternal Son of God took on human flesh — not as a disguise but in genuine, irreversible humanity. Fully God, fully human, forever. This is the central miracle on which all salvation depends.",
  openGraph: {
    title: "The Incarnation — Vine",
    description: "The eternal Son of God took on human flesh — not as a disguise but in genuine, irreversible humanity. Fully God, fully human, forever. This is the central miracle on which all salvation depends.",
    images: ["/api/og?title=The+Incarnation"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Incarnation — Vine",
    description: "The eternal Son of God took on human flesh — not as a disguise but in genuine, irreversible humanity. Fully God, fully human, forever. This is the central miracle on which all salvation depends.",
    images: ["/api/og?title=The+Incarnation"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
