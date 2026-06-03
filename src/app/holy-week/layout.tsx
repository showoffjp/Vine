import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Holy Week",
  description: "The most consequential week in human history, day by day. From the Triumphal Entry to the Empty Tomb — a guide for walking through Holy Week with full attention.",
  openGraph: {
    title: "Holy Week — Vine",
    description: "The most consequential week in human history, day by day. From the Triumphal Entry to the Empty Tomb — a guide for walking through Holy Week with full attention.",
    images: ["/api/og?title=Holy+Week"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Holy Week — Vine",
    description: "The most consequential week in human history, day by day. From the Triumphal Entry to the Empty Tomb — a guide for walking through Holy Week with full attention.",
    images: ["/api/og?title=Holy+Week"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
