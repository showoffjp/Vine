import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carry each other's burdens.",
  description: "Post your prayer requests anonymously or publicly. Let the global Vine community pray with you. Galatians 6:2.",
  openGraph: {
    title: "Carry each other's burdens. — Vine",
    description: "Post your prayer requests anonymously or publicly. Let the global Vine community pray with you. Galatians 6:2.",
    images: ["/api/og?title=Carry+each+other's+burdens."],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carry each other's burdens. — Vine",
    description: "Post your prayer requests anonymously or publicly. Let the global Vine community pray with you. Galatians 6:2.",
    images: ["/api/og?title=Carry+each+other's+burdens."],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
