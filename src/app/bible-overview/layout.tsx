import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bible Book Overview",
  description: "Know what every book is about — its theme, author, and big idea",
  openGraph: {
    title: "Bible Book Overview — Vine",
    description: "Know what every book is about — its theme, author, and big idea",
    images: ["/api/og?title=Bible+Book+Overview"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bible Book Overview — Vine",
    description: "Know what every book is about — its theme, author, and big idea",
    images: ["/api/og?title=Bible+Book+Overview"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
