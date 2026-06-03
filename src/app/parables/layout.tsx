import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parables of Jesus",
  description: "Deep study of parables — their context, meaning, and application",
  openGraph: {
    title: "Parables of Jesus — Vine",
    description: "Deep study of parables — their context, meaning, and application",
    images: ["/api/og?title=Parables+of+Jesus"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parables of Jesus — Vine",
    description: "Deep study of parables — their context, meaning, and application",
    images: ["/api/og?title=Parables+of+Jesus"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
