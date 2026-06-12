import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Contentment Guide",
  description: "Paul said he learned contentment in every state — abundance and want alike. This guide explores the biblical theology of sufficiency, contentment vs. complacency, gratitude practices, and how to find peace in suffering.",
  openGraph: {
    title: "Christian Contentment Guide — Vine",
    description: "Paul said he learned contentment in every state — abundance and want alike. This guide explores the biblical theology of sufficiency, contentment vs. complacency, gratitude practices, and how to find peace in suffering.",
    images: ["/api/og?title=Christian+Contentment+Guide"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Contentment Guide — Vine",
    description: "Paul said he learned contentment in every state — abundance and want alike. This guide explores the biblical theology of sufficiency, contentment vs. complacency, gratitude practices, and how to find peace in suffering.",
    images: ["/api/og?title=Christian+Contentment+Guide"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
