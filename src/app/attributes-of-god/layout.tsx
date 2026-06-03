import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Attributes of God",
  description: "Theology proper — the study of God’s nature and character — is the foundation of all Christian thought. What we believe about God shapes everything else. These are the attributes Scripture reveals.",
  openGraph: {
    title: "The Attributes of God — Vine",
    description: "Theology proper — the study of God’s nature and character — is the foundation of all Christian thought. What we believe about God shapes everything else. These are the attributes Scripture reveals.",
    images: ["/api/og?title=The+Attributes+of+God"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Attributes of God — Vine",
    description: "Theology proper — the study of God’s nature and character — is the foundation of all Christian thought. What we believe about God shapes everything else. These are the attributes Scripture reveals.",
    images: ["/api/og?title=The+Attributes+of+God"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
