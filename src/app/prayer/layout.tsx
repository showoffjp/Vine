import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prayer Wall",
  description: "A sacred space to share your needs, stand with others, and witness God's faithfulness.",
  openGraph: {
    title: "Prayer Wall — Vine",
    description: "A sacred space to share your needs, stand with others, and witness God's faithfulness.",
    images: ["/api/og?title=Prayer+Wall"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer Wall — Vine",
    description: "A sacred space to share your needs, stand with others, and witness God's faithfulness.",
    images: ["/api/og?title=Prayer+Wall"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
