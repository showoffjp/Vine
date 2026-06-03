import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Virtue",
  description: "Virtue ethics asks not what you should do but what kind of person you should become. The classical virtues — four cardinal, three theological — form the skeleton of a genuinely Christian character.",
  openGraph: {
    title: "Christian Virtue — Vine",
    description: "Virtue ethics asks not what you should do but what kind of person you should become. The classical virtues — four cardinal, three theological — form the skeleton of a genuinely Christian character.",
    images: ["/api/og?title=Christian+Virtue"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Virtue — Vine",
    description: "Virtue ethics asks not what you should do but what kind of person you should become. The classical virtues — four cardinal, three theological — form the skeleton of a genuinely Christian character.",
    images: ["/api/og?title=Christian+Virtue"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
