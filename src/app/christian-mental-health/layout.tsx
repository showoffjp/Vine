import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Mental Health — Vine",
  description: "Mental illness is not a spiritual failure — it is a sign of being human in a broken world. A theological and pastoral guide to faith and mental health for sufferers, caregivers, and the church.",
  openGraph: {
    title: "Christian Mental Health — Vine",
    description: "Mental illness is not a spiritual failure — it is a sign of being human in a broken world. A theological and pastoral guide to faith and mental health for sufferers, caregivers, and the church.",
    images: ["/api/og?title=Christian+Mental+Health"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Mental Health — Vine",
    description: "Mental illness is not a spiritual failure — it is a sign of being human in a broken world. A theological and pastoral guide to faith and mental health for sufferers, caregivers, and the church.",
    images: ["/api/og?title=Christian+Mental+Health"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
