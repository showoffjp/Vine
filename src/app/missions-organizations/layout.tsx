import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Missions Organizations Directory",
  description: "The most impactful evangelical missions organizations in the world — what they do, what they have accomplished, and how you can engage. Go. Give. Pray. Send.",
  openGraph: {
    title: "Missions Organizations Directory — Vine",
    description: "The most impactful evangelical missions organizations in the world — what they do, what they have accomplished, and how you can engage. Go. Give. Pray. Send.",
    images: ["/api/og?title=Missions+Organizations+Directory"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Missions Organizations Directory — Vine",
    description: "The most impactful evangelical missions organizations in the world — what they do, what they have accomplished, and how you can engage. Go. Give. Pray. Send.",
    images: ["/api/og?title=Missions+Organizations+Directory"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
