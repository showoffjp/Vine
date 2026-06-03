import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Lord's Prayer",
  description: "The prayer Jesus taught his disciples — “a summary of the whole gospel,” as Tertullian called it. Studied phrase by phrase, with the wisdom of the church fathers, as a pattern for all our praying.",
  openGraph: {
    title: "The Lord's Prayer — Vine",
    description: "The prayer Jesus taught his disciples — “a summary of the whole gospel,” as Tertullian called it. Studied phrase by phrase, with the wisdom of the church fathers, as a pattern for all our praying.",
    images: ["/api/og?title=The+Lord's+Prayer"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Lord's Prayer — Vine",
    description: "The prayer Jesus taught his disciples — “a summary of the whole gospel,” as Tertullian called it. Studied phrase by phrase, with the wisdom of the church fathers, as a pattern for all our praying.",
    images: ["/api/og?title=The+Lord's+Prayer"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
