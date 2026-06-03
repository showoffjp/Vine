import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Marriage",
  description: "Marriage is a covenant, not a contract — and a picture of the gospel. Christ loved the church and gave himself up for her. That is the model, the standard, and the power available to Christian coup…",
  openGraph: {
    title: "Christian Marriage — Vine",
    description: "Marriage is a covenant, not a contract — and a picture of the gospel. Christ loved the church and gave himself up for her. That is the model, the standard, and the power available to Christian coup…",
    images: ["/api/og?title=Christian+Marriage"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Marriage — Vine",
    description: "Marriage is a covenant, not a contract — and a picture of the gospel. Christ loved the church and gave himself up for her. That is the model, the standard, and the power available to Christian coup…",
    images: ["/api/og?title=Christian+Marriage"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
