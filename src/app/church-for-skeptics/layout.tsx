import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Church for Skeptics",
  description: "For people who've been burned, disillusioned, or deeply wounded by a church experience — and aren't sure whether anything could be trusted again. You're not broken for questioning. You're human.",
  openGraph: {
    title: "Church for Skeptics — Vine",
    description: "For people who've been burned, disillusioned, or deeply wounded by a church experience — and aren't sure whether anything could be trusted again. You're not broken for questioning. You're human.",
    images: ["/api/og?title=Church+for+Skeptics"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Church for Skeptics — Vine",
    description: "For people who've been burned, disillusioned, or deeply wounded by a church experience — and aren't sure whether anything could be trusted again. You're not broken for questioning. You're human.",
    images: ["/api/og?title=Church+for+Skeptics"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
