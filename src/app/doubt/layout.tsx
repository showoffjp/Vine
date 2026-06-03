import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doubt & Honest Faith",
  description: "Doubt is not the opposite of faith — certainty is not required for faithfulness. Some of the most honest people in Scripture doubted, and God met them there.",
  openGraph: {
    title: "Doubt & Honest Faith — Vine",
    description: "Doubt is not the opposite of faith — certainty is not required for faithfulness. Some of the most honest people in Scripture doubted, and God met them there.",
    images: ["/api/og?title=Doubt+%26+Honest+Faith"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Doubt & Honest Faith — Vine",
    description: "Doubt is not the opposite of faith — certainty is not required for faithfulness. Some of the most honest people in Scripture doubted, and God met them there.",
    images: ["/api/og?title=Doubt+%26+Honest+Faith"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
