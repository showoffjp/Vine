import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faith & Technology",
  description: "Technology is not neutral — it shapes attention, habits, and formation. Christians must ask not only what they use technology for, but what technology uses them for.",
  openGraph: {
    title: "Faith & Technology — Vine",
    description: "Technology is not neutral — it shapes attention, habits, and formation. Christians must ask not only what they use technology for, but what technology uses them for.",
    images: ["/api/og?title=Faith+%26+Technology"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faith & Technology — Vine",
    description: "Technology is not neutral — it shapes attention, habits, and formation. Christians must ask not only what they use technology for, but what technology uses them for.",
    images: ["/api/og?title=Faith+%26+Technology"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
