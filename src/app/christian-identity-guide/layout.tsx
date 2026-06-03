import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who You Are in Christ",
  description: "Your deepest identity is not what you do, what you've done, or what others say. It is what God declares in Christ — permanently, unconditionally, irrevocably. This is who you are.",
  openGraph: {
    title: "Who You Are in Christ — Vine",
    description: "Your deepest identity is not what you do, what you've done, or what others say. It is what God declares in Christ — permanently, unconditionally, irrevocably. This is who you are.",
    images: ["/api/og?title=Who+You+Are+in+Christ"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Who You Are in Christ — Vine",
    description: "Your deepest identity is not what you do, what you've done, or what others say. It is what God declares in Christ — permanently, unconditionally, irrevocably. This is who you are.",
    images: ["/api/og?title=Who+You+Are+in+Christ"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
