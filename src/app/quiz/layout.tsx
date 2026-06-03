import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Know Yourself. Know Your Calling.",
  description: "Fun, Scripture-based quizzes to help you understand your spiritual identity, gifts, and calling.",
  openGraph: {
    title: "Know Yourself. Know Your Calling. — Vine",
    description: "Fun, Scripture-based quizzes to help you understand your spiritual identity, gifts, and calling.",
    images: ["/api/og?title=Know+Yourself.+Know+Your+Calling."],
  },
  twitter: {
    card: "summary_large_image",
    title: "Know Yourself. Know Your Calling. — Vine",
    description: "Fun, Scripture-based quizzes to help you understand your spiritual identity, gifts, and calling.",
    images: ["/api/og?title=Know+Yourself.+Know+Your+Calling."],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
