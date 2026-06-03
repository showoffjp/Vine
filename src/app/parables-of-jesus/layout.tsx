import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Parables of Jesus",
  description: "Earthly stories with heavenly meaning. Through everyday images of seeds, feasts, shepherds, and stewards, Jesus unveiled the secrets of the kingdom of God — and laid bare the hearts of all who listen.",
  openGraph: {
    title: "The Parables of Jesus — Vine",
    description: "Earthly stories with heavenly meaning. Through everyday images of seeds, feasts, shepherds, and stewards, Jesus unveiled the secrets of the kingdom of God — and laid bare the hearts of all who listen.",
    images: ["/api/og?title=The+Parables+of+Jesus"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Parables of Jesus — Vine",
    description: "Earthly stories with heavenly meaning. Through everyday images of seeds, feasts, shepherds, and stewards, Jesus unveiled the secrets of the kingdom of God — and laid bare the hearts of all who listen.",
    images: ["/api/og?title=The+Parables+of+Jesus"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
