import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Guide to Repentance — Vine",
  description: "Repentance is not self-flagellation but a direction change. A theological and practical guide to metanoia — the biblical meaning of turning, the prodigal pattern, and the ongoing practice of return.",
  openGraph: {
    title: "A Guide to Repentance — Vine",
    description: "Repentance is not self-flagellation but a direction change. A theological and practical guide to metanoia — the biblical meaning of turning, the prodigal pattern, and the ongoing practice of return.",
    images: ["/api/og?title=A+Guide+to+Repentance"],
  },
  twitter: {
    card: "summary_large_image",
    title: "A Guide to Repentance — Vine",
    description: "Repentance is not self-flagellation but a direction change. A theological and practical guide to metanoia — the biblical meaning of turning, the prodigal pattern, and the ongoing practice of return.",
    images: ["/api/og?title=A+Guide+to+Repentance"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
