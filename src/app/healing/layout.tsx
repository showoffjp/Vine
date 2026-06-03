import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healing & Wholeness",
  description: "Structured journeys for deep, lasting healing. Each path includes Scripture, reflection, prayer, and practical action steps.",
  openGraph: {
    title: "Healing & Wholeness — Vine",
    description: "Structured journeys for deep, lasting healing. Each path includes Scripture, reflection, prayer, and practical action steps.",
    images: ["/api/og?title=Healing+%26+Wholeness"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healing & Wholeness — Vine",
    description: "Structured journeys for deep, lasting healing. Each path includes Scripture, reflection, prayer, and practical action steps.",
    images: ["/api/og?title=Healing+%26+Wholeness"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
