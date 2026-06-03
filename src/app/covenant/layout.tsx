import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Covenant",
  description: "The spine of the Bible — from Eden to the New Jerusalem, God binds himself to his people in covenant.",
  openGraph: {
    title: "Covenant — Vine",
    description: "The spine of the Bible — from Eden to the New Jerusalem, God binds himself to his people in covenant.",
    images: ["/api/og?title=Covenant"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Covenant — Vine",
    description: "The spine of the Bible — from Eden to the New Jerusalem, God binds himself to his people in covenant.",
    images: ["/api/og?title=Covenant"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
