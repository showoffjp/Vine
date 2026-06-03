import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biblical Justice Theology",
  description: "A deep study of what Scripture — Hebrew and Greek — actually says about justice: the key terms, the Old and New Testament witness, and how Christians apply this today.",
  openGraph: {
    title: "Biblical Justice Theology — Vine",
    description: "A deep study of what Scripture — Hebrew and Greek — actually says about justice: the key terms, the Old and New Testament witness, and how Christians apply this today.",
    images: ["/api/og?title=Biblical+Justice+Theology"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biblical Justice Theology — Vine",
    description: "A deep study of what Scripture — Hebrew and Greek — actually says about justice: the key terms, the Old and New Testament witness, and how Christians apply this today.",
    images: ["/api/og?title=Biblical+Justice+Theology"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
