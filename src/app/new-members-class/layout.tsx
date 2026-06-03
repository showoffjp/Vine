import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Members Class",
  description: "Church membership is a covenant, not a club card. A robust new members class is the most important equipping opportunity a church offers — shaping every expectation that follows.",
  openGraph: {
    title: "New Members Class — Vine",
    description: "Church membership is a covenant, not a club card. A robust new members class is the most important equipping opportunity a church offers — shaping every expectation that follows.",
    images: ["/api/og?title=New+Members+Class"],
  },
  twitter: {
    card: "summary_large_image",
    title: "New Members Class — Vine",
    description: "Church membership is a covenant, not a club card. A robust new members class is the most important equipping opportunity a church offers — shaping every expectation that follows.",
    images: ["/api/og?title=New+Members+Class"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
