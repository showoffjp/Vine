import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disability Ministry: A Biblical Guide",
  description: "The body of Christ is not fully the body of Christ without people with disabilities. The church that creates space for every person — regardless of ability — reflects the Kingdom of God more comple…",
  openGraph: {
    title: "Disability Ministry: A Biblical Guide — Vine",
    description: "The body of Christ is not fully the body of Christ without people with disabilities. The church that creates space for every person — regardless of ability — reflects the Kingdom of God more comple…",
    images: ["/api/og?title=Disability+Ministry%3A+A+Biblical+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Disability Ministry: A Biblical Guide — Vine",
    description: "The body of Christ is not fully the body of Christ without people with disabilities. The church that creates space for every person — regardless of ability — reflects the Kingdom of God more comple…",
    images: ["/api/og?title=Disability+Ministry%3A+A+Biblical+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
