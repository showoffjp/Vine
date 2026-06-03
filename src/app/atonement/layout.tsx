import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theories of the Atonement",
  description: "Why did Jesus have to die? The church has answered this question in multiple ways — each illuminating a different facet of what the cross accomplished. No single theory exhausts the mystery.",
  openGraph: {
    title: "Theories of the Atonement — Vine",
    description: "Why did Jesus have to die? The church has answered this question in multiple ways — each illuminating a different facet of what the cross accomplished. No single theory exhausts the mystery.",
    images: ["/api/og?title=Theories+of+the+Atonement"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Theories of the Atonement — Vine",
    description: "Why did Jesus have to die? The church has answered this question in multiple ways — each illuminating a different facet of what the cross accomplished. No single theory exhausts the mystery.",
    images: ["/api/og?title=Theories+of+the+Atonement"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
