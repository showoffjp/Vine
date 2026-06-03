import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to the Family",
  description: "You have made the most important decision of your life. What happens next matters enormously. These are the first steps — practical, honest, and grounded in Scripture — for the journey ahead.",
  openGraph: {
    title: "Welcome to the Family — Vine",
    description: "You have made the most important decision of your life. What happens next matters enormously. These are the first steps — practical, honest, and grounded in Scripture — for the journey ahead.",
    images: ["/api/og?title=Welcome+to+the+Family"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome to the Family — Vine",
    description: "You have made the most important decision of your life. What happens next matters enormously. These are the first steps — practical, honest, and grounded in Scripture — for the journey ahead.",
    images: ["/api/og?title=Welcome+to+the+Family"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
