import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biblical Manhood",
  description: "Not a list of behaviors to perform but a character to form. Biblical manhood is servant leadership, cruciform strength, tenderness deployed for others — modeled by Jesus himself.",
  openGraph: {
    title: "Biblical Manhood — Vine",
    description: "Not a list of behaviors to perform but a character to form. Biblical manhood is servant leadership, cruciform strength, tenderness deployed for others — modeled by Jesus himself.",
    images: ["/api/og?title=Biblical+Manhood"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biblical Manhood — Vine",
    description: "Not a list of behaviors to perform but a character to form. Biblical manhood is servant leadership, cruciform strength, tenderness deployed for others — modeled by Jesus himself.",
    images: ["/api/og?title=Biblical+Manhood"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
