import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prayer & Fasting",
  description: "Jesus assumed his followers would fast. Fasting is not a food issue — it is an attention issue. Hunger becomes a physical anchor that calls the soul back to prayer throughout the day.",
  openGraph: {
    title: "Prayer & Fasting — Vine",
    description: "Jesus assumed his followers would fast. Fasting is not a food issue — it is an attention issue. Hunger becomes a physical anchor that calls the soul back to prayer throughout the day.",
    images: ["/api/og?title=Prayer+%26+Fasting"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer & Fasting — Vine",
    description: "Jesus assumed his followers would fast. Fasting is not a food issue — it is an attention issue. Hunger becomes a physical anchor that calls the soul back to prayer throughout the day.",
    images: ["/api/og?title=Prayer+%26+Fasting"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
