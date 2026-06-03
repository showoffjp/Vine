import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scripture Memory Game",
  description: "4 game modes. 25 verses. Build your Bible memory one verse at a time.",
  openGraph: {
    title: "Scripture Memory Game — Vine",
    description: "4 game modes. 25 verses. Build your Bible memory one verse at a time.",
    images: ["/api/og?title=Scripture+Memory+Game"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scripture Memory Game — Vine",
    description: "4 game modes. 25 verses. Build your Bible memory one verse at a time.",
    images: ["/api/og?title=Scripture+Memory+Game"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
