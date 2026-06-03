import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Church Membership",
  description: "Membership is what moves you from a crowd into a body. It is the covenant commitment that makes genuine pastoral care, accountability, and community possible — and costly.",
  openGraph: {
    title: "Church Membership — Vine",
    description: "Membership is what moves you from a crowd into a body. It is the covenant commitment that makes genuine pastoral care, accountability, and community possible — and costly.",
    images: ["/api/og?title=Church+Membership"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Church Membership — Vine",
    description: "Membership is what moves you from a crowd into a body. It is the covenant commitment that makes genuine pastoral care, accountability, and community possible — and costly.",
    images: ["/api/og?title=Church+Membership"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
