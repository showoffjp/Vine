import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theology Glossary",
  description: "Clear, honest definitions of key Christian theological terms — from the basics to the advanced — with real explanations of why they matter.",
  openGraph: {
    title: "Theology Glossary — Vine",
    description: "Clear, honest definitions of key Christian theological terms — from the basics to the advanced — with real explanations of why they matter.",
    images: ["/api/og?title=Theology+Glossary"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Theology Glossary — Vine",
    description: "Clear, honest definitions of key Christian theological terms — from the basics to the advanced — with real explanations of why they matter.",
    images: ["/api/og?title=Theology+Glossary"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
