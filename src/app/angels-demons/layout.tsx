import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Angels and Demons",
  description: "The Bible describes a populated spiritual world — angels who serve God and minister to his people, and demonic powers that oppose his purposes. Understanding both protects against both obsession an…",
  openGraph: {
    title: "Angels and Demons — Vine",
    description: "The Bible describes a populated spiritual world — angels who serve God and minister to his people, and demonic powers that oppose his purposes. Understanding both protects against both obsession an…",
    images: ["/api/og?title=Angels+and+Demons"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Angels and Demons — Vine",
    description: "The Bible describes a populated spiritual world — angels who serve God and minister to his people, and demonic powers that oppose his purposes. Understanding both protects against both obsession an…",
    images: ["/api/og?title=Angels+and+Demons"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
