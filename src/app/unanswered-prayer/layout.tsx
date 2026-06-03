import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unanswered Prayer",
  description: "Every believer has prayed and felt they received nothing. The experience of unanswered prayer is one of the most faith-testing realities of the Christian life — and the Bible does not avoid it.",
  openGraph: {
    title: "Unanswered Prayer — Vine",
    description: "Every believer has prayed and felt they received nothing. The experience of unanswered prayer is one of the most faith-testing realities of the Christian life — and the Bible does not avoid it.",
    images: ["/api/og?title=Unanswered+Prayer"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unanswered Prayer — Vine",
    description: "Every believer has prayed and felt they received nothing. The experience of unanswered prayer is one of the most faith-testing realities of the Christian life — and the Bible does not avoid it.",
    images: ["/api/og?title=Unanswered+Prayer"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
